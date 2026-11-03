import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { Homepage } from '../pages/homePage';
import { RegisterPage } from '../pages/registerPage';
import { LogoutPage } from '../pages/logoutPage';
import { ProductPage } from '../pages/productPage';
import { SearchResultsPage } from '../pages/searchResultsPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { MyAccountPage } from '../pages/myAccountPage';
import { TestConfig } from '../test.config'


type PageFixtures = {
    appSetup : void;
    loginPage: LoginPage;
    homePage: Homepage;
    registerPage: RegisterPage;
    logoutPage: LogoutPage;
    productPage: ProductPage;
    searchResultsPage: SearchResultsPage;
    shoppingCartPage: ShoppingCartPage;
    checkoutPage: CheckoutPage;
    myAccountPage: MyAccountPage;
    config : TestConfig
};

export const test = base.extend<PageFixtures>({

    // 1. Automatic setup before every test
    appSetup: [async ({ page }, use) => {

        const config = new TestConfig();

        // Navigate to application
        await page.goto(config.appUrl);

        console.log('Application launched successfully');

        await use();

        // Teardown after every test
        console.log('Test execution completed');

    }, { auto: true }],

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new Homepage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },

    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },

});

export { expect };