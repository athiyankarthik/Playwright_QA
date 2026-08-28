import path from 'path';
import { test, expect } from '@playwright/test';

const screenshotDir = path.resolve(process.cwd(), 'screenshot');

test("screenshot", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.screenshot({ path: path.join(screenshotDir, 'automation.png') });
    // await page.screenshot({ path: path.join(screenshotDir, 'automation.png'), fullPage: true });
    // await page.locator('//div[@id="HTML8"]').screenshot({ path: path.join(screenshotDir, 'table.png') });
});
