import { test, expect } from "@playwright/test";
import { HomePage } from "./page-object/HomePage";
import { Promo } from "./page-object/Promo";

let testURL = "https://coffee-cart.app";

// test.beforeAll(async ({ page }) => {
//     await page.goto(testURL);
//     console.log('<------------before all------------->');
// })
// test.afterAll(async ({ page }) => {
//     await page.goto(testURL);
//     console.log('<------------after all-------------->');
// })

test.describe("parameterized tests @Home", () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        await page.goto(testURL);
        homePage = new HomePage(page);
    });

    [
        {coffeeName:"Espresso", translation:"特浓咖啡"},
        {coffeeName:"Espresso Macchiato", translation:"浓缩玛奇朵"},
        {coffeeName:"Cappuccino", translation:"卡布奇诺"},
        {coffeeName:"Mocha", translation:"摩卡"},
        {coffeeName:"Flat White", translation:"平白咖啡"},
        {coffeeName:"Americano", translation:"美式咖啡"},
        {coffeeName:"Cafe Latte", translation:"拿铁"},
        {coffeeName:"Cafe Breve", translation:"半拿铁"},
    ].forEach(({coffeeName, translation})=>{
        test(`if ${coffeeName} is translated to ChineseName as ${translation}} on performing double click @coffeeMenu`, async () => {
            await homePage.doubleClickOn(coffeeName);
            await expect(homePage.coffee.getByText(translation)).toBeVisible();
        });
    });
    })

