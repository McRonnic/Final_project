import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class FleaMarket {
    readonly page: Page;
    readonly navFleaMarket: Locator;

    constructor(page:Page) {
        this.page = page
        this.navFleaMarket = page.locator('.b-main-navigation__text').getByText("Барахолка",{ exact: true })
    }
}