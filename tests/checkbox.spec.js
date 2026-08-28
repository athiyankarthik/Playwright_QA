import {test,expect} from '@playwright/test'

test("radio button",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator('//input[@id="female"]').check()

    await expect(page.locator('//input[@id="female"]')).toBeChecked()
    
    await page.pause()
   await page.locator('//input[@id="female"]').uncheck();
   await expect(page.locator('//input[@id="female"]')).not.toBeChecked();

    await expect(page.locator('//input[@id="male"]')).not.toBeChecked()
    await page.pause()
   await page.locator('//input[@id="monday"]').check();



})

test("multiple checkbox", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let locat = ["monday", "wednesday", "friday", "sunday"]

    for (let i of locat) {
        await page.locator(`//input[@id="${i}"]`).check()
        await expect(page.locator(`//input[@id="${i}"]`)).toBeChecked()
    }

    await page.pause()
})





test("multiple checkbox using locator", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let locat = [
        '//input[@id="monday"]',
        '//input[@id="wednesday"]',
        '//input[@id="friday"]',
        '//input[@id="sunday"]'
    ]

    for (let i of locat) {
        await page.locator(i).check()
        await expect(page.locator(i)).toBeChecked()
    }

    await page.pause()

})