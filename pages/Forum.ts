import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Forum {
    readonly page: Page;
    readonly navForum: Locator;

    constructor(page:Page) {
        this.page = page
        this.navForum = page.locator('.b-main-navigation__text').getByText("Форум")
    }
}