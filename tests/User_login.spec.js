import { test, expect } from '@playwright/test'

test.beforeEach("LOGIN", async ({ page }) => {
    await page.goto("https://dev01.ryzeclaims.com/dashboard")

    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator('input[name="email"]')).toBeVisible();

    await page.locator('input[name="email"]').fill('qa.admin');
    await page.locator('//input[@name="password"]').fill("Tester@123");

    await expect(page.locator('input[name="email"]')).toHaveValue('qa.admin');
    await expect(page.locator('//input[@name="password"]')).toHaveValue('Tester@123');

    await page.locator("//button[normalize-space()='Login']").click();

    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Welcome to RYZE Claim Solutions' })).toBeVisible();
    await expect(page.getByText('Invalid credentials')).not.toBeVisible();

    console.log("Successfully logged in")
})

test("Entities", async ({ page }) => {

    // Click Entities side menu
    await page.locator('a[href="/entities"]').click();
    await expect(page).toHaveURL(/entities/i);

    // Click Add Entities button
    await page.getByText('Add Entities').click();

    // Fill company name
const uniqueCompanyName = `AUGUSTSPRINTTWO_${Date.now()}`;   // 1. generate panu the unique value first
const companyName = page.getByLabel('Company Name'); // 2. locate panu field

await companyName.fill(uniqueCompanyName);            // 3. fill panu
await expect(companyName).toHaveValue(uniqueCompanyName);

console.log(`Company Name entered: ${uniqueCompanyName}`);

    //Notification mail
    await page.locator('input[name="emailNotiication"]').fill('karthik.padmanaban@aroopatech.com');

    //role select

await page.getByRole('combobox', { name: 'Role *' }).click();
  await page.getByRole('option', { name: 'Client', exact: true }).click();

//First,Second,Third report and follow_up
const firstReport = page.locator("//input[@name='firstReport']");
const secondReport = page.locator("//input[@name='secondReport']");
const followUpReport = page.locator("//input[@name='thirdReport']");

await firstReport.click();
await firstReport.fill('10');

await secondReport.click();
await secondReport.fill('20');

await followUpReport.click();
await followUpReport.fill('30');

//client group select
const clientGroup = page.locator('select[name="clientgroupselectedlist"]');

// Select by visible text (recommended - human readable)
await clientGroup.selectOption({ label: '21st Century Insurance' });

// OR select by value (the GUID) - more precise but less readable
await clientGroup.selectOption('c02a1f55-8f65-4669-97a1-125e629a727e');

// OR select by index if you just need "any one" item
await clientGroup.selectOption({ index: 1 }); // index 0 is the disabled blank option


    // Open date picker
    await page.locator('xpath=(//button[@aria-label="Choose date"])[1]').click();

    // Select today's date from the MUI calendar popup (common MUI pattern — verify against your actual markup)
    const today = new Date().getDate().toString();
    await page.getByRole('gridcell', { name: today, exact: true }).click();

    // Click Update
    const updateBtn = page.getByRole('button', { name: 'Update', exact: true });
    await expect(updateBtn).toBeEnabled();
    await updateBtn.click();

  //Click Test group check_box
  await page.locator('input[name="testgroup"]').check();

  //clicks email type field

   await page.locator('select[name="emailtypeid"]').click()

   //Select the drop
     await page.locator('select[name="emailtypeid"]').selectOption('Office');

 // await page.locator('select[name="emailtypeid"]').selectOption('c546e6e6-9bfe-4ce5-9c21-929f8eed2343')

//add email address
await page.locator('input[name="email"]').fill('karthik.padmanaban@aroopatech.com');

//click phone type as fax
  await page.locator('select[name="phonenotypeid"]').click();

    await page.locator('select[name="phonenotypeid"]').selectOption('Fax');

  //await page.locator('select[name="phonenotypeid"]').selectOption('e8b0e99a-525b-4e76-bad3-cac56bfad64d');

   //click phone number field and add thr numbers
await page.getByRole('textbox', { name: 'Phone *' }).click();
await page.getByRole('textbox', { name: 'Phone *' }).fill('(123) 456-78984');

//Address type
  await page.locator('select[name="addresstypeid"]').click();
  await page.locator('select[name="addresstypeid"]').selectOption('Residential');
  //await page.locator('select[name="addresstypeid"]').selectOption('bb9819a3-52a3-4335-a8ca-9c14cc88033f');

  //Address one
  await page.getByRole('textbox', { name: 'Address 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address 1 *' }).fill('QADEMO');

  //Address two
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('DEMO');

//zip code 
 await page.getByRole('textbox', { name: 'Zip *' }).click();
  await page.getByRole('textbox', { name: 'Zip *' }).fill('10001');


//click create entities button
await page.locator('button[value="CreateClient"]').click()

//Tax_id

const taxId = page.locator('input[name="taxid"]');
await taxId.fill('123-45-6789');
await expect(taxId).toHaveValue('123-45-6789');


//Accordion panel click

const clientInfoAccordion = page.getByRole('button', { name: 'Client Additional Information' });
await clientInfoAccordion.click();
//await expect(clientInfoAccordion).toHaveAttribute('aria-expanded', 'true');


//scrolling
//await page.mouse.wheel(0, 500);


//profit center

  await page.getByRole('combobox', { name: 'Profit Center *' }).click();
  await page.getByRole('option', { name: 'CAT', exact: true }).click();

//click create entities button
const createEntityBtn = page.locator('button[value="CreateClient"]');
await createEntityBtn.click();



//Click ok button

const okButton = page.getByRole('button', { name: 'OK' });

if (await okButton.isVisible({ timeout: 3000 }).catch(() => false)) {
    await okButton.click();
}

 await page .pause()

})

