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
                 expect(title).toBe('Automation Exercise - All Products')
                 console.log('Title is showing:', 'Automation Exercise - All Products')
                 // Wait for products to load
                  await page.waitForSelector('.product-image-wrapper');

               // ✅ Get all product name elements
                const productNames = page.locator('.productinfo p');
                 
                 // Count products
                const totalProducts = await page.locator('.product-image-wrapper').count();
                console.log('Total number of products:', totalProducts);

                  
                // Loop through and print each product name
                for (let i = 0; i < totalProducts; i++) {
                const name = await productNames.nth(i).textContent();
              console.log(`Product ${i + 1}:`, name.trim());
              }

              // Optional assertion
              expect(totalProducts).toBeGreaterThan(0);
                     
                    
                      

})