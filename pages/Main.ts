import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class Main {
    readonly page: Page;
    readonly navNews: Locator;
    readonly logo: Locator;
    readonly login: Locator;
    readonly search: Locator;
    readonly searchPop: Locator;
    readonly searchLink: Locator;
    readonly registrationLink: Locator;
    readonly cookie: Locator;
    readonly cookiePanel: Locator;
    readonly footer: Locator;
    readonly smallNav: Locator;
    readonly footerLinks: string[];
    readonly footerPages: string[];


    constructor(page: Page) {
        this.page = page
        this.navNews = page.locator('.b-main-navigation__text').getByText("Новости")
        this.logo = page.locator('.onliner_logo')
        this.login = page.locator('.auth-bar__item--text').getByText("Вход")
        this.search = page.locator('.fast-search__input')
        this.searchPop = page.locator('.search__input')
        this.searchLink = page.locator('#fast-search-modal iframe').contentFrame().getByRole('link', { name: 'Перейти к результатам поиска «huawei»' })
        this.registrationLink = page.getByText('Зарегистрироваться на Onlíner')
        this.cookie = page.getByText('Принять все cookie')
        this.cookiePanel = page.locator('div').filter({ hasText: 'Мы используем cookie' }).nth(2)
        this.footerLinks = ['О компании', 'Контакты редакции', 'Реклама', 'Тарифы', 'Вакансии', 'Манифест', 'Пользовательское соглашение']
        this.footerPages = ['about', 'contacts', 'advertising', 'https://docs.google.com/', 'vacancy', 'manifest', 'siterules']
        this.footer = page.locator('footer')
        this.smallNav = page.locator('header-style__underlay')
    }

    async stat() {
        return await this.page.goto('')
    }

    async navigate() {
        await this.page.goto('')
        await this.cookie.click();
        await this.cookiePanel.waitFor({ state: 'hidden' });

    }

    async getLocator(text: string) {
        let loca = this.footer.getByText(text)
        await loca.click()
    }

}