# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: User_login.spec.js >> Entities
- Location: tests\User_login.spec.js:24:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://dev01.ryzeclaims.com/login"
Timeout: 10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    17 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://dev01.ryzeclaims.com/login"

```

```yaml
- img "logo"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.beforeEach("LOGIN", async ({ page }) => {
  4   |     await page.goto("https://dev01.ryzeclaims.com/dashboard")
  5   | 
  6   |     await expect(page).toHaveURL(/.*login/);
  7   |     await expect(page.locator('input[name="email"]')).toBeVisible();
  8   | 
  9   |     await page.locator('input[name="email"]').fill('qa.admin');
  10  |     await page.locator('//input[@name="password"]').fill("Tester@123");
  11  | 
  12  |     await expect(page.locator('input[name="email"]')).toHaveValue('qa.admin');
  13  |     await expect(page.locator('//input[@name="password"]')).toHaveValue('Tester@123');
  14  | 
  15  |     await page.locator("//button[normalize-space()='Login']").click();
  16  | 
> 17  |     await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  18  |     await expect(page.getByRole('heading', { name: 'Welcome to RYZE Claim Solutions' })).toBeVisible();
  19  |     await expect(page.getByText('Invalid credentials')).not.toBeVisible();
  20  | 
  21  |     console.log("Successfully logged in")
  22  | })
  23  | 
  24  | test("Entities", async ({ page }) => {
  25  | 
  26  |     // Click Entities side menu
  27  |     await page.locator('a[href="/entities"]').click();
  28  |     await expect(page).toHaveURL(/entities/i);
  29  | 
  30  |     // Click Add Entities button
  31  |     await page.getByText('Add Entities').click();
  32  | 
  33  |     // Fill company name
  34  | const uniqueCompanyName = `AUGUSTSPRINTTWO_${Date.now()}`;   // 1. generate panu the unique value first
  35  | const companyName = page.getByLabel('Company Name'); // 2. locate panu field
  36  | 
  37  | await companyName.fill(uniqueCompanyName);            // 3. fill panu
  38  | await expect(companyName).toHaveValue(uniqueCompanyName);
  39  | 
  40  | console.log(`Company Name entered: ${uniqueCompanyName}`);
  41  | 
  42  |     //Notification mail
  43  |     await page.locator('input[name="emailNotiication"]').fill('karthik.padmanaban@aroopatech.com');
  44  | 
  45  |     //role select
  46  | 
  47  | await page.getByRole('combobox', { name: 'Role *' }).click();
  48  |   await page.getByRole('option', { name: 'Client', exact: true }).click();
  49  | 
  50  | //First,Second,Third report and follow_up
  51  | const firstReport = page.locator("//input[@name='firstReport']");
  52  | const secondReport = page.locator("//input[@name='secondReport']");
  53  | const followUpReport = page.locator("//input[@name='thirdReport']");
  54  | 
  55  | await firstReport.click();
  56  | await firstReport.fill('10');
  57  | 
  58  | await secondReport.click();
  59  | await secondReport.fill('20');
  60  | 
  61  | await followUpReport.click();
  62  | await followUpReport.fill('30');
  63  | 
  64  | //client group select
  65  | const clientGroup = page.locator('select[name="clientgroupselectedlist"]');
  66  | 
  67  | // Select by visible text (recommended - human readable)
  68  | await clientGroup.selectOption({ label: '21st Century Insurance' });
  69  | 
  70  | // OR select by value (the GUID) - more precise but less readable
  71  | await clientGroup.selectOption('c02a1f55-8f65-4669-97a1-125e629a727e');
  72  | 
  73  | // OR select by index if you just need "any one" item
  74  | await clientGroup.selectOption({ index: 1 }); // index 0 is the disabled blank option
  75  | 
  76  | 
  77  |     // Open date picker
  78  |     await page.locator('xpath=(//button[@aria-label="Choose date"])[1]').click();
  79  | 
  80  |     // Select today's date from the MUI calendar popup (common MUI pattern — verify against your actual markup)
  81  |     const today = new Date().getDate().toString();
  82  |     await page.getByRole('gridcell', { name: today, exact: true }).click();
  83  | 
  84  |     // Click Update
  85  |     const updateBtn = page.getByRole('button', { name: 'Update', exact: true });
  86  |     await expect(updateBtn).toBeEnabled();
  87  |     await updateBtn.click();
  88  | 
  89  |   //Click Test group check_box
  90  |   await page.locator('input[name="testgroup"]').check();
  91  | 
  92  |   //clicks email type field
  93  | 
  94  |    await page.locator('select[name="emailtypeid"]').click()
  95  | 
  96  |    //Select the drop
  97  |      await page.locator('select[name="emailtypeid"]').selectOption('Office');
  98  | 
  99  |  // await page.locator('select[name="emailtypeid"]').selectOption('c546e6e6-9bfe-4ce5-9c21-929f8eed2343')
  100 | 
  101 | //add email address
  102 | await page.locator('input[name="email"]').fill('karthik.padmanaban@aroopatech.com');
  103 | 
  104 | //click phone type as fax
  105 |   await page.locator('select[name="phonenotypeid"]').click();
  106 | 
  107 |     await page.locator('select[name="phonenotypeid"]').selectOption('Fax');
  108 | 
  109 |   //await page.locator('select[name="phonenotypeid"]').selectOption('e8b0e99a-525b-4e76-bad3-cac56bfad64d');
  110 | 
  111 |    //click phone number field and add thr numbers
  112 | await page.getByRole('textbox', { name: 'Phone *' }).click();
  113 | await page.getByRole('textbox', { name: 'Phone *' }).fill('(123) 456-78984');
  114 | 
  115 | //Address type
  116 |   await page.locator('select[name="addresstypeid"]').click();
  117 |   await page.locator('select[name="addresstypeid"]').selectOption('Residential');
```