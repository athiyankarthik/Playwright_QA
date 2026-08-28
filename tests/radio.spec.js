import {test,expect} from '@playwright/test'

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});

test("dropdown",async({page})=>{
    await page.goto("https://letcode.in/radio")

//selct any one radio one first line
 await page.locator ("//input[@id='no']").check()

//confirm youcan select only one radio button

await page.locator(('//input[@type="radio" and @class="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"]'))[3];
    await page.pause()
})
