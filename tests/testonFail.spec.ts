import { test, expect } from "@playwright/test";
import { HomePage } from "./page-object/HomePage";
import mockData from "./mock.json";

let testURL = "https://coffee-cart.app";

test.describe("mock network api", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('if coffee count is correct @coffeeMenu', async () => {
    test.fail();
    await expect(homePage.coffee).toHaveCount(1);
    expect(await homePage.getCoffeeCount()).toEqual(1);
  });
});