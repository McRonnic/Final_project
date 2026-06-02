import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class RealEstate {
    readonly page: Page;
    readonly navRealEstate: Locator;

    constructor(page:Page) {
        this.page = page
        this.navRealEstate = page.locator('.b-main-navigation__text').getByText("Дома и квартиры")
    }
}