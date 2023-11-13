import { test, Page, Browser, chromium } from '@playwright/test';
import { scroll, gotoNagarro, renameFile } from '../util/util';

let page: Page;
let browser: Browser;

test('scroll from start to bottom', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'videos/', size: { width: 1900, height: 1000 }} });
  page = await context.newPage();
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1900, height: 1000 });
  await gotoNagarro(page);
  await page.evaluate(scroll,{direction:"down", speed:"slow"}); 
  await context.close();
  await renameFile(page, 'scroll.mp4')
});

test('auto slider', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'videos/', size: { width: 1900, height: 1000 }} });
  page = await context.newPage();
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1900, height: 1000 });
  await gotoNagarro(page);
  await page.waitForTimeout(25000);
  await context.close();
  await renameFile(page, 'auto.mp4')
});