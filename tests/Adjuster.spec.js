import { test,expect} from '@playwright/test'

test.beforeEach("Adjuster", async({page}) =>{
await page.goto("https://dev01.ryzeclaims.com")

await expect(page).toHaveURL(/.*login/);
await expect(page.locator('input[name="email"]')).toBeVisible();

await page.locator('input[name="email"]').fill('qa.admin')
await page.locator ('//input[@name="password"]').fill("Tester@123");

await expect(page.locator('input[name="email"]')).toHaveValue('qa.admin');
await expect (page.locator('//input[@name="password"]')).toHaveValue('Tester@123');

await page.locator ("//button[normalize-space()='Login']").click();

await expect(page).toHaveURL(/dashboard/, {timeout:10000});

await expect(page.getByRole('heading', { name: 'Welcome to RYZE Claim Solutions' })).toBeVisible();

await expect(page.getByText('Invalid credentials')).not.toBeVisible();


console.log("Successfully logged in")


})

test("Title: 'Adjuster_Creation' " ,async ({page})=>{

//click side menu of Adjuster

await page.getByRole('button', { name: 'Adjuster' }).click();

//click Add adjuster button
await page.locator('button', { hasText: 'Add Adjuster' }).click();

//Add Adjuster First name 
await page.locator("//input[@name='firstname']").fill("Karthik");

//Add Adjuster Last name
await page.locator("//input[@name='lastname'] ").fill("QA");

//Add remarks
  await page.getByRole('textbox', { name: 'Remark' }).click();
  await page.getByRole('textbox', { name: 'Remark' }).fill('data');

  //Enter DOB/Inc
  await page.locator('xpath=(//button[@aria-label="Choose date"])[1]').click();

  //Clicking the update button
  await page.getByText('Update').click();

//Click Test group check_box
  await page.locator('input[name="testgroup"]').check();


//clicks email type field

   await page.locator('select[name="emailtypeid"]').click()

//Select the drop
     await page.locator('select[name="emailtypeid"]').selectOption('Office');

//add email address
await page.locator('input[name="email"]').fill('karthik.padmanaban@aroopatech.com');


//click phone type as fax
  await page.locator('select[name="phonenotypeid"]').click();
  await page.locator('select[name="phonenotypeid"]').selectOption('Fax');

//click phone number field and add thr numbers
await page.getByRole('textbox', { name: 'Phone *' }).click();
await page.getByRole('textbox', { name: 'Phone *' }).fill('(123) 456-78984');



//Address type
  await page.locator('select[name="addresstypeid"]').click();
  await page.locator('select[name="addresstypeid"]').selectOption('Residential');

  //Address one
  await page.getByRole('textbox', { name: 'Address 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address 1 *' }).fill('QADEMO');

  //Address two
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('DEMO');

//zip code 
 await page.getByRole('textbox', { name: 'Zip *' }).click();
  await page.getByRole('textbox', { name: 'Zip *' }).fill('10001');


//Adjuster Status
await page.locator('xpath=(//input[@role="combobox" and contains(@class, "MuiAutocomplete-input")])[3]').click();




})