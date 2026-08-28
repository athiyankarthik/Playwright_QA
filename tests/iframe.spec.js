import {test,expect} from '@playwright/test'

test("iframe",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const isFrame=await page.frames()

    console.log("IFrame count :",await isFrame.length);

    for(let i of isFrame){
        console.log("Frame URL :",await i.url());
    }

})

// await page.locator('(//a[text()="Courses"])[1]').click()

test("frameLocator",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //frame   => name , url
    //framelocator  => css , xpath

    // const iFrame=await page.frame({name:"iframe-name"})
    // const iFrame=await page.frame({url:"https://legacy.rahulshettyacademy.com/"})
    const iFrame=await page.frameLocator('//iframe[@id="courses-iframe"]')

    await iFrame.locator('(//a[text()="Courses"])[1]').click()

    await page.pause()
})


test.only("nested iframe", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const child=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})

    const grandChild=await child.childFrames()[0]

    await grandChild.locator('//input[@type="text"]').fill("playwright")

    await page.pause()
})


test("nested iframedd",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    // const child=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})

    // const grandChild=await child.childFrames()[0]

    const child=await page.frameLocator('//div[@id="Multiple"]/iframe')

    const grandChild=await child.frameLocator('//h5[text()="Nested iFrames"]//following-sibling::iframe')

    await grandChild.locator('//input[@type="text"]').fill("playwright")

    await page.pause()
})