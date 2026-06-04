import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { Homepage } from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import { MyAccountPage } from '../pages/myAccountPage'
import { LogoutPage } from '../pages/logoutPage'

// Declare Shared variables 

let config: TestConfig;
let homePage: Homepage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    //initialize Page Objects
    homePage = new Homepage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    //logoutPage = new LogoutPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("User Logount test @regression", async () => {
    await homePage.ClickmyAccount();
    await homePage.ClickLogin();

    await loginPage.login(config.email, config.password);

    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

    logoutPage = await myAccountPage.clickLogout();

    expect(await logoutPage.isContinueButtonVisible()).toBeTruthy();

    await logoutPage.clickContinue();
    expect(await homePage.isHomepageExists()).toBe(true);
})