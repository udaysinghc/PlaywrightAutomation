import{test,expect} from '@playwright/test'

test('handle Date', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // fill the date :-
    // await page.fill("#datepicker", "12/03/2024")

    // await page.waitForTimeout(5000)

    // With the help of loop fill the date:-
    const year="2025"
    const month="March"
    const date="20"

    await page.click("#datepicker")

    while(true)
    {
        const currentYear=await page.locator(".ui-datepicker-year").textContent()
        const currentMonth=await page.locator(".ui-datepicker-month").textContent()

        if(currentYear==year && currentMonth==month)
            {
                break;

            } 

        await page.locator("[title='Next']").click()      
    }

    await page.waitForTimeout(3000)

    const dates=await page.$$("a.ui-state-default")

    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==date)
    //     {
    //         await dt.click()
    //         break;
    //     }
    // }

    await page.locator(`//a[@class='ui-state-default'] [text()='${date}']`).click()

    await page.waitForTimeout(3000)



})