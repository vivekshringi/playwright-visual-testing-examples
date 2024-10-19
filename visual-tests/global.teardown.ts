import { test, Page} from '@playwright/test';
let page: Page;

test('after tests', async () => {
  await page.waitForTimeout(2000);
});

