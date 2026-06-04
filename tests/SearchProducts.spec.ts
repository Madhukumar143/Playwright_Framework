import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { Homepage } from '../pages/homePage'
import { SearchResultsPage } from '../pages/searchResultsPage';


// Declare Shared variables 

let config: TestConfig;
let homePage: Homepage;
let searchResultsPage: SearchResultsPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);


    homePage = new Homepage(page);
    searchResultsPage = new SearchResultsPage(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
});

test('Product search test @sanity', async () => {
    const productName = config.productName;

    await homePage.Searchforproduct(productName);
    await homePage.ClickSearchButton();


    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

    const isProductFound = await searchResultsPage.isProductExist(productName);

    expect(isProductFound).toBeTruthy()

})