import { test, expect } from '@playwright/test'
import { Page, Locator } from '@playwright/test'
import LoginPage from "./LoginPage.ts";
import Auto from "./Auto.ts";
import Catalog from "./catalog.ts";
import FleaMarket from "./fleaMarket.ts";
import Forum from "./forum.ts";
import Main from "./main.ts";
import RealEstate from "./realEstate.ts";
import Services from "./services.ts";
import News from "./news.ts";
import Weather from "./Weather.ts";


export default class PageManager {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly auto: Auto;
    readonly catalog: Catalog;
    readonly fleaMarket: FleaMarket;
    readonly forum: Forum;
    readonly main: Main;
    readonly realEstate: RealEstate;
    readonly services: Services;
    readonly news: News;
    readonly weather: Weather;

    constructor(page:Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.auto = new Auto(page)
        this.catalog = new Catalog(page)
        this.fleaMarket = new FleaMarket(page)
        this.forum = new Forum(page)
        this.main = new Main(page)
        this.realEstate = new RealEstate(page)
        this.services = new Services(page)
        this.news = new News(page)
        this.weather = new Weather(page)
    }
}