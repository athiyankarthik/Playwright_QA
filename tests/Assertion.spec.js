import {test,expect} from '@playwright/test'

test("assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page).toHaveURL("https://Testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect.soft(page.locator('//h1[@class="title"]')).toBeVisible()


    await expect(page.locator('//p[@class="description"]/span')).toHaveText("For Selenium, Cypress & Pl...")
    await expect.soft(page.locator('//p[@class="description"]/span')).toContainText("Playwright")

    const text='//input[@id="name"]'

    await expect(page.locator(text)).toBeEmpty()

    await page.locator(text).fill("playwright")
    await expect.soft(page.locator(text)).toHaveValue("playwright")

    await expect(page.locator(text)).not.toBeEmpty()

})