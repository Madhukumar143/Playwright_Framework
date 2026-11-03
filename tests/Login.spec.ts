import { test, expect } from '../Fixtures/test_fixtures'
import { TestConfig } from '../test.config'

let config : TestConfig;


test('User login test @master', async ({homePage , loginPage,myAccountPage}) => {
    config = new TestConfig()
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