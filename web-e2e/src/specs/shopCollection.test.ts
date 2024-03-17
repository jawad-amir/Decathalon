import { test } from '@playwright/test';
import * as shopPage from '../page_objects/shopPage';
import { goToShopCollectionPage, clickShopCollection } from '../page_objects/shopPage';

test.describe("Shop Collection", () => {
    let page: any;

    test.beforeEach(async ({ browser }) => {
        // Open a new page on browser before each test
        page = await browser.newPage();
    });

    test.afterEach(async () => {
        // Close page after each test
        await page.close();
    });

    test("Add items to Bag and Checkout", async () => {
        // Create a variable to store the Test Data
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


        await test.step('Navigate to the URL', async () => {
        await goToShopCollectionPage(page);
        });

        await test.step('Navigate to Shop Collection/ Items', async () => {
        await clickShopCollection(page);
        });

        await test.step('Add Items to Bag', async () => {
        await shopPage.clickItem1(page);
        await shopPage.addItemToBag(page);
        await shopPage.clickItem2(page);
        await shopPage.addItemToBag(page);
        await shopPage.clickItem3(page);
        await shopPage.addItemToBag(page);
        });

        await test.step('Navigate to Bag in Header and Checkout', async () => {
        await shopPage.bagItems(page);
        await shopPage.goToCheckout(page);
        });

        await test.step('Fill out the Required Information to Checkout', async () => {
        await shopPage.fillPersonalInformationForm(testData);
        await shopPage.fillAddressForm(testData1); 
        await shopPage.selectHomeDelivery(page);
        await shopPage.selectCashOnDelivery(page);
        await shopPage.completeOrder(page);
        });
    });
});
