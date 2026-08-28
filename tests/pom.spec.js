import {test,expect} from '@playwright/test'
import Orange from '../pages/hrm'
import cred from '../Test-data/orange.json'

test("login using pom",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    let OH=new Orange(page)
    
    await OH.login(cred.username,cred.password)
    
    await page.pause()
})