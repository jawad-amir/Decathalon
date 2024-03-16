
import { Page, expect } from '@playwright/test';
import { selector } from './selector';

export async function goToShopCollectionPage(page: Page): Promise<void> {
    await page.goto('https://decathlon.moneyhash.io/');
    await page.waitForURL('https://decathlon.moneyhash.io/');
}

export async function clickShopCollection(page: Page): Promise<void> {
    await page.locator(selector.shopCollection).click();
}

export async function clickItem1(page: Page): Promise<void> {
    await page.locator(selector.item1).click();
}

export async function clickItem2(page: Page): Promise<void> {
    await page.locator(selector.item2).click();
}

export async function clickItem3(page: Page): Promise<void> {
    await page.locator(selector.item3).click();
}

export async function addItemToBag(page: Page): Promise<void> {
    await page.locator(selector.addToBag).click();
}

export async function bagItems(page: Page): Promise<void> {
    await page.locator(selector.openBagButton).click()
    await expect(page.locator(selector.verifyItem1AddedToBag)).toBeVisible({ visible: true});
    await expect(page.locator(selector.verifyItem2AddedToBag)).toBeVisible({ visible: true});
    await expect(page.locator(selector.verifyItem3AddedToBag)).toBeVisible({ visible: true});
}

export async function goToCheckout(page: Page): Promise<void> {
    await page.locator(selector.checkoutButton).click();
}

type fillPersonalInfoArgs = {
    page: Page, 
    firstName: string, 
    lastName: string, 
    phoneNumber: string, 
    emailAddress: string
}

export async function fillPersonalInformationForm({ page, firstName, lastName, phoneNumber, emailAddress}: fillPersonalInfoArgs ): Promise<void> {
    await page.locator(selector.firstName).fill(firstName);
    await page.locator(selector.lastName).fill(lastName);
    await page.locator(selector.phoneNumber).fill(phoneNumber);
    await page.locator(selector.emailAddress).fill(emailAddress);
    await page.waitForSelector(selector.nextStep);
    await page.locator(selector.nextStep).click();
}

type fillAddressArgs = {
    page: Page,  
    inputAddressField: string, 
    inputAddressCity: string, 
    inputAddressPostalCode: string, 
    inputAddressState: string
}
export async function fillAddressForm({ page, inputAddressField, inputAddressCity, inputAddressPostalCode, inputAddressState}: fillAddressArgs): Promise<void> {
    await page.locator(selector.inputAddressField).fill( inputAddressField);
    await page.locator(selector.inputAddressCity).fill(inputAddressCity);
    await page.locator(selector.inputAddressState).fill(inputAddressState);
    await page.locator(selector.inputAddressPostalCode).fill(inputAddressPostalCode);
    await page.waitForTimeout(2000);
    await page.locator(selector.nextStep).click({ force: true});
}

export async function selectHomeDelivery(page: Page): Promise<void> {
    await page.locator(selector.homeDeliveryCheckBox).click();
    await page.waitForSelector(selector.nextStep);
    await page.locator(selector.nextStep).click();
}

export async function selectCashOnDelivery(page: Page): Promise<void> {
    await page.locator(selector.cashOnDeliveryCheckbox).click();
}

export async function completeOrder(page: Page): Promise<void> {
    await page.locator(selector.completeOrder).click();
}