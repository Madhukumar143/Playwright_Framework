import { test, expect } from '../Fixtures/test_fixtures'
import { TestConfig } from '../test.config'

// Declare Shared variables 

let config: TestConfig;

test("User Logount test @regression", async ({homePage,loginPage,myAccountPage,logoutPage}) => {
    await homePage.ClickmyAccount();
    await homePage.ClickLogin();
    config = new TestConfig();

    await loginPage.login(config.email, config.password);

    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

    logoutPage = await myAccountPage.clickLogout();

    expect(await logoutPage.isContinueButtonVisible()).toBeTruthy();

    await logoutPage.clickContinue();
    expect(await homePage.isHomepageExists()).toBe(true);
})