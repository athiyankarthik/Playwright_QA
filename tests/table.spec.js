import {test,expect} from '@playwright/test'

test("table",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=await page.locator('//table[@id="productTable"]/thead/tr/th')
    const rows=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column :",await column.count());
    console.log("rows :",await rows.count());


//multiple values

//method 1

// const product=["Smartphone","Laptop","Smartwatch"]

// for(let i of product){
//     await page.locator(`//table[@id="productTable"]/tbody/td[text()="${i}"]/following-sibling::td/input[@type="checkbox"]`)
// }

//method 2

const watch=await rows.filter({
    has:page.locator('td'),
    hasText:/Smartphone|Laptop|Smartwatch/
})

const check=await watch.all()

for(let i of check){
    await i.locator('//input[@type="checkbox"]').check()
}


await page.pause()



})