const{test, expect}=require('@playwright/test')
const { Console } = require('console')
test('SignUp Form Testing', async({page})=>{

await page.setDefaultTimeout(40000)
await page.goto('https://automationexercise.com/login')


//verify the text on signup form page - Enter Account Information
//await page.waitForTimeout(3000)
//await expect(page.locator('div[class="signup-form"] h2]')).toBeVisible()
//console.log('tezt is visible:', 'Enter Account Information')

await page.locator('//input[@placeholder="Name"]').fill('Bikram')
//await page.locator('//input[@data-qa="signup-email"]').fill('qa112@yopmail.com')     //qa123@yopmail.com   - is used
//USING RANDOM EMAIL GENERATION
const randomEmail = `qa${Date.now()}@yopmail.com`;
await page.locator('//input[@data-qa="signup-email"]').fill(randomEmail)
console.log('Using email:', randomEmail)

await page.locator('//button[normalize-space()="Signup"]').click()

await expect(page).toHaveURL('https://automationexercise.com/signup')
console.log('Signup form url is:', 'https://automationexercise.com/signup')





await expect(page.locator('//label[normalize-space()="Title"]')).toHaveText('Title')
await page.waitForTimeout(3000)


await page.locator('#id_gender1').click()
//await page.waitForTimeout(3000)

//name pre-filled
const nameValue= page.inputValue('#name')
await expect(nameValue).not.toBe(' ')
console.log('Signup name is pre-filled:', 'Bikram')


//Email pre-filled
const emailVlaue= page.inputValue('//input[@name="email_address"]')
await expect(emailVlaue).not.toBe(' ')
console.log('Elail pre-field is:', randomEmail)

//text verify - password*    //fill the password
await expect(page.locator('//label[@for="password"]')).toHaveText('Password * ')
console.log('password leable is:', 'Password *')

//Country pre-filled
const CountryValue= await page.locator('//select[@id="country"]')
await expect(CountryValue).not.toBe(' ')
console.log('Country pre-filled is:', 'India')


await page.locator('//input[@id="password"]').fill('admin@123')

const DateOfBirthLabel= await page.locator('//label[normalize-space()="Date of Birth"]')
await expect(DateOfBirthLabel).toBeVisible('Date of Birth')
console.log('Label is:', 'Date of Birth')

//check box check
await page.locator('//input[@id="newsletter"]').click()


const NewsletterLabel= await page.locator('label[for="newsletter"]')
await expect(NewsletterLabel).toBeVisible('Sign up for our newsletter!')
console.log('newsletter label is:', 'Sign up for our newsletter!')


await page.locator('//input[@id="optin"]').click()

const OptinLabel = await page.locator('label[for="optin"]')
await expect(OptinLabel).toBeVisible('Receive special offers from our partners!')
console.log('optin level is:', 'Receive special offers from our partners!')

await expect(page.locator('//b[normalize-space()="Address Information"]')).toHaveText('Address Information')
console.log('Text is:', 'Address Information')

//First name field
const firstnameLabel=await page.locator('//label[@for="first_name"]')
await expect(firstnameLabel).toBeVisible('First name *')
console.log('first name label is:', 'First name *')

await page.locator('#first_name').fill('Royal')
await expect(page.locator('#first_name')).toBeVisible('Royal')
console.log('first name is:', 'Royal')


//Last name field
const lastNameLabel=await page.locator('//label[@for="last_name"]')
await expect(lastNameLabel).toBeVisible('Last name *')
console.log('last Name label is:', 'Last name *')

await page.locator('#last_name').fill('Raja')
await expect(page.locator('#last_name')).toBeVisible('Raja')
console.log('last Name is:', 'Raja')
//await page.waitForTimeout(3000)

const companyLabel=page.locator('label[for="company"]')
await expect(companyLabel).toBeVisible('Company')
console.log('Company Label is:', 'Company')
await page.locator('label[for="company"]').fill('99App Tech')

const addressLabel=page.locator('label[for="address1"]')
await expect(addressLabel).toBeVisible('Address *')
console.log('Address Label is:', 'Address *')
await page.locator('#address1').fill('New Ashok Nager')
console.log('Address is:', 'New Ashok Nager')



const address2Label= page.locator('label[for="address2"]')
await expect(address2Label).toBeVisible('Address 2')
console.log('address2 Label is:', 'Address 2')
await page.locator('#address2').fill('Block-B, Gali No.-9')
console.log('adress2 is', 'Block-B, Gali No.-9')

const stateLabel=page.locator('label[for="state"]')
await expect(stateLabel).toBeVisible('State *')
console.log('state Label is:', 'State *')
await page.locator('#state').fill('Delhi')
console.log('state is:', 'Delhi')

const cityLabel=page.locator('//div[@class="login-form"]//form')
await expect(cityLabel).toBeVisible('City *')
console.log('cityLabel is:', 'City *')
await page.locator('#city').fill('Delhi')
console.log('city is:', 'Delhi')


const zipcodeLabel=page.locator('div[class="login-form"] form')
await expect(zipcodeLabel).toBeVisible('Zipcode *')
console.log('zipcode Label is:', 'Zipcode *')
await page.locator('#zipcode').fill('100091')
console.log('zip code is:', '100091')


const mobileNoLabel=page.locator('label[for="mobile_number"]')
await expect(mobileNoLabel).toBeVisible('Mobile Number *')
console.log('Mobile No. label is:', 'Mobile Number *')
await page.locator('#mobile_number').fill('1234567890')
console.log('Mobile no. is:', '1234567890')

await page.waitForTimeout(3000)


const createAccountBtn=page.locator('//button[normalize-space()="Create Account"]')
await expect(createAccountBtn).toBeVisible('Create Account')
console.log('Create Account Label is:', 'Create Account')
await page.locator('//button[normalize-space()="Create Account"]').click()


await expect(page).toHaveURL('https://automationexercise.com/account_created')
console.log('Redirected Page url is:', ('https://automationexercise.com/account_created'))


const SuccessMessage=page.locator('//b[normalize-space()="Account Created!')
await expect (page.locator('//b[normalize-space()="Account Created!"]')).toBeVisible('Account Created!')
console.log('Success Message is:', 'Account Created!')

})