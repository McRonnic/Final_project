import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Auto {
    readonly page: Page;
    readonly navAuto: Locator;
    readonly dropdown: Locator;
    

    constructor(page:Page) {
        this.page = page
        this.navAuto = page.locator('.b-main-navigation__text').getByText("Автобарахолка")
        this.dropdown = page.locator('.b-main-navigation__dropdown.b-main-navigation__dropdown_visible')

}
}