const{test, expect}=require('@playwright/test')
const { Console } = require('console')
test('Test Dropdown', async({page})=>{

     await page.goto('https://automationexercise.com/')

     await page.locator('//a[normalize-space()="Signup / Login"]').click()

     await expect(page).toHaveURL('https://automationexercise.com/login')
     console.log('Redirect url is:', 'https://automationexercise.com/login')

     await page.locator('//input[@placeholder="Name"]').fill('Bikram')
     console.log('Name is:', 'Bikram')
     
     //RANDOM EMAIL GENERATION
     //await page.locator('//input[@data-qa="signup-email"]').fill('qa212@yopmail.com')
     const randomEmail = `qa${Date.now()}@yopmail.com`;
     
     await page.locator('//input[@data-qa="signup-email"]').fill(randomEmail)
     
     console.log('Randoom Email is:', randomEmail)

     await page.locator('//button[normalize-space()="Signup"]').click()
     await page.waitForTimeout(2000)


     await expect(page).toHaveURL('https://automationexercise.com/signup')
     console.log('https://automationexercise.com/signup')
     
     const DateOfBirthLabel=page.locator('//label[normalize-space()="Date of Birth"]')
     await expect(DateOfBirthLabel).toHaveText('Date of Birth')
     console.log('Date Of Birth Label is:', 'Date of Birth')
     
      await page.locator('select#days').click()
      await page.waitForTimeout(3000)
      
          
      // ✅ Use selectOption instead of hover
      const dayDropdown = page.locator('select#days');
      const options = await dayDropdown.locator('option').allTextContents();

       console.log('Total options found:', options.length);

      for (let i = 1; i < options.length; i++) { // skip "Day"
       const value = await dayDropdown.locator(`option:nth-child(${i + 1})`).getAttribute('value');
      console.log(`Selecting option: ${options[i]}`);
      await dayDropdown.selectOption(value);
      await page.waitForTimeout(100); // small delay for visibility
     
      }

      // for moth dropdown
      // Month dropdown
        const monthDropdown = page.locator('#months');
        const monthOptions = await monthDropdown.locator('option').allTextContents();

         console.log('Total month options:', monthOptions.length);

         for (let j = 1; j < monthOptions.length; j++) { // ✅ use monthOptions
         const value = await monthDropdown.locator(`option:nth-child(${j + 1})`).getAttribute('value');
         console.log(`Selecting month: ${monthOptions[j]}`);
          await monthDropdown.selectOption(value);
           await page.waitForTimeout(100);
             }
               
           //year dropdown
    // Year dropdown
const yearDropdown = page.locator('#years');
const yearOptions = await yearDropdown.locator('option').allTextContents();

console.log('Total year options:', yearOptions.length);

   for (let k = 1; k < yearOptions.length; k++) {  
   const value = await yearDropdown.locator(`option:nth-child(${k + 1})`).getAttribute('value');
   console.log(`Selecting year: ${yearOptions[k]}`);
   await yearDropdown.selectOption(value);
}

   //country dropdown
   
 const countryLabel = page.locator('//label[@for="country"]')
 await expect(countryLabel).toHaveText('Country *')
 console.log('Country Label is:', 'Country *')

 const countryDropdown = page.locator('select#country')
 const countryOptions = await countryDropdown.locator('option').allTextContents()
 console.log('Total Country options:', countryOptions.length)

 for (let c = 1; c < countryOptions.length; c++) {
    const value = await countryDropdown.locator(`option:nth-child(${c + 1})`).getAttribute('value')
    console.log(`selecting country: ${countryOptions[c]}`)
    await countryDropdown.selectOption(value)

}

await page.screenshot({path:'screenshots/dropdown.png', fullpage: "true"})


})