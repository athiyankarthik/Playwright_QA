import {test,expect} from '@playwright/test'

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator('//select[@id="country"]').selectOption("India")
    // await page.locator('//select[@id="country"]').selectOption({value:"uk"})
    await page.locator('//select[@id="country"]').selectOption({index:4})

const text=await page.locator('//select[@id="country"]').textContent()
console.log(text);

const count=await page.locator('//select[@id="country"]/option').count()
console.log(count);

    await page.pause()
})

//multi select nah array use 
test("multiple dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Green","Yellow"])

    await page.pause()
})