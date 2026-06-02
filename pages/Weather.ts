import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Weather {
    readonly page: Page;
    readonly weatherLink: Locator;
    readonly onlinerDate: Locator;
    readonly date: string;


    constructor(page:Page) {
        this.page = page
        this.weatherLink = page.getByRole('navigation').getByRole('link', { name: 'Погода в Минске +' })
        this.onlinerDate = page.locator('.b-weather-today__date').locator('dd')
        this.date = (new Date).toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'})
}
}