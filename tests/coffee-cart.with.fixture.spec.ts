import { test as base, expect } from "@playwright/test";
import { HomePage } from "./page-object/HomePage";
import { CartPage } from "./page-object/CartPage";
let testURL = 'https://coffee-cart.app';

type myFixture = {
    homePage: HomePage;
    cartPage: CartPage;
}

const test = base.extend<myFixture>({
    homePage: async ({page}, use) =>{
    const homePage = new HomePage(page);
    await page.goto(testURL);
    await use(homePage);
    },
    cartPage: async({page}, use)=>{
     await use(new CartPage(page));
    }
})

test('if navigation to cart page without ordering an coffee', async({homePage, cartPage})=>{
    await homePage.cart.click();
    await expect(cartPage.noCoffeeMessage).toHaveText('No coffee, go add some.');
})

test('if coffee is added in the cart', async({homePage, cartPage})=>{
    await homePage.clickOn("Espresso");
    await homePage.cart.click();
    expect(await cartPage.getCoffeeCount(0)).toEqual(1);
    expect(await cartPage.getTotal()).toEqual(10);
    expect(await cartPage.getSubTotal()).toEqual('$10.00')
})

test('if delete all coffee from the cart', async({homePage, cartPage})=>{
    await homePage.clickOn("Espresso");
    await homePage.cart.click();
    await cartPage.deleteAll("Espresso");
})