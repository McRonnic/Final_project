import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export default class LoginPage {
    readonly page: Page;
    readonly loginContainer: Locator;
    readonly email : string;
    readonly password: string;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly enterButton: Locator;
    readonly securityText: Locator;
    readonly wrongCredentials: Locator;
    readonly noPassword: Locator;
    readonly noEmail: Locator;

    constructor(page: Page) {
        this.page = page
        this.loginContainer = page.locator('.auth-form__title_condensed-default').getByText("Вход")
        this.email = 'matsvei.chystsik@innowise.com'
        this.password = '$v76gygf3MF_.qV'
        this.emailInput = page.getByRole('textbox', { name: 'Ник или e-mail' })
        this.passwordInput = page.getByRole('textbox', { name: 'Пароль' })
        this.enterButton = page.getByRole('button', { name: 'Войти' })
        this.securityText = page.getByText('Помогите нам улучшить безопасность')
        this.wrongCredentials = page.getByText('Неверный логин или пароль')
        this.noPassword = page.getByText('Укажите пароль')
        this.noEmail = page.getByText('Укажите ник или e-mail')  
    }

    async login(username: string, password: string): Promise<void> {
        await this.emailInput.fill(username)
        await this.passwordInput.fill(password)
        await this.enterButton.click()
    }
    
}
