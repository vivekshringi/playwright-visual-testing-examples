import { test, Page, chromium } from '@playwright/test';
let page: Page;

test('before tests', async () => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.waitForTimeout(2000);
});

