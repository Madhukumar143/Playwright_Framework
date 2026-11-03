import { test, expect } from '../Fixtures/test_fixtures'
import { TestConfig } from '../test.config'


// Declare Shared variables 

let config: TestConfig;

test('Product search test @sanity', async ({homePage,searchResultsPage}) => {
    config = new TestConfig()
    const productName = config.productName;

    await homePage.Searchforproduct(productName);
    await homePage.ClickSearchButton();


    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

    const isProductFound = await searchResultsPage.isProductExist(productName);

    expect(isProductFound).toBeTruthy()

})