import { test, expect } from '../Fixtures/test_fixtures'
import { TestConfig } from '../test.config'

let config = new TestConfig();

test('Add to cart test @sanity', async ({page,homePage,searchResultsPage , productPage}) => {
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