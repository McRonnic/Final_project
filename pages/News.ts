import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class News {
    readonly page: Page;
    readonly navNews: Locator;

    constructor(page:Page) {
        this.page = page
        this.navNews = page.locator('.b-main-navigation__text').getByText("Новости")
    }
}