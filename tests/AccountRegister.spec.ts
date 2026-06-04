/* 
Test Case :  for Account registration

Steps : 
1. Navigate to application URl
2. navigate to My account and register page
3. Fill all the data with random data
4. Agree Privacy policy check box and submit the form
5. validate the confirmation message

*/

import { test, expect } from '@playwright/test'
import { Homepage } from '../pages/homePage'
import { RegisterPage } from '../pages/registerPage'
import { randomUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config'

let homePage: Homepage;
let registerPage: RegisterPage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig(); //object for testconfig file
    await page.goto(config.appUrl);
    homePage = new Homepage(page);
    registerPage = new RegisterPage(page);
})

test.afterEach(async ({ page }) => {
    await page.close();
})



test('User registration test @sanity', async () => {



    await homePage.ClickmyAccount();
    await homePage.ClickRegister();


    await registerPage.fillfirstname(randomUtil.getFirstname());
    //sleep 3sec
    //setTimeout('3000')
    await registerPage.filllastname(randomUtil.getLastname());
    await registerPage.fillemail(randomUtil.getemail());
    await registerPage.filltelenum(randomUtil.getphoneno());


    const password = randomUtil.getPassword();
    await registerPage.fillpassword(password);
    await registerPage.fillconfirmpassword(password);

    await registerPage.checkprivacypolicy();
    await registerPage.clickoncontinue();


    //Validate confirmation message
    const confirmmsg = await registerPage.registerconfirmation();
    expect(confirmmsg).toBeTruthy();
})


