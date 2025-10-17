const{test, expect} = require('@playwright/test')

test('launch url/title/hover', async({page})=> {
     await page.setDefaultTimeout(60000)
     await page.goto('https://automationexercise.com/')

     const title = await page.title()
     await expect(title).toBe('Automation Exercise')
     console.log('Home page tilte:', title)

          // Define locator for Products button   //locator=page.locator()
          const productsBtn = page.locator('a[href="/products"]');       

         //  Hover over the Products button
           await productsBtn.hover();
           await page.waitForTimeout(3000)

         //Hove over the Cart Define Cart button
           const CartBtn= page.locator('//body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]')
         //Hove over the Cart
           await CartBtn.hover()
           await page.waitForTimeout(3000)
      

          //Define Signup/Login - locator=page.locator('....')
            const SignupLoginBtn= page.locator('//a[normalize-space()="Signup / Login"]')
            // mouse hover over SignupLoginBtn   //  locator.hover()
               await SignupLoginBtn.hover()
               await page.waitForTimeout(3000)

         //Define Test Case Btn  locator=page.locator('...')
         const  TestCaeseBtn=page.locator('//a[contains(text(),"Test Cases")]')
         // hover over Test Case Btn     locator.hover()
         await TestCaeseBtn.hover()
         await page.waitForTimeout(3000)

         //Define API Testing Btn     locator=page.locator('...')
          const APITestingBtn=page.locator('//a[normalize-space()="API Testing"]')
         //Hover over API Testing Btn  // locator.hover()
         await APITestingBtn.hover()
         await page.waitForTimeout(3000)





        })  


