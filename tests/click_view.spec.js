const{test, expect}= require('@playwright/test')
test('click on individual modume', async({page})=> {


    await page.setDefaultTimeout(60000)
    await page.goto('https://automationexercise.com/')
  
    //assertion the url should same
  await expect(page).toHaveURL('https://automationexercise.com/')
   
    
  //Define the Products Btn     //  locator= page.locator('.....')
     const ProductsBtn= page.locator('//a[@href="/products"]')
  //Hover over the Products btn   // locator.hover()
      ProductsBtn.hover() 
        await page.waitForTimeout(3000)

        // click on the Products Btn
            await page.locator('//a[@href="/products"]').click()
                  await page.waitForTimeout(5000)
                 
                  //await page.setDefaultTimeout(60000)
                  //verify redirect url  - https://automationexercise.com/products
                 await expect(page).toHaveURL('https://automationexercise.com/products')
                   console.log('url is:', 'https://automationexercise.com/products')

                 const title = await page.title()
                 await expect(title).toBe('Automation Exercise - All Products')
                 console.log('Title is showing:', 'Automation Exercise - All Products')
             
                    

                     


})