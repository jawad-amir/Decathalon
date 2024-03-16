
import { test } from '@playwright/test';
import * as shopPage from '../page_objects/shopPage';
import { goToShopCollectionPage, clickShopCollection } from '../page_objects/shopPage';

test.describe("Shop Collection", () => {
    let page: any;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test("Add items to Bag and Checkout", async () => {
        const testData1 = {
            page,
            inputAddressField: "Test Address Street Bla Bla bla",
            inputAddressCity: "Holdem",
            inputAddressPostalCode: "12345",
            inputAddressState: "Texas"
        };
        const testData = {
            page,
            firstName: "John",
            lastName: " Doe",
            phoneNumber: "+20106461000",
            emailAddress: "example@email.com"
        };


        await goToShopCollectionPage(page);
        await clickShopCollection(page);
        await shopPage.clickItem1(page);
        await shopPage.addItemToBag(page);
        await shopPage.clickItem2(page);
        await shopPage.addItemToBag(page);
        await shopPage.clickItem3(page);
        await shopPage.addItemToBag(page);
        await shopPage.bagItems(page);
        await shopPage.goToCheckout(page);
     //   await shopPage.clickShopCollection(page);
        await shopPage.fillPersonalInformationForm(testData);
        await shopPage.fillAddressForm(testData1); 
        await shopPage.selectHomeDelivery(page);
        await shopPage.selectCashOnDelivery(page);
        await shopPage.completeOrder(page);

        
    });
});
