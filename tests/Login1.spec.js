//(Assertion, wait,condition)
//Waits – Ensure element ya page ready hai
//Assertions – Verify output or state
//Conditions – Smart decisions in tests (if element visible, etc.)
/*test Steps---
1- Launch the browser
2-Navigate to https://demoblaze.com
Click on Login button 
Enter a valid username and passwrod 
Click on login 
Verify welcome user text 
*/

const{test, expect}=require('@playwright/test')
test('Test Login functionality', async({page})=>{
    await page.goto('https://demoblaze.com')
    console.log('Url launch successfull')
    
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')

    await expect(page.locator('//button[normalize-space()="Log in"]')).toBeVisible()

    await page.locator('//button[normalize-space()="Log in"]').click()
    
    await page.waitForSelector('#nameofuser')
    await expect(page.locator('#nameofuser')).toBeVisible()
    await expect (page.locator('#nameofuser')).toContainText('Welcome pavanol')
    console.log('Success full print "Welcome pavanol"')
    
   await page.waitForTimeout(3000)

})