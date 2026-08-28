import {test, expect} from '@playwright/test'
import cred from '../test-data/facebook.json'
test("page navigation", async ({page})=>{

    await page.goto("https://www.facebook.com/")


       await page.locator('[name="email"]').fill("example@gmail.com");
    await page.locator("#_R_1hmkqsqppb6amH1_").fill("Password123");
    await page.locator('[aria-label="Log in"]').click();

})


