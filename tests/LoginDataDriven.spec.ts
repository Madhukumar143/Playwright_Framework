import { test, expect } from '../Fixtures/test_fixtures';
import { Dataprovider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';


//Load JSON test data logindata.json
const jsonPath="testdata/logindata.json";
const jsonTestData=Dataprovider.getTestdataFromjson(jsonPath);


for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page,loginPage,myAccountPage,homePage})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        await homePage.ClickmyAccount()
        await homePage.ClickLogin();

        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getLoginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })
}

//Load CSV test data logindata.json

const csvPath = "testdata/logindata.csv";
const csvTestData = Dataprovider.getTestDataFromCsv(csvPath);


for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({page,loginPage,myAccountPage,homePage})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        await homePage.ClickmyAccount();
        await homePage.ClickLogin();

        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getLoginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');    
        }
    })
}