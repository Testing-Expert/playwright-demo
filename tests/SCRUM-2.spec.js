const{test, expect}=require('@playwright/test')
 test('Login Functionality- automation', async({page})=>{

await page.goto('https://automationexercise.com/')

await expect(page.locator('//a[normalize-space()="Signup / Login"]')).toBeVisible()
await page.locator('//a[normalize-space()="Signup / Login"]').click()

//tilte visible-expect(assertion)
const title=await page.title()
await expect(title).toBe('Automation Exercise - Signup / Login')                 //title[normalize-space()='Automation Exercise - Signup / Login']
console.log('page title is:', 'Automation Exercise - Signup / Login' )

//redirect url check- expect (assertion)
await expect(page).toHaveURL('https://automationexercise.com/login')
console.log('redirect signup url:', 'https://automationexercise.com/login')

//Text visible- New User Signup!
await expect(page.getByText('New User Signup!')).toBeVisible()
console.log('Text visible is:', 'New User Signup!')

//verify placeholse of Name filed
const namePlaceholder= await page.getAttribute('//input[@placeholder="Name"]','Placeholder' )
await expect(namePlaceholder).toBe('Name')
console.log('Name Field Placeholder Text is:', 'Name')

//verify placeholse of Email filed
const emailPlaceholder= await page.getAttribute('//input[@data-qa="signup-email"]', 'Placeholder')
await expect(emailPlaceholder).toBe('Email Address')
console.log('Email Filled Placeholder is:', 'Email Address')

// name and email filed fill with details
await page.locator('//input[@placeholder="Name"]').fill('Bikram')
console.log('Using name:', 'Bikram')

//Random email generate
const randomEmail = `qa${Date.now()}@yopmail.com`;
await page.locator('//input[@data-qa="signup-email"]').fill(randomEmail);
console.log('Using random email:', randomEmail)

await page.waitForTimeout(3000)

//click on Login button 
await page.locator('//button[normalize-space()="Signup"]').click()

//redirect after click on login btn - https://automationexercise.com/signup

await expect(page).toHaveURL('https://automationexercise.com/signup')
console.log('Recdirect url:', 'https://automationexercise.com/signup')

await page.waitForTimeout(3000)
 })