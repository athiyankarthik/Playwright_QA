import { expect, test } from '@playwright/test';

test('test data', async ({ page }) => {
	await page.goto('https://www.saucedemo.com');
	await page.getByPlaceholder("Username").fill("standard_user");
	await page.getByPlaceholder("Password").fill("secret_sauce");
	await page.getByRole('button', { name: 'Login' }).click();
    //await page.locator("#login-button").click();

    await expect(page.getByText("Swag Labs")).toBeVisible();

});



test('invalid', async ({ page }) => {
	await page.goto('https://www.saucedemo.com');
	await page.getByPlaceholder("Username").fill("Qqqqqqqqq");
	await page.getByPlaceholder("Password").fill("secret_sauce");
	await page.getByRole('button', { name: 'Login' }).click();
    //await page.locator("#login-button").click();
    await expect(page.getByText("Swag Labs")).toBeVisible();

    //await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();

    await page.pause();
    
});