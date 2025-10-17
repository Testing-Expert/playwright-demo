const{test, expect}=require('@playwright/test')

test('Extract all links on homepage', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  const links = page.locator('a');
  const total = await links.count();
  console.log(`🔗 Total links: ${total}`);

  for (let i = 0; i < total; i++) {
    const linkText = await links.nth(i).innerText();
    const href = await links.nth(i).getAttribute('href');
    console.log(`➡️ ${linkText} -> ${href}`);
  }
});
