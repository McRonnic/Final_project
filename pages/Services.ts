import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Services {
    readonly page: Page;
    readonly navServices: Locator;

    constructor(page:Page) {
        this.page = page
        this.navServices = page.locator('.b-main-navigation__text').getByText("Услуги")
}
}