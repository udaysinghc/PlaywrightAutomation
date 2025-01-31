const{test,expect}=require('@playwright/test')

test('Dynamic DropDown', async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    await page.waitForSelector("//span[text()='PIM']")

    await page.locator("//span[text()='PIM']").click()

    await page.waitForSelector("//label[.='Sub Unit']/ancestor::div[contains(@class,'oxd-grid-item')]/descendant::div[contains(@class,'oxd-select-text-i')]")

    await page.locator("//label[.='Sub Unit']/ancestor::div[contains(@class,'oxd-grid-item')]/descendant::div[contains(@class,'oxd-select-text-i')]").click()

    await page.waitForSelector("//div[@role='listbox']/descendant::span")

    const allOptions=await page.$$("//div[@role='listbox']/descendant::span")

    for(let val of allOptions)
    {
        let text=await val.textContent()
        console.log(text)

        if(text.includes("Technical Support"))
        {
            await val.click()
            break
        }
    }

    await page.waitForTimeout(2000)
})