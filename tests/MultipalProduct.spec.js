const{test, expect}=require('@playwright/test')
test('Multipal Products Element', async({page})=>{
    await page.goto('https://demoblaze.com')

    await page.waitForSelector('.card-title');
    
   // Get all products name.
   const products= page.locator('.card-title')

   //step 4 count all products

   const count = await products.count();
   console.log('total products found: ${9}')

   //loop each product and print
     for (let i = 0; i < count; i++) {
    const name = await products.nth(i).innerText();
    console.log(`➡️ Product ${i + 1}: ${name}`);
    
     }     
    //CLICK BY SPECIFIC product by partial text
    await page.locator('.card-title', {hasText: 'Samsung'}).first().click();
     
    //assertion: check product opened
     await  expect (page.locator('.name')).toBeVisible();
     await expect (page.locator('.name')).toContainText('Samsung');

     

     
})