import { test, chromium, devices, expect} from '@playwright/test';

test('mobile', async ({ page}) => {
   const browser = await chromium.launch();
   const context = await browser.newContext({...devices['iPhone 14']});
   page = await context.newPage();
   await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
   await page.click('#hs-eu-confirmation-button');
   await expect(page).toHaveScreenshot('iPhone14.png');
   await browser.close();
});

test('iPad', async ({ page}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({...devices['iPad Pro 11']});
  page = await context.newPage();
  await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
  await page.click('#hs-eu-confirmation-button');
  await expect(page).toHaveScreenshot('iPad.png');
  await browser.close();
});

test('Desktop', async ({ page}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({...devices['Desktop Chrome']});
  page = await context.newPage();
  await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
  await page.click('#hs-eu-confirmation-button');
  await expect(page).toHaveScreenshot('desktop.png');
  await browser.close();
});


test('landscape', async ({ page}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({...devices['iPhone 14 Plus landscape']});
  page = await context.newPage();
  await page.goto('https://www.nagarro.com/en',{waitUntil:'networkidle'});
  await page.click('#hs-eu-confirmation-button');
  await expect(page).toHaveScreenshot('landscape.png');
  await browser.close();
});




