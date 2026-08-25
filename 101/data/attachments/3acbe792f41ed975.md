# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OnlinerUIdesktop.spec.ts >> Onliner UI desktop >> Login negative scenario test
- Location: tests/OnlinerUIdesktop.spec.ts:90:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Ник или e-mail' })

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - link [ref=e9] [cursor=pointer]:
    - /url: https://onliner.by
  - generic [ref=e11]:
    - generic [ref=e12]: Вход и регистрация
    - generic [ref=e16]:
      - generic [ref=e17] [cursor=pointer]: По телефону
      - generic [ref=e18] [cursor=pointer]: e-mail, нику
    - generic [ref=e19]:
      - textbox "+375 29 123-45-67" [ref=e24]: "+375"
      - generic [ref=e26]: Отправим код подтверждения по СМС
      - button "Войти" [ref=e28] [cursor=pointer]
    - generic [ref=e29]:
      - text: Вы можете ознакомиться с
      - link "Пользовательским соглашением" [ref=e30] [cursor=pointer]:
        - /url: https://blog.onliner.by/siterules
  - generic [ref=e32]: © 2001–2026 Onlíner
```

# Test source

```ts
  1  | import 'dotenv/config';
  2  | import { test, expect } from '@playwright/test'
  3  | import { Page, Locator } from '@playwright/test'
  4  | 
  5  | export default class LoginPage {
  6  |     readonly page: Page;
  7  |     readonly loginContainer: Locator;
  8  |     readonly email : string;
  9  |     readonly password: string;
  10 |     readonly emailInput: Locator;
  11 |     readonly passwordInput: Locator;
  12 |     readonly enterButton: Locator;
  13 |     readonly securityText: Locator;
  14 |     readonly wrongCredentials: Locator;
  15 |     readonly noPassword: Locator;
  16 |     readonly noEmail: Locator;
  17 | 
  18 |     constructor(page: Page) {
  19 |         this.page = page
  20 |         this.loginContainer = page.locator('.auth-form__title_condensed-default').getByText("Вход")
  21 |         this.email = process.env.LOGIN
  22 |         this.password = process.env.PASSWORD
  23 |         this.emailInput = page.getByRole('textbox', { name: 'Ник или e-mail' })
  24 |         this.passwordInput = page.getByRole('textbox', { name: 'Пароль' })
  25 |         this.enterButton = page.getByRole('button', { name: 'Войти' })
  26 |         this.securityText = page.getByText('Помогите нам улучшить безопасность')
  27 |         this.wrongCredentials = page.getByText('Неверный логин или пароль')
  28 |         this.noPassword = page.getByText('Укажите пароль')
  29 |         this.noEmail = page.getByText('Укажите ник или e-mail')  
  30 |     }
  31 | 
  32 |     async login(username: string, password: string): Promise<void> {
> 33 |         await this.emailInput.fill(username)
     |                               ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  34 |         await this.passwordInput.fill(password)
  35 |         await this.enterButton.click()
  36 |     }
  37 |     
  38 | }
  39 |  
```