import { test, expect, chromium, firefox, webkit } from '@playwright/test';
test('chrome browser', async ({ page}) => {
   const browser = await chromium.launch();
   page = await browser.newPage();
   await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
   await page.setViewportSize({ width: 375, height: 667 });
   await page.click('#hs-eu-confirmation-button');
   await expect(page).toHaveScreenshot('chromium.png');
   await browser.close();
});

test('firefox browser', async ({ page}) => {
  const browser = await firefox.launch();
  page = await browser.newPage();
  await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
  await page.setViewportSize({ width: 375, height: 667 });
  await page.click('#hs-eu-confirmation-button');
  await expect(page).toHaveScreenshot('firefox.png');
  await browser.close();
});

test('safari browser', async ({ page}) => {
  const browser = await webkit.launch();
  page = await browser.newPage();
  await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
  await page.setViewportSize({ width: 375, height: 667 });
  await page.click('#hs-eu-confirmation-button');
  await expect(page).toHaveScreenshot('safari.png')
});


