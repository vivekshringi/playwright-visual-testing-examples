import { test, expect } from "@playwright/test";

let testURL = "http://localhost:4001";

test.describe("mock network api", () => {
  test.beforeEach(async ({ page }) => { 
    await page.addInitScript(()=>{ window.sessionStorage.setItem('name', 'Vivek');});
    await page.addInitScript(()=>{ window.sessionStorage.setItem('color', 'pink');});
    await page.goto(testURL);
  });

  test("if coffee count is correct @coffeeMenu", async ({page}) => {
      await page.getByAltText('Multiply').click();
      await page.goto(testURL+'/mul');
      await expect(page.locator('#heading')).toContainText('Vivek');
      await expect(page.locator('body')).toHaveAttribute('style','background-color: pink;');
      await expect(page.locator('body')).toHaveCSS('background-color','rgb(255, 192, 203)');
  });
});
