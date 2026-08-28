import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page.locator('path').first()).toBeVisible();
  await expect(page.locator('img').first()).toBeVisible();
  await expect(page.locator('#mount_0_0_Zz')).toContainText('Explore the things you love.');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('example@gmail.com');
  await page.locator('textbox', { name: 'Password' }).click();
  await expect(page.locator('#mount_0_0_Zz')).toMatchAriaSnapshot(`
    - text: Log in to Facebook
    - textbox "Email address or mobile number": example@gmail.com
    - text: Email address or mobile number
    - textbox "Password"
    - text: Password
    - button "Log in"
    - link "Forgot password?":
      - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxNjIwNzQ2NjMx
    - link "Create new account":
      - /url: /reg/?entry_point=login&next=
    - img "Meta logo"
  `);
  await expect(page.locator('#mount_0_0_Zz')).toMatchAriaSnapshot(`
    - text: Log in to Facebook
    - textbox "Email address or mobile number": example@gmail.com
    - text: Email address or mobile number
    - textbox "Password"
    - text: Password
  `);
});