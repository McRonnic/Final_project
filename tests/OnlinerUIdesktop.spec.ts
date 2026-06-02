import { test, expect } from '@playwright/test'
import PageManager from '../pages/PageManager.ts'


let pm: PageManager;

test.describe('Onliner UI desktop', () => {
  test.beforeEach(async ({ page }) => {
    pm = new PageManager(page)
    await pm.main.navigate()
  })

  test('Main paige working', async () => {
    
    const response = await pm.main.stat()
    if (response) { 
      await expect(response.status()).toBe(200);
  } else {
      throw new Error('Navigation failed: response is null.');
  }
  })

  test('Nav bar test', async () => {
    await pm.auto.navAuto.click()
    await expect(pm.page).toHaveURL('https://ab.onliner.by/')
    await pm.catalog.navCatalog.click()
    await expect(pm.page).toHaveURL('https://catalog.onliner.by/')
    await pm.fleaMarket.navFleaMarket.click()
    await expect(pm.page).toHaveURL('https://baraholka.onliner.by/')
    await pm.forum.navForum.click()
    await expect(pm.page).toHaveURL('https://forum.onliner.by/')
    await pm.realEstate.navRealEstate.click()
    await expect(pm.page).toHaveURL('https://r.onliner.by/pk/')
    await pm.services.navServices.click()
    await expect(pm.page).toHaveURL('https://s.onliner.by/tasks')
    await pm.news.navNews.click()
    await expect(pm.page).toHaveURL('https://www.onliner.by/')

  })

  test('Logo test', async () => {
    await pm.auto.navAuto.click()
    await pm.main.logo.click()
    await expect(pm.page).toHaveURL('https://www.onliner.by/')  
  })

  test('Login button test', async () => {
    await pm.main.login.click()
    await expect(pm.loginPage.loginContainer).toBeVisible()  
  })

  test('Search field positive test', async () => {
    await pm.main.search.fill('huawei')
    await pm.main.searchLink.click()
    await expect(pm.page).toHaveURL(/.*catalog.*/)
    await expect(pm.catalog.catalogTitle).toHaveText('huawei')  

  })

  test('Search field negative test', async () => {
    await pm.main.search.fill('asdfast')
    await expect(pm.main.searchLink).toBeHidden()
  })

   test('Registration link test', async () => {
    await pm.main.login.click()
    await pm.main.registrationLink.click()
    await expect(pm.page).toHaveURL(/.*registration.*/)
  })

  test('Footer links test', async () => {
    for (let i = 0; i < pm.main.footerLinks.length; i++) {
      await pm.main.getLocator(pm.main.footerLinks[i])
      await expect(pm.page).toHaveURL(new RegExp(`.*${pm.main.footerPages[i]}.*`))
      await pm.page.goBack()
    }
  })

  test('Auto dropdown visibility test', async () => {
    await pm.auto.navAuto.hover()
    await expect(pm.auto.dropdown).toBeVisible()
  })

  test('Login positive scenario test', async () => {
    await pm.main.login.click()
    await pm.loginPage.login(pm.loginPage.email, pm.loginPage.password)
    await expect(pm.loginPage.securityText).toBeVisible()
  })

  test('Login negative scenario test', async () => {
    await pm.main.login.click()
    await pm.loginPage.login('', pm.loginPage.password)
    await expect(pm.loginPage.noEmail).toBeVisible();
    await pm.loginPage.login(pm.loginPage.email, '')
    await expect(pm.loginPage.noPassword).toBeVisible();
    await pm.loginPage.login(pm.loginPage.password, pm.loginPage.email)
    await expect(pm.loginPage.wrongCredentials).toBeVisible();
  })

  test('Weather date test', async () => {
    await pm.weather.weatherLink.click()
    await expect(pm.weather.onlinerDate).toHaveText(pm.weather.date)
  })

})

