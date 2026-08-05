# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OnlinerUIdesktop.spec.ts >> Onliner UI desktop >> Search field negative test
- Location: tests/OnlinerUIdesktop.spec.ts:60:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.onliner.by/
Call log:
  - navigating to "https://www.onliner.by/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { Page, Locator } from '@playwright/test'
  3  | 
  4  | export default class Main {
  5  |     readonly page: Page;
  6  |     readonly navNews: Locator;
  7  |     readonly logo: Locator;
  8  |     readonly login: Locator;
  9  |     readonly search: Locator;
  10 |     readonly searchPop: Locator;
  11 |     readonly searchLink: Locator;
  12 |     readonly registrationLink: Locator;
  13 |     readonly cookie: Locator;
  14 |     readonly cookiePanel: Locator;
  15 |     readonly footer: Locator;
  16 |     readonly smallNav: Locator;
  17 |     readonly footerLinks: string[];
  18 |     readonly footerPages: string[];
  19 | 
  20 | 
  21 |     constructor(page: Page) {
  22 |         this.page = page
  23 |         this.navNews = page.locator('.b-main-navigation__text').getByText("Новости")
  24 |         this.logo = page.locator('.onliner_logo')
  25 |         this.login = page.locator('.auth-bar__item--text').getByText("Вход")
  26 |         this.search = page.locator('.fast-search__input')
  27 |         this.searchPop = page.locator('.search__input')
  28 |         this.searchLink = page.locator('#fast-search-modal iframe').contentFrame().getByRole('link', { name: 'Перейти к результатам поиска «huawei»' })
  29 |         this.registrationLink = page.getByText('Зарегистрироваться на Onlíner')
  30 |         this.cookie = page.getByText('Принять все cookie')
  31 |         this.cookiePanel = page.locator('div').filter({ hasText: 'Мы используем cookie' }).nth(2)
  32 |         this.footerLinks = ['О компании', 'Контакты редакции', 'Реклама', 'Тарифы', 'Вакансии', 'Манифест', 'Пользовательское соглашение']
  33 |         this.footerPages = ['about', 'contacts', 'advertising', 'https://docs.google.com/', 'vacancy', 'manifest', 'siterules']
  34 |         this.footer = page.locator('footer')
  35 |         this.smallNav = page.locator('header-style__underlay')
  36 |     }
  37 | 
  38 |     async stat() {
  39 |         return await this.page.goto('')
  40 |     }
  41 | 
  42 |     async navigate() {
> 43 |         await this.page.goto('')
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.onliner.by/
  44 |         await this.cookie.click();
  45 |         await this.cookiePanel.waitFor({ state: 'hidden' });
  46 | 
  47 |     }
  48 | 
  49 |     async getLocator(text: string) {
  50 |         let loca = this.footer.getByText(text)
  51 |         await loca.click()
  52 |     }
  53 | 
  54 | }
```