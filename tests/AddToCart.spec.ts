import { test, expect } from '@playwright/test'
import { Homepage } from '../pages/homePage'
import { SearchResultsPage } from '../pages/searchResultsPage'
import { TestConfig } from '../test.config'
import { ProductPage } from '../pages/productPage'

let homePage: Homepage;
let searchResultsPage: SearchResultsPage;
let productPage : ProductPage;
let config : TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig(); //object for testconfig file
    await page.goto(config.appUrl);
    homePage = new Homepage(page);
    searchResultsPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);
})

test.afterEach(async ({ page }) => {
    await page.close();
})



test('Add to cart test @sanity', async () => {
    await homePage.Searchforproduct(config.productName);

    await homePage.ClickSearchButton();

    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

    const productName = config.productName;
    expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

    if (await searchResultsPage.isProductExist(productName)){
        await searchResultsPage.selectProduct(productName);
        await productPage.setQuantity(config.productQuantity);
        await productPage.addToCart();

        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
    }

});