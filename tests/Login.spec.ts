import { test, expect } from '@playwright/test'
import { Homepage } from '../pages/homePage'
import { MyAccountPage } from '../pages/myAccountPage'
import { LoginPage } from '../pages/loginPage'
import { TestConfig } from '../test.config'

let homePage: Homepage;
let myAccountPage: MyAccountPage;
let loginPage : LoginPage;
let config : TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); //object for testconfig file
    await page.goto(config.appUrl);
    
    //initializing page Objects
    homePage = new Homepage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.close();
})



test('User login test @master', async () => {
   await  homePage.ClickmyAccount();
   await homePage.ClickLogin();

   await loginPage.setEmail(config.email);
   await loginPage.setPassword(config.password);

   await loginPage.clickLogin();

   // alternativelu
   // await loginPage.Login(config.email.config.password);


  const isLoggedin =  await myAccountPage .isMyAccountPageExists();
  expect(isLoggedin).toBeTruthy();

})