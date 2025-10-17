const { test, expect } = require('@playwright/test');

test('Handle JavaScript Alerts', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Handle dialog event
  page.on('dialog', async dialog => {
    console.log(`📢 Alert message: ${dialog.message()}`);

    // Accept or dismiss alert
    if (dialog.type() === 'confirm') {
      await dialog.accept();  // or dialog.dismiss()
    } else {
      await dialog.accept();
    }
  });

  // Trigger alert
  await page.locator('button:has-text("Click for JS Confirm")').click();
  await page.waitForTimeout(5000)

  // Assert confirmation message
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
