// Login page- 
/*1- Launch the url  - https://www.demoblaze.com/
2- Click on the login 
3- Confirm the login modal 
4- fill the username (valid)
5- fill the password (valid)
6- Find the login button and click on that login button 
7- verify the redirect "welcome pavanol" page
*/
 
/*const{test, expect} =require('@playwright/test')

test('Login page', async ({page})=> {
     await page.goto('https://www.demoblaze.com/')
     await page.locator('#login2').click()

     //await expect.locator('.modal-content').toBeVisible()
     //await page.locator('//*[@id="logInModal"]/div/div/div[2]/form/div[1]/label').toHaveText('Username:')
     await page.locator('#loginusername').fill('pavanol')
     await page.locator('.modal-content').toContainText('Password:')
     await page.locator('#loginpassword').fill('test@123')
 
     await expect('button[onclick="logIn()"]').toBeVisibale()
     await page.locator('button[onclick="logIn()"]').click()
     await page.waitForTimeout(3000)
     //await expect page.locator(#nameofuser).toHaveText('Welcome pavanol')

     })
*/
const{test, expect} =require('@playwright/test')
 test('Login page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/')
  await page.locator('#login2').click()

  await page.locator('#loginusername').fill('pavanol')
  //await expect(page.locator('.modal-content')).toContainText('Password:')

  await page.locator('#loginpassword').fill('test@123')
  await expect(page.locator('button[onclick="logIn()"]')).toBeVisible()
  await page.locator('button[onclick="logIn()"]').click()

  await expect(page.locator('#nameofuser')).toHaveText('Welcome pavanol')
})



