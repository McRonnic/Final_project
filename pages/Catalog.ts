import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Catalog {
    readonly page: Page;
    readonly navCatalog: Locator;
    readonly catalogTitle: Locator;
    readonly binoculars: Locator;

    constructor(page: Page) {
        this.page = page
        this.navCatalog = page.locator('.b-main-navigation__text').getByText("Каталог")
        this.catalogTitle = page.locator('h1.catalog-form__title')
        this.binoculars = page.locator('.catalog-message__image_binoculars-alter')
    }
}
