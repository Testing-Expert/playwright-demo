const{test, expect}=require('@playwright/test')
test('Signup Final Stetup', async ({page})=>{
        await page.goto('https://automationexercise.com/')
        
        await page.locator('//a[normalize-space()="Signup / Login"]').click()
        await expect(page).toHaveURL('https://automationexercise.com/login')

        // Signup details
         await page.locator('input[placeholder="Name"]').fill('Bikram kumar')
          const randomEmail = `qa${Date.now()}@yopmail.com`;
          await page.locator('input[data-qa="signup-email"]').fill(randomEmail);
                     //await page.locator('input[data-qa="signup-email"]').fill('qa1011@yopmail.com')
         await page.locator('button[data-qa="signup-button"]').click()
           console.log('Using email:', randomEmail);


         await expect(page.locator('//b[normalize-space()="Enter Account Information"]')).toHaveText('Enter Account Information')
         console.log('Text matched successfully:', 'Enter Account Information')

         //Title Selection
         await page.locator('#id_gender1').click()

         //Prefilled Information
         await expect(page.locator('#name')).toBeVisible('Bikram')
         await expect(page.locator('#email')).toBeVisible('randomEmail')
                //await expect(page.locator('#email')).toBeVisible('qa1011@yopmail.com')
            console.log('Prefilled Text matched successfully:', 'Bikram')
                //console.log('Text matched successfully:', 'qa1011@yopmail.com')
                     console.log('Prefilled email matched successfully:', randomEmail);



          //Password
          await page.locator('#password').fill('admin@123')
                //Date of Birth
                 await page.locator('#days').selectOption('8')
                        //Month
                        await page.locator('#months').selectOption('3')
                               //Year
                               await page.locator('#years').selectOption('1989')
                 //Newsletter and Offers
                 await page.locator('#newsletter').click()
                 await page.locator('#optin').click()

                 await expect(page.locator('label[for="newsletter"]')).toHaveText('Sign up for our newsletter!')
                 await expect(page.locator('label[for="optin"]')).toHaveText('Receive special offers from our partners!')


                 //Address Details
                 await page.locator('#first_name').fill('Bikram47')
                 await page.locator('#last_name').fill('Rajat')
                 await page.locator('#company').fill('Testing company')

                 //print name,last name, company name
                 console.log('First Name: Bikram47')
                 console.log('Last Name: Raja')
                 console.log('Company Name: Testing company')

            
                  //Address
                        await page.locator('#address1').fill('188-delhi street')
                        await page.locator('#address2').fill('New Delhi-110092')
                        await page.locator('#country').selectOption('India')
                        await page.locator('#state').fill('Delhi')
                        await page.locator('#city').fill('New Delhi')
                        await page.locator('#zipcode').fill('110092')
                        await page.locator('#mobile_number').fill('9876543210')
                        //print address details
                        console.log('Address 1: 188-delhi street')
                        console.log('Address 2: New Delhi-110092')
                        console.log('Country: India')
                        console.log('State: Delhi')
                        console.log('City: New Delhi')
                        console.log('Zipcode: 110092')
                        console.log('Mobile Number: 9876543210')
                        await page.waitForTimeout(3000)
                        //Create Account
                        await page.locator('button[data-qa="create-account"]').click()

                       //url validation
                       await expect(page).toHaveURL('https://automationexercise.com/account_created')
                       console.log('URL matched successfully:', 'https://automationexercise.com/account_created')
                      
                       //Account Created Text Validation
                       await expect(page.locator('h2[class="title text-center"] b')).toHaveText('Account Created!')
                       console.log('Text matched successfully:', 'Account Created!')
                
                        await expect(page.locator('//p[contains(text(),"Congratulations! Your new account has been success")]')).toHaveText('Congratulations! Your new account has been successfully created!')
                        await expect(page.locator('//p[contains(text(),"You can now take advantage of member privileges to")]')).toHaveText('You can now take advantage of member privileges to enhance your online shopping experience with us.')

                        console.log('Text matched successfully:', 'Congratulations! Your new account has been successfully created!')
                        console.log('You can now take advantage of member privileges to enhance your online shopping experience with us.')

                                //Continue Button
                               await page.locator('//a[normalize-space()="Continue"]').click()
                               await page.waitForTimeout(3000)
                              
                               //Redirecting to home page after signup
                              await expect(page).toHaveURL('https://automationexercise.com/')
                                console.log('URL matched successfully:', 'https://automationexercise.com/')

                               await page.waitForTimeout(3000)


                               //Logout
                               await page.locator('//a[normalize-space()="Logout"]').click()


                })