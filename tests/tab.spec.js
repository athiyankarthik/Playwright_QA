import { test, expect, chromium } from '@playwright/test'

test("multiple tabs", async () => {
    const browser = await chromium.launch()
    //context
    const context = await browser.newContext()
    const pageOne = await context.newPage()
    const pageTwo = await context.newPage()

    await pageOne.locator('//input[@id="name"]').fill("playwright")
    await pageOne.waitForTimeout(3000)

    await pageTwo.goto("https://www.facebook.com/")

    console.log(await pageTwo.title());
    await pageTwo.locator('//input[@name="email"]').fill("example@gmail.com")

    await pageOne.waitForTimeout(3000)
})

test("handling tabs", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.title());
    await page.locator('//input[@name="username"]').fill("Admin")

    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newTab.waitForLoadState()

    console.log(await newTab.title());

    await newTab.locator('//button[text()="Book a Free Demo"]').click()

    await newTab.pause()
})

test("page navigation",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.waitForTimeout(2000)

  await page.goto("https://www.facebook.com/")
  await page.waitForTimeout(2000)

  await page.goBack()
  await page.waitForTimeout(2000)

  await page.goForward()
  await page.waitForTimeout(2000)

  await page.reload()
})

