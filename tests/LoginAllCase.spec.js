//Practice Exercise (Day 2 Homework)
//Open https://www.demoblaze.com
//Try invalid login and verify error alert appears.
//Capture both positive and negative test cases.
//Add assertion for URL check after login.
//Print step logs using console.log()

const{test, expect}=require('@playwright/test')
    test.describe('Login All Negative Case', () =>{
     test.beforeEach(async({page})=>{
    // Navigate the Demoblaze home page
       await page.goto('https://demoblaze.com');

    //open the Login Modal
       await page.locator('#login2').click();
       await page.waitForTimeout(3000)
     })
     
    // TC-01: Invalid Username
       test('TC-01:Invalid Username', async({page})=>{
        const username =  'invalidUser';      //invalid Username
        const passwrod =  'test@123';       //vaild password
          
         await page.locator('#loginusername').fill('invalidUser');
         await page.locator('#loginpassword').fill('test@123')
        
         
         // Listen for the alert
         page.once('dialog', async(dialog)=>{
            console.log('Alert message:', dialog.message());   //print alert message
             
           //screenshot 
          //  page.screenshot({path: 'alert-before-ok.png'})
            dialog.accept();
            console.log('Alert accepted');          
         });
        await page.locator('//button[text()="Log in"]').click();
         await page.waitForTimeout(3000)
       });
      
         // TC-02: Blank Username
        test('NC-03: Blank Username', async ({ page }) => {
        const username = '';                 // blank username
        const password = 'Test@123';        // valid password

        await page.locator('#loginusername').fill(username);
        await page.locator('#loginpassword').fill(password);
        await page.locator('//button[text()="Log in"]').click();

        await expect(page).toHaveURL('https://demoblaze.com');
  })
       //TC-03  Blank Password
             test('TC-02: Blank Password', async ({page})=> {
              const username = 'pavanol'   //valid password
              const password = '';         //Blank password

              await page.locator('#loginusername').fill('username');
              await page.locator('#loginpassword').fill('password');
              await page.locator('//button[text()="Log in"]').click();
              
              await expect(page).toHaveURL('https://demoblaze.com')

            })


      //TC-04  Blank username and password
        
        test('username/password Blank', async ({page})=> {
            const username = '';     //Blank username
            const password = '';     //Blank password

            await page.locator('#loginusername').fill('username');
            await page.locator('#loginpassword').fill('password');
            await page.locator('//button[text()="Log in"]');
          
         });
      })
      