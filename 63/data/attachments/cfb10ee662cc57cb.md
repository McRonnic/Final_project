# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OnlinerUIdesktop.spec.ts >> Onliner UI desktop >> Login button test
- Location: tests/OnlinerUIdesktop.spec.ts:47:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.auth-form__title_condensed-default').getByText('Вход')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.auth-form__title_condensed-default').getByText('Вход')

```

```yaml
- link:
  - /url: https://onliner.by
- text: Вход и регистрация По телефону e-mail, нику
- textbox "+375 29 123-45-67": "+375"
- text: Отправим код подтверждения по СМС
- button "Войти"
- text: Вы можете ознакомиться с
- link "Пользовательским соглашением":
  - /url: https://blog.onliner.by/siterules
- text: © 2001–2026 Onlíner
```

# Test source

```ts
  1   | import 'dotenv/config';
  2   | import PageManager from '../pages/PageManager.ts'
  3   | import { test, expect } from '../fixtures/pManager.ts';
  4   | 
  5   | 
  6   | //let pm: PageManager;
  7   | 
  8   | test.describe('Onliner UI desktop', () => {
  9   |    test.beforeEach(async ({ pm }) => {
  10  |       await pm.main.navigate()
  11  |     })
  12  | 
  13  |   test('Main paige working', async ({ pm }) => {
  14  |     
  15  |     const response = await pm.main.stat()
  16  |     if (response) { 
  17  |       await expect(response.status()).toBe(200);
  18  |   } else {
  19  |       throw new Error('Navigation failed: response is null.');
  20  |   }
  21  |   })
  22  | 
  23  |   test('Nav bar test', async ({ pm }) => {
  24  |     await pm.auto.navAuto.click()
  25  |     await expect(pm.page).toHaveURL('https://ab.onliner.by/')
  26  |     await pm.catalog.navCatalog.click()
  27  |     await expect(pm.page).toHaveURL('https://catalog.onliner.by/')
  28  |     await pm.fleaMarket.navFleaMarket.click()
  29  |     await expect(pm.page).toHaveURL('https://baraholka.onliner.by/')
  30  |     await pm.forum.navForum.click()
  31  |     await expect(pm.page).toHaveURL('https://forum.onliner.by/')
  32  |     await pm.realEstate.navRealEstate.click()
  33  |     await expect(pm.page).toHaveURL('https://r.onliner.by/pk/')
  34  |     await pm.services.navServices.click()
  35  |     await expect(pm.page).toHaveURL('https://s.onliner.by/tasks')
  36  |     await pm.news.navNews.click()
  37  |     await expect(pm.page).toHaveURL('https://www.onliner.by/')
  38  | 
  39  |   })
  40  | 
  41  |   test('Logo test', async ({ pm }) => {
  42  |     await pm.auto.navAuto.click()
  43  |     await pm.main.logo.click()
  44  |     await expect(pm.page).toHaveURL('https://www.onliner.by/')  
  45  |   })
  46  | 
  47  |   test('Login button test', async ({ pm }) => {
  48  |     await pm.main.login.click()
> 49  |     await expect(pm.loginPage.loginContainer).toBeVisible()  
      |                                               ^ Error: expect(locator).toBeVisible() failed
  50  |   })
  51  | 
  52  |   test('Search field positive test', async ({ pm }) => {
  53  |     await pm.main.search.fill('huawei')
  54  |     await pm.main.searchLink.click()
  55  |     await expect(pm.page).toHaveURL(/.*catalog.*/)
  56  |     await expect(pm.catalog.catalogTitle).toHaveText('huawei')  
  57  | 
  58  |   })
  59  | 
  60  |   test('Search field negative test', async ({ pm }) => {
  61  |     await pm.main.search.fill('asdfast')
  62  |     await expect(pm.main.searchLink).toBeHidden()
  63  |   })
  64  | 
  65  |    test('Registration link test', async ({ pm }) => {
  66  |     await pm.main.login.click()
  67  |     await pm.main.registrationLink.click()
  68  |     await expect(pm.page).toHaveURL(/.*registration.*/)
  69  |   })
  70  | 
  71  |   test('Footer links test', async ({ pm }) => {
  72  |     for (let i = 0; i < pm.main.footerLinks.length; i++) {
  73  |       await pm.main.getLocator(pm.main.footerLinks[i])
  74  |       await expect(pm.page).toHaveURL(new RegExp(`.*${pm.main.footerPages[i]}.*`))
  75  |       await pm.page.goBack()
  76  |     }
  77  |   })
  78  | 
  79  |   test('Auto dropdown visibility test', async ({ pm }) => {
  80  |     await pm.auto.navAuto.hover()
  81  |     await expect(pm.auto.dropdown).toBeVisible()
  82  |   })
  83  | 
  84  |   test('Login positive scenario test', async ({ pm }) => {
  85  |     await pm.main.login.click()
  86  |     await pm.loginPage.login(pm.loginPage.email, pm.loginPage.password)
  87  |     await expect(pm.loginPage.securityText).toBeVisible()
  88  |   })
  89  | 
  90  |   test('Login negative scenario test', async ({ pm }) => {
  91  |     await pm.main.login.click()
  92  |     await pm.loginPage.login('', pm.loginPage.password)
  93  |     await expect(pm.loginPage.noEmail).toBeVisible();
  94  |     await pm.loginPage.login(pm.loginPage.email, '')
  95  |     await expect(pm.loginPage.noPassword).toBeVisible();
  96  |     await pm.loginPage.login(pm.loginPage.password, pm.loginPage.email)
  97  |     await expect(pm.loginPage.wrongCredentials).toBeVisible();
  98  |   })
  99  | 
  100 |   test('Weather date test', async ({ pm }) => {
  101 |     await pm.weather.weatherLink.click()
  102 |     await expect(pm.weather.onlinerDate).toHaveText(pm.weather.date)
  103 |   })
  104 | 
  105 | })
  106 | 
  107 | 
```