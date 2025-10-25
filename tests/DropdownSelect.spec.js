const {test, expect}= require('@playwright/test')
test('Dropdown select date/month/year', async ({page})=> {

//GO TO URL/launch the url
await page.goto('https://automationexercise.com/')

await page.locator('//a[normalize-space()="Signup / Login"]').click()

//EXPECT URL after click login
await expect(page).toHaveURL('https://automationexercise.com/login')

//FILL SIGNUP DETAILS  and CLICK SIGNUP BUTTON
await page.locator('//input[@placeholder="Name"]').fill('Bikram')
const randomEmail = `qa${Date.now()}@yopmail.com`;
await page.locator('input[data-qa="signup-email"]').fill(randomEmail);
//await page.locator('//input[@data-qa="signup-email"]').fill('qa222@yopmail.com')
await page.locator('//button[normalize-space()="Signup"]').click()
console.log('Using email:', randomEmail);


//EXPECT URL after signup
await expect(page).toHaveURL('https://automationexercise.com/signup')

//SELECT TITLE/RADIO BUTTON/days select 
await page.locator('#days').click()
await page.locator('#days').selectOption('11')
await expect(page.locator('#days')).toHaveValue('11')
console.log('Day selected successfully:', '11')
//await page.waitForTimeout(3000)


//SELECT MONTH
await page.locator('#months').click()
await page.locator('#months').selectOption('May')
await expect(page.locator('#months')).toHaveValue('5')

console.log('Month selected successfully:', 'May')
//await page.waitForTimeout(3000)

//SELECT YEAR
await page.locator('#years').click()
await page.locator('#years').selectOption('1989')
console.log('Year selected successfully:', '1989')
//await page.waitForTimeout(3000)


//COUNTRY SELECT
await page.locator('select#country').click()
// Step 2: Locate the country dropdown
  const countryDropdown = page.locator('select#country');

  // Step 3: Get all option texts
  const countryOptions = await countryDropdown.locator('option').allTextContents();
  // Step 4: Print total count and names
  console.log('Total countries found:', countryOptions.length);
  console.log('Country list:', countryOptions);
await page.locator('select#country').selectOption('Canada')

console.log('Country selected successfully:', 'Canada')
await page.waitForTimeout(3000)


})