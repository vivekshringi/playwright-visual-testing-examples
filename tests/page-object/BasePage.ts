import { expect, type Locator, type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly totalButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.totalButton = page.getByTestId('checkout');
  }

  async getTotal(){
    const previ = await this.totalButton.innerText();
    let start = previ.indexOf('$');
    let end = previ.indexOf('.');
    let balance = Number(previ.substring(start+1, end));
    return balance;
}
}
