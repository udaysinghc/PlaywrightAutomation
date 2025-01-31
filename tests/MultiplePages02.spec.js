import{test,expect,chromium} from '@playwright/test'

test('Add Multiple Pages', async()=>{

    const browser=await chromium.launch()

    const context=await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPages=context.pages()
    console.log("Number of Pages is : ",allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")

    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")


    await  page1.waitForTimeout(2000)

    
})

test.only('Handle Multiple Pages', async()=>{

    const browser=await chromium.launch()

    const context=await browser.newContext()

    const page1=await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page1).toHaveTitle("OrangeHRM")

    await page1.waitForTimeout(3000)

    const pagePromise=context.waitForEvent('page')
    await page1.locator("//a[@href='http://www.orangehrm.com']").click()

    const newPage=await pagePromise;

    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")
    
    await newPage.waitForTimeout(3000)
})