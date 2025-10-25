const {test, expect} = require('@playwright/test')
test ('Account Login Test', async ({page}) => {
await page.setDefaultTimeout(60000)
await page.goto('https://automationexercise.com/')
await page.locator('a[href="/login"]').click()
await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible()
await page.locator('//input[@data-qa="login-email"]').fill('qa111@yopmail.com')
await page.locator('//input[@placeholder="Password"]').fill('admin@123')

  await page.locator('button[data-qa="login-button"]').click();
 // Wait until login is successful
  await expect(page.locator('a[href="/logout"]')).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL('https://automationexercise.com/', { timeout: 10000 });

  console.log('✅ Login successful and redirected to home page!');
await page.waitForTimeout(3000)
})