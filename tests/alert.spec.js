import {test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        expect(alert.message('I am an alert box!'))

        await alert.accept()
    })

    await page.click('//button[@id="alertBtn"]')

    await page.waitForTimeout(5000)
})


//confirmation alert


test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message('Press a button!'))

        // await alert.accept()
        await alert.dismiss()
    })

    await page.click('//button[@id="confirmBtn"]')

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(5000)

})


test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message('Please enter your name:'))

        // await alert.accept("playwright")
        await alert.dismiss("playwright")

    })

    await page.click('//button[@id="promptBtn"]')

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello playwright! How are you today?")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")

    await page.waitForTimeout(5000)
})