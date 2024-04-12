import { test, expect } from '@playwright/test';
import { Chance } from 'chance';

test.beforeEach(async ({page})=> {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 375, height: 667 });

})

test('test 1 - fullscreen', async ({ page}) => {
   let chance = new Chance();
   await page.locator('#input').fill(chance.word({ length: 5 }));
   await expect(page).toHaveScreenshot('fullScreen.png')
});

test('test 2 - Clip', async ({ page }) => {
  let chance = new Chance();
  await page.locator('#input').fill(chance.word({ length: 5 }));
  await expect(page).toHaveScreenshot('clip.png', { clip: { x: 15, y: 15, width: 300, height: 600 } })
});

test('test3- Caret', async ({ page }) => {
  await page.locator('#input').click();
  
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page).toHaveScreenshot('caret.png', { caret: 'hide' });
});

test('test4 - Mask', async ({ page }) => {
  let chance = new Chance();
  await page.locator('#input').fill(chance.word({ length: 5 }));
  await expect(page).toHaveScreenshot('mask.png', { mask: [page.locator(".circle")], maskColor:"yellow" });
});

test('test 5 - maxDiffRatio', async ({ page }) => {
  let chance = new Chance();
  await page.locator('#input').fill(chance.word({ length: 5 }));
  await expect(page).toHaveScreenshot('maxDiff.png', { maxDiffPixels:10})
});

test('test 6 - maxDiff', async ({ page }) => {
  let chance = new Chance();
  await page.locator('#input').fill(chance.word({ length: 5 }));
  await expect(page).toHaveScreenshot('maxDiffRatio.png', { maxDiffPixelRatio:0.})
});

test('test 7 - omit background', async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 1000 });
  await page.goto('/grid', { waitUntil: 'networkidle' });
  await expect(page.locator('#grid')).toHaveScreenshot('grid.png',{omitBackground:false});
});

test('test 8 - animation off', async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 1000 });
  await page.goto('/grid', { waitUntil: 'networkidle' });
  await expect(page.locator('body>img')).toHaveScreenshot('gif.png',{timeout:10000});
});

