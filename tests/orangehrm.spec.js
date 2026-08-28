import {test, expect} from '@playwright/test'

test("page navigation", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


     await page.locator('input[name="username"]').fill("Admin");
     await page.locator('input[name="password"]').fill("admin123");
     await page.locator('button.orangehrm-login-button').click();
})


test("login using built-in locators", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page.getByAltText("company-branding")).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");

   // await page.pause();  THIS STOPS THE EXECUTION AND WE NEED TO CONTINUE THE TEST BY USING DEBUGGER


    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button', {name: " Login "}).click();

    // await page.waitForTimeout(5000)
    await page.pause();
})