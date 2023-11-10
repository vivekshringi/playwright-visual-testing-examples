import { test, Page, Browser, chromium } from '@playwright/test';
let page: Page;
let browser: Browser;

let scroll = async (args) => {
  const {direction, speed} = args;
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const scrollHeight = () => document.body.scrollHeight;
  const start = direction === "down" ? 0 : scrollHeight();
  const shouldStop = (position) => direction === "down" ? position > scrollHeight() : position < 0;
  const increment = direction === "down" ? 50 : -50;
  const delayTime = speed === "slow" ? 200 : 40;
  console.error(start, shouldStop(start), increment)
  for (let i = start; !shouldStop(i); i += increment) {
      window.scrollTo(0, i);
      await delay(delayTime);
  }
};

test('scroll from start to bottom', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'videos/', size: { width: 1900, height: 1000 }} });
  page = await context.newPage();
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1900, height: 1000 });
  await page.goto('https://www.nagarro.com/en', { waitUntil: 'networkidle' });
  await page.click('#hs-eu-confirmation-button');
  await page.evaluate(scroll,{direction:"down", speed:"slow"}); 
  await context.close();
});

test('auto slider', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: 'videos/', size: { width: 1900, height: 1000 }} });
  page = await context.newPage();
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1900, height: 1000 });
  await page.goto('https://www.nagarro.com/en', { waitUntil: 'networkidle' });
  await page.click('#hs-eu-confirmation-button');
  await page.waitForTimeout(25000);
  await context.close();
});