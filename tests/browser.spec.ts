import { test, expect, chromium, firefox, webkit, Page } from '@playwright/test';
import { gotoNagarro } from '../util/util';

let page: Page;

test('chrome browser', async ({ page }) => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await gotoNagarro(page);
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('chromium.png');
  await browser.close();
});

test('firefox browser', async ({ page }) => {
  const browser = await firefox.launch();
  page = await browser.newPage();
  await gotoNagarro(page);
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('firefox.png');
  await browser.close();
});

test('safari browser', async ({ page }) => {
  const browser = await webkit.launch();
  page = await browser.newPage();
  await gotoNagarro(page);
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('safari.png')
});