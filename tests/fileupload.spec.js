test("single file upload", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/Karthik.Padmanaban/Playwright_QA/screenshot/automation.png")

    await page.click('//button[text()="Upload Single File"]')

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: automation.png");

    await page.pause()
})

//multiple file use array to add multiple values

test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["D:/ZenV_class/Playwright/pw_july_2"])

    await page.click('//button[text()="Upload Multiple Files"]')

    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected")

    await page.pause()

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])

    await page.pause()
})


test("file download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")

    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[text()="test_document.txt"]').click()
    ])

    const file="D:/Zen_class/Playwright/pw_july_9am/screenshot/test_document.txt"  //download.suggestedFile

    await download.saveAs(file)

    await page.waitForTimeout(2000)
})