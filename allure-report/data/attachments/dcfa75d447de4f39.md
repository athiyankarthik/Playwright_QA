# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: User_login.spec.js >> Entities
- Location: tests\User_login.spec.js:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'OK', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - banner [ref=e7]:
        - button [ref=e11] [cursor=pointer]
      - list [ref=e15]:
        - button [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: Dashboard
        - button [ref=e19] [cursor=pointer]:
          - generic [ref=e20]: Users
        - button [ref=e22] [cursor=pointer]:
          - generic [ref=e23]: Approval Process
        - button [ref=e25] [cursor=pointer]:
          - generic [ref=e26]: Training Log
        - button [ref=e28] [cursor=pointer]:
          - generic [ref=e29]: Entities
        - button [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Adjuster
        - button [ref=e34] [cursor=pointer]:
          - generic [ref=e35]: Clients
        - button [ref=e37] [cursor=pointer]:
          - generic [ref=e38]: Claims
        - button [ref=e40] [cursor=pointer]:
          - generic [ref=e41]: Review Queues
        - button [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: Claim Analytics
        - button [ref=e46] [cursor=pointer]:
          - generic [ref=e47]: Acknowledgment
        - button [ref=e49] [cursor=pointer]:
          - generic [ref=e50]: Workbench
        - button [ref=e52] [cursor=pointer]:
          - generic [ref=e53]: Dispatch Management
        - button [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: Data Entry
        - button [ref=e58] [cursor=pointer]:
          - generic [ref=e59]: Diary
        - list [ref=e61]:
          - button [ref=e62] [cursor=pointer]:
            - generic [ref=e63]: Invoice Management
            - button [ref=e65]
        - button [ref=e68] [cursor=pointer]:
          - generic [ref=e69]: Commissions
        - button [ref=e71] [cursor=pointer]:
          - generic [ref=e72]: Bulk Process
        - button [ref=e74] [cursor=pointer]:
          - generic [ref=e75]: Time Card
        - button [ref=e77] [cursor=pointer]:
          - generic [ref=e78]: NIPR
        - list [ref=e80]:
          - button [ref=e81] [cursor=pointer]:
            - generic [ref=e82]: License Management
            - button [ref=e84]
        - button [ref=e87] [cursor=pointer]:
          - generic [ref=e88]: Calendar
        - button [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: Client Group
        - button [ref=e93] [cursor=pointer]:
          - generic [ref=e94]: Tools
        - button [ref=e96] [cursor=pointer]:
          - generic [ref=e97]: Bulk Reassignment
        - list [ref=e99]:
          - button [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: Administration
            - button [ref=e103]
        - button [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: Email Templates
    - main [ref=e109]:
      - generic [ref=e111]:
        - generic [ref=e118]:
          - generic [ref=e121]:
            - generic [ref=e122]: Select Type *
            - generic [ref=e123]:
              - combobox [ref=e124]: Claim Number
              - button [ref=e126] [cursor=pointer]
              - group:
                - generic: Select Type *
          - generic [ref=e130]:
            - generic: "Claim #"
            - generic [ref=e131]:
              - textbox [ref=e132]
              - group:
                - generic: "Claim #"
          - generic [ref=e133]:
            - button [disabled]: Search
            - button [disabled]: Clear
        - generic [ref=e134]:
          - button [ref=e136] [cursor=pointer]
          - button [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: "0"
          - button [ref=e147] [cursor=pointer]
          - button [ref=e150] [cursor=pointer]:
            - generic [ref=e151]:
              - generic [ref=e152]: QA Admin
              - paragraph [ref=e153]: System User
              - generic [ref=e154]: "Last logged: 08-22-2026 23:45"
            - generic [ref=e155]: Q
      - generic [ref=e158]:
        - list [ref=e159]:
          - listitem [ref=e160]:
            - button [ref=e161] [cursor=pointer]: Create Entities
        - generic [ref=e162]:
          - progressbar [ref=e163]
          - heading [level=3] [ref=e166]: Loading, please wait
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172] [cursor=pointer]:
              - heading [level=2] [ref=e174]: General Information
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - generic [ref=e178]:
                    - generic [ref=e179]: Entity Type *
                    - generic [ref=e180]:
                      - combobox [ref=e181]
                      - group:
                        - generic: Entity Type *
                  - generic [ref=e184]:
                    - generic [ref=e185]: Company Name *
                    - generic [ref=e186]:
                      - textbox [ref=e187]: AgugQA
                      - group:
                        - generic: Company Name *
                - generic [ref=e188]:
                  - generic [ref=e190]:
                    - generic [ref=e191]: DOB/Inc
                    - generic [ref=e192]:
                      - textbox [ref=e193]:
                        - /placeholder: MM/DD/YYYY
                        - text: 08/22/2026
                      - button [ref=e195]
                      - group:
                        - generic: DOB/Inc
                  - generic [ref=e200]:
                    - generic: Remark
                    - generic [ref=e201]:
                      - textbox [ref=e202]
                      - group:
                        - generic: Remark
                - generic [ref=e203]:
                  - generic [ref=e205]:
                    - generic [ref=e206]: First Report Due Days *
                    - generic [ref=e207]:
                      - textbox [ref=e208]: "10"
                      - group:
                        - generic: First Report Due Days *
                  - generic [ref=e210]:
                    - generic [ref=e211]: Second Report Due Days *
                    - generic [ref=e212]:
                      - textbox [ref=e213]: "20"
                      - group:
                        - generic: Second Report Due Days *
                  - generic [ref=e215]:
                    - generic [ref=e216]: Follow Up Report Due Days *
                    - generic [ref=e217]:
                      - textbox [ref=e218]: "30"
                      - group:
                        - generic: Follow Up Report Due Days *
                - generic [ref=e219]:
                  - generic [ref=e220]:
                    - generic [ref=e222]:
                      - generic [ref=e223]: Notification Email *
                      - generic [ref=e224]:
                        - textbox [ref=e225]: karthik.padmanaban@aroopatech.com
                        - group:
                          - generic: Notification Email *
                    - paragraph [ref=e226]: To add multiple email address use ' ; '
                  - generic [ref=e229]:
                    - generic [ref=e230]: Role *
                    - generic [ref=e231]:
                      - button [ref=e232]:
                        - generic [ref=e233]: Client
                      - combobox [ref=e236]
                      - button [ref=e238]
                      - group:
                        - generic: Role *
                - generic [ref=e242]:
                  - generic [ref=e244]:
                    - generic [ref=e245]: Client Group *
                    - generic [ref=e246]:
                      - combobox [ref=e247]
                      - group:
                        - generic: Client Group *
                  - generic [ref=e248]:
                    - checkbox [checked] [ref=e250]
                    - generic [ref=e253]: External User
                  - generic [ref=e254]:
                    - checkbox [checked] [ref=e256]
                    - generic [ref=e259]: Test Group
                - row [ref=e261]:
                  - cell [ref=e262]:
                    - heading [level=4] [ref=e263]:
                      - text: "Reports: ("
                      - button [ref=e264]: Select
                      - text: )
            - generic [ref=e265]:
              - generic [ref=e267]:
                - generic [ref=e270]:
                  - generic [ref=e271]: Email Type *
                  - generic [ref=e272]:
                    - combobox [ref=e273] [cursor=pointer]
                    - group:
                      - generic: Email Type *
                - generic [ref=e276]:
                  - generic [ref=e277]: Email *
                  - generic [ref=e278]:
                    - textbox [ref=e279]: karthik.padmanaban@aroopatech.com
                    - group:
                      - generic: Email *
                - generic [ref=e281] [cursor=pointer]:
                  - checkbox [checked] [ref=e283]
                  - generic [ref=e286]: Default
                - button [ref=e289] [cursor=pointer]
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e295]:
                  - generic [ref=e296]: Phone Type *
                  - generic [ref=e297]:
                    - combobox [ref=e298]
                    - group:
                      - generic: Phone Type *
                - generic [ref=e301]:
                  - generic [ref=e302]: Phone *
                  - generic [ref=e303]:
                    - textbox [ref=e304]: (123) 456-7898
                    - group:
                      - generic: Phone *
                - generic [ref=e306]:
                  - checkbox [checked] [ref=e308]
                  - generic [ref=e311]: Default
                - button [ref=e314]
          - generic [ref=e317] [cursor=pointer]:
            - generic [ref=e320]:
              - generic [ref=e321]: Address Type *
              - generic [ref=e322]:
                - combobox [ref=e323]
                - group:
                  - generic: Address Type *
            - generic [ref=e326]:
              - generic [ref=e327]: Address 1 *
              - generic [ref=e328]:
                - textbox [ref=e329]: QADEMO
                - group:
                  - generic: Address 1 *
            - generic [ref=e331]:
              - generic [ref=e332]: Address 2
              - generic [ref=e333]:
                - textbox [ref=e334]: DEMO
                - group:
                  - generic: Address 2
            - generic [ref=e337]:
              - generic [ref=e338]: Zip *
              - generic [ref=e339]:
                - textbox [ref=e340]: "10001"
                - group:
                  - generic: Zip *
            - generic [ref=e343]:
              - generic [ref=e344]: City *
              - generic [ref=e345]:
                - textbox [ref=e346]: New York
                - group:
                  - generic: City *
            - generic [ref=e349]:
              - generic [ref=e350]: State *
              - generic [ref=e351]:
                - textbox [ref=e352]: NY
                - group:
                  - generic: State *
            - generic [ref=e354]:
              - checkbox [checked] [ref=e356]
              - generic [ref=e359]: Default
            - button [ref=e362]
          - generic [ref=e365]:
            - heading [level=2] [ref=e367]: Payroll Section
            - generic [ref=e371]:
              - generic [ref=e372]: Tax ID
              - generic [ref=e373]:
                - textbox [ref=e374]: 123-45-6789
                - group:
                  - generic: Tax ID
          - generic [ref=e376]:
            - button [expanded] [ref=e377] [cursor=pointer]:
              - heading [level=2] [ref=e379]: Client Additional Information
            - region [ref=e386]:
              - generic [ref=e388]:
                - generic [ref=e390]:
                  - heading [level=4] [ref=e392]: "Software Used:"
                  - generic [ref=e394]:
                    - generic [ref=e395] [cursor=pointer]:
                      - checkbox [ref=e397]
                      - generic [ref=e400]: MSB
                    - generic [ref=e401] [cursor=pointer]:
                      - checkbox [ref=e403]
                      - generic [ref=e406]: XACT 25.0
                    - generic [ref=e407] [cursor=pointer]:
                      - checkbox [ref=e409]
                      - generic [ref=e412]: XACT 27.0
                    - generic [ref=e413] [cursor=pointer]:
                      - checkbox [ref=e415]
                      - generic [ref=e418]: Other
                    - generic [ref=e419] [cursor=pointer]:
                      - checkbox [ref=e421]
                      - generic [ref=e424]: XACT 25.1
                    - generic [ref=e425] [cursor=pointer]:
                      - checkbox [ref=e427]
                      - generic [ref=e430]: XACT 27.1
                    - generic [ref=e431] [cursor=pointer]:
                      - checkbox [ref=e433]
                      - generic [ref=e436]: PowerClaim
                    - generic [ref=e437] [cursor=pointer]:
                      - checkbox [ref=e439]
                      - generic [ref=e442]: XACT 25.2
                    - generic [ref=e443] [cursor=pointer]:
                      - checkbox [ref=e445]
                      - generic [ref=e448]: XACT 27.3
                    - generic [ref=e449] [cursor=pointer]:
                      - checkbox [ref=e451]
                      - generic [ref=e454]: Simsol
                    - generic [ref=e455] [cursor=pointer]:
                      - checkbox [ref=e457]
                      - generic [ref=e460]: XACT 25.3
                    - generic [ref=e461] [cursor=pointer]:
                      - checkbox [ref=e463]
                      - generic [ref=e466]: XACT 27.5
                    - generic [ref=e467] [cursor=pointer]:
                      - checkbox [ref=e469]
                      - generic [ref=e472]: Symbility
                    - generic [ref=e473] [cursor=pointer]:
                      - checkbox [ref=e475]
                      - generic [ref=e478]: XACT 25.4
                    - generic [ref=e479] [cursor=pointer]:
                      - checkbox [ref=e481]
                      - generic [ref=e484]: XACT 28.0
                    - generic [ref=e485] [cursor=pointer]:
                      - checkbox [ref=e487]
                      - generic [ref=e490]: XACT 24.12
                    - generic [ref=e491] [cursor=pointer]:
                      - checkbox [ref=e493]
                      - generic [ref=e496]: XACT 25.5
                    - generic [ref=e497] [cursor=pointer]:
                      - checkbox [ref=e499]
                      - generic [ref=e502]: XACT ALL
                - generic [ref=e503]:
                  - generic [ref=e504]:
                    - generic [ref=e506] [cursor=pointer]:
                      - checkbox [ref=e508]
                      - generic [ref=e511]: Upload Through Eagle
                    - generic [ref=e513] [cursor=pointer]:
                      - checkbox [ref=e515]
                      - generic [ref=e518]: Auto Confirm Report When Loaded ?
                    - generic [ref=e520] [cursor=pointer]:
                      - checkbox [ref=e522]
                      - generic [ref=e525]: Exclude From Tax
                  - generic [ref=e526]:
                    - generic [ref=e528] [cursor=pointer]:
                      - checkbox [ref=e530]
                      - generic [ref=e533]: TPA
                    - generic [ref=e535] [cursor=pointer]:
                      - checkbox [ref=e537]
                      - generic [ref=e540]: Accepts 1099s
                    - generic [ref=e542] [cursor=pointer]:
                      - checkbox [ref=e544]
                      - generic [ref=e547]: Accepts W-2s
                  - generic [ref=e548]:
                    - generic [ref=e550] [cursor=pointer]:
                      - checkbox [ref=e552]
                      - generic [ref=e555]: Combine Service and Office Fee
                    - generic [ref=e557] [cursor=pointer]:
                      - checkbox [ref=e559]
                      - generic [ref=e562]: Autogenerate Weather Reports
                    - generic [ref=e564] [cursor=pointer]:
                      - checkbox [ref=e566]
                      - generic [ref=e569]: Send Internal Contact Date to Client(?)
                  - generic [ref=e570]:
                    - generic [ref=e572] [cursor=pointer]:
                      - checkbox [checked] [ref=e574]
                      - generic [ref=e577]: Send Acknowledgment Mail
                    - generic [ref=e579] [cursor=pointer]:
                      - checkbox [ref=e581]
                      - generic [ref=e584]: Enable Invision API
                    - generic [ref=e586] [cursor=pointer]:
                      - checkbox [ref=e588]
                      - generic [ref=e591]: Send Invoice Accept Mail
                  - generic [ref=e592]:
                    - generic [ref=e594] [cursor=pointer]:
                      - checkbox [ref=e596]
                      - generic [ref=e599]: Invoice Automation
                    - generic [ref=e601] [cursor=pointer]:
                      - checkbox [ref=e603]
                      - generic [ref=e606]: Training Completed
                    - generic [ref=e608] [cursor=pointer]:
                      - checkbox [ref=e610]
                      - generic [ref=e613]: Auto Suggested Adjuster
                  - generic [ref=e614]:
                    - generic [ref=e616] [cursor=pointer]:
                      - checkbox [ref=e618]
                      - generic [ref=e621]: Daily Automation
                    - generic [ref=e623] [cursor=pointer]:
                      - checkbox [ref=e625]
                      - generic [ref=e628]: CAT Automation
                    - generic [ref=e630] [cursor=pointer]:
                      - checkbox [ref=e632]
                      - generic [ref=e635]: Super CAT Automation
                  - generic [ref=e636]:
                    - generic [ref=e638] [cursor=pointer]:
                      - checkbox [ref=e640]
                      - generic [ref=e643]: Enable Invoice Creation
                    - generic [ref=e645] [cursor=pointer]:
                      - checkbox [ref=e647]
                      - generic [ref=e650]: Enable Insured Acknowledgement
                    - generic [ref=e652] [cursor=pointer]:
                      - checkbox [ref=e654]
                      - generic [ref=e657]: Enable Pace Report
                  - generic [ref=e660] [cursor=pointer]:
                    - checkbox [ref=e662]
                    - generic [ref=e665]: Enable Audit Service
                  - generic [ref=e666]:
                    - generic [ref=e670]:
                      - generic: Report Email Format
                      - generic [ref=e671]:
                        - combobox [ref=e672]
                        - button [ref=e674] [cursor=pointer]
                        - group:
                          - generic: Report Email Format
                    - generic [ref=e680]:
                      - generic: Legacy Origin
                      - generic [ref=e681]:
                        - combobox [ref=e682]
                        - button [ref=e684] [cursor=pointer]
                        - group:
                          - generic: Legacy Origin
                    - generic [ref=e689]:
                      - generic: Past Due Email
                      - generic [ref=e690]:
                        - textbox [ref=e691]
                        - group:
                          - generic: Past Due Email
                  - generic [ref=e692]:
                    - generic [ref=e695]:
                      - generic: Invoice Note
                      - generic [ref=e696]:
                        - textbox [ref=e697]
                        - group:
                          - generic: Invoice Note
                    - generic [ref=e700]:
                      - generic: Flat Fee Adjustment
                      - generic [ref=e701]:
                        - spinbutton [ref=e702]
                        - group:
                          - generic: Flat Fee Adjustment
                    - generic [ref=e705]:
                      - generic: Weather Report Duration (in months)
                      - generic [ref=e706]:
                        - spinbutton [ref=e707]
                        - group:
                          - generic: Weather Report Duration (in months)
                  - generic [ref=e708]:
                    - generic [ref=e711]:
                      - generic: Symbility ID
                      - generic [ref=e712]:
                        - textbox [ref=e713]
                        - group:
                          - generic: Symbility ID
                    - generic [ref=e716]:
                      - generic: XACT Address
                      - generic [ref=e717]:
                        - textbox [ref=e718]
                        - group:
                          - generic: XACT Address
                    - generic [ref=e721]:
                      - generic: Profile Code
                      - generic [ref=e722]:
                        - textbox [ref=e723]
                        - group:
                          - generic: Profile Code
                  - generic [ref=e724]:
                    - generic [ref=e728]:
                      - generic: Account Executive
                      - generic [ref=e729]:
                        - combobox [ref=e730]
                        - button [ref=e732] [cursor=pointer]
                        - group:
                          - generic: Account Executive
                    - generic [ref=e738]:
                      - generic: Account Reps
                      - generic [ref=e739]:
                        - combobox [ref=e740]
                        - button [ref=e742] [cursor=pointer]
                        - group:
                          - generic: Account Reps
                    - generic [ref=e748]:
                      - generic: CAT Account Executive
                      - generic [ref=e749]:
                        - combobox [ref=e750]
                        - button [ref=e752] [cursor=pointer]
                        - group:
                          - generic: CAT Account Executive
                  - generic [ref=e755]:
                    - generic [ref=e758]:
                      - generic: Minimum Mileage Threshold
                      - generic [ref=e759]:
                        - textbox [ref=e760]
                        - group:
                          - generic: Minimum Mileage Threshold
                    - generic [ref=e763]:
                      - generic: Maximum Mileage Threshold
                      - generic [ref=e764]:
                        - textbox [ref=e765]
                        - group:
                          - generic: Maximum Mileage Threshold
                    - generic [ref=e768]:
                      - generic: Miles Rate
                      - generic [ref=e769]:
                        - textbox [ref=e770]
                        - group:
                          - generic: Miles Rate
                  - generic [ref=e771]:
                    - generic [ref=e775]:
                      - generic: Client Organization
                      - generic [ref=e776]:
                        - combobox [ref=e777]
                        - button [ref=e779] [cursor=pointer]
                        - group:
                          - generic: Client Organization
                    - generic [ref=e785]:
                      - generic [ref=e786]: Profit Center *
                      - generic [ref=e787]:
                        - combobox [ref=e788]: ADR
                        - button [ref=e790] [cursor=pointer]
                        - group:
                          - generic: Profit Center *
                    - generic [ref=e796]:
                      - generic: Operational Manager
                      - generic [ref=e797]:
                        - combobox [ref=e798]
                        - button [ref=e800] [cursor=pointer]
                        - group:
                          - generic: Operational Manager
                    - generic [ref=e805]:
                      - generic: Client Discount %
                      - generic [ref=e806]:
                        - textbox [ref=e807]
                        - group:
                          - generic: Client Discount %
                  - generic [ref=e808]:
                    - generic [ref=e811]:
                      - generic: Client configured File Size (MB)
                      - generic [ref=e812]:
                        - textbox [ref=e813]
                        - group:
                          - generic: Client configured File Size (MB)
                    - generic [ref=e817]:
                      - generic [ref=e818]: Configure Acknowledgement Recipient
                      - generic [ref=e819]:
                        - combobox [ref=e820]: "No"
                        - button [ref=e822] [cursor=pointer]
                        - group:
                          - generic: Configure Acknowledgement Recipient
          - generic [ref=e825]:
            - button [disabled]: Create Entities
            - button [ref=e826] [cursor=pointer]: Cancel
      - generic [ref=e827]: Copyright ©2026 RYZE CLAIM SOLUTIONS
  - dialog [ref=e830]:
    - generic [ref=e831]: "?"
    - generic [ref=e833]: This Entity already exists, Do you want to create another with same name?
    - text: "!"
    - generic [ref=e834]:
      - button "Yes" [active] [ref=e835] [cursor=pointer]
      - button "Cancel" [ref=e836] [cursor=pointer]
```

# Test source

```ts
  64  | // Select by visible text (recommended - human readable)
  65  | await clientGroup.selectOption({ label: '21st Century Insurance' });
  66  | 
  67  | // OR select by value (the GUID) - more precise but less readable
  68  | await clientGroup.selectOption('c02a1f55-8f65-4669-97a1-125e629a727e');
  69  | 
  70  | // OR select by index if you just need "any one" item
  71  | await clientGroup.selectOption({ index: 1 }); // index 0 is the disabled blank option
  72  | 
  73  | 
  74  |     // Open date picker
  75  |     await page.locator('xpath=(//button[@aria-label="Choose date"])[1]').click();
  76  | 
  77  |     // Select today's date from the MUI calendar popup (common MUI pattern — verify against your actual markup)
  78  |     const today = new Date().getDate().toString();
  79  |     await page.getByRole('gridcell', { name: today, exact: true }).click();
  80  | 
  81  |     // Click Update
  82  |     const updateBtn = page.getByRole('button', { name: 'Update', exact: true });
  83  |     await expect(updateBtn).toBeEnabled();
  84  |     await updateBtn.click();
  85  | 
  86  |   //Click Test group check_box
  87  |   await page.locator('input[name="testgroup"]').check();
  88  | 
  89  |   //clicks email type field
  90  | 
  91  |    await page.locator('select[name="emailtypeid"]').click()
  92  | 
  93  |    //Select the drop
  94  |      await page.locator('select[name="emailtypeid"]').selectOption('Office');
  95  | 
  96  |  // await page.locator('select[name="emailtypeid"]').selectOption('c546e6e6-9bfe-4ce5-9c21-929f8eed2343')
  97  | 
  98  | //add email address
  99  | await page.locator('input[name="email"]').fill('karthik.padmanaban@aroopatech.com');
  100 | 
  101 | //click phone type as fax
  102 |   await page.locator('select[name="phonenotypeid"]').click();
  103 | 
  104 |     await page.locator('select[name="phonenotypeid"]').selectOption('Fax');
  105 | 
  106 |   //await page.locator('select[name="phonenotypeid"]').selectOption('e8b0e99a-525b-4e76-bad3-cac56bfad64d');
  107 | 
  108 |    //click phone number field and add thr numbers
  109 | await page.getByRole('textbox', { name: 'Phone *' }).click();
  110 | await page.getByRole('textbox', { name: 'Phone *' }).fill('(123) 456-78984');
  111 | 
  112 | //Address type
  113 |   await page.locator('select[name="addresstypeid"]').click();
  114 |   await page.locator('select[name="addresstypeid"]').selectOption('Residential');
  115 |   //await page.locator('select[name="addresstypeid"]').selectOption('bb9819a3-52a3-4335-a8ca-9c14cc88033f');
  116 | 
  117 |   //Address one
  118 |   await page.getByRole('textbox', { name: 'Address 1 *' }).click();
  119 |   await page.getByRole('textbox', { name: 'Address 1 *' }).press('CapsLock');
  120 |   await page.getByRole('textbox', { name: 'Address 1 *' }).fill('QADEMO');
  121 | 
  122 |   //Address two
  123 |   await page.getByRole('textbox', { name: 'Address 2' }).click();
  124 |   await page.getByRole('textbox', { name: 'Address 2' }).fill('DEMO');
  125 | 
  126 | //zip code 
  127 |  await page.getByRole('textbox', { name: 'Zip *' }).click();
  128 |   await page.getByRole('textbox', { name: 'Zip *' }).fill('10001');
  129 | 
  130 | 
  131 | //click create entities button
  132 | page.locator('button[value="CreateClient"]').click()
  133 | 
  134 | //Tax_id
  135 | 
  136 | const taxId = page.locator('input[name="taxid"]');
  137 | await taxId.fill('123-45-6789');
  138 | await expect(taxId).toHaveValue('123-45-6789');
  139 | 
  140 | 
  141 | //Accordion panel click
  142 | 
  143 | const clientInfoAccordion = page.getByRole('button', { name: 'Client Additional Information' });
  144 | await clientInfoAccordion.click();
  145 | await expect(clientInfoAccordion).toHaveAttribute('aria-expanded', 'true');
  146 | 
  147 | 
  148 | //scrolling
  149 | await page.mouse.wheel(0, 500);
  150 | 
  151 | 
  152 | //profit center
  153 | 
  154 | await page.locator('.flex.flex-col.justify-start.p-16').click();
  155 |   await page.getByRole('combobox', { name: 'Profit Center *' }).click();
  156 |   await page.getByRole('option', { name: 'ADR', exact: true }).click();
  157 | 
  158 | //click create entities button
  159 | const createEntityBtn = page.locator('button[value="CreateClient"]');
  160 | await createEntityBtn.click();
  161 | 
  162 | //click ok button
  163 | const okButton = page.getByRole('button', { name: 'OK', exact: true });
> 164 | await okButton.click();
      |                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  165 | await expect(okButton).toBeHidden(); // confirms dialog closed
  166 | 
  167 |  await page .pause()
  168 | 
  169 | })
  170 | 
  171 | 
```