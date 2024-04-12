import { test, expect, Page} from '@playwright/test';
import { gotoNagarro } from '../util/util';

test.beforeEach(async ({page})=> {
  await page.setViewportSize({ width: 1900, height: 1000 });
  await gotoNagarro(page);
  page.setDefaultTimeout(5000);
})

let drag = async (page:Page, source:string, destination:string) => {
  const leftbox = await page.$(source);
  const left = (await leftbox?.boundingBox())!;
  const rightbox = await page.$(destination);
  const right = (await rightbox?.boundingBox())!;
  await page.waitForTimeout(500);
  await page.mouse.move(right.x + right.width/2 ,right.y + right.height/2);
  await page.mouse.down();
  await page.mouse.move(left.x + left.width/2 ,left.y + left.height/2);
  await page.waitForTimeout(50);
  await page.mouse.up();
};

test('drag and drop' , async ({ page}) => {
   await page.locator('#StorySliderID').scrollIntoViewIfNeeded();
   expect (page.locator('#StorySliderID')).toBeVisible();
   for(let i=0;i<4;i++){
    await expect(page.locator('.featured-story-wrapper')).toHaveScreenshot(`slide${i}.png`,{maxDiffPixelRatio:.02});
    await drag(page,'.story-list.active-slide .left-section','.story-list.active-slide .right-section');
   }
   await page.waitForTimeout(500);
   await expect(page.locator('.featured-story-wrapper')).toHaveScreenshot(`slide0.png`,{maxDiffPixelRatio:.05});
});
