import{test, expect} from '@playwright/test'

test('Auto Suggestion', async({page})=>{

    await page.goto("https://www.redbus.in/?gad_source=1&gclid=EAIaIQobChMIys_1lpP5iQMVIW0PAh13vQMyEAAYASAAEgLkvfD_BwE")

    await page.locator("#src").fill("Bhopal")

    await page.waitForSelector("//div[@class='sc-gZMcBi hviMLb']/text[@class='placeHolderMainText']")

    const options=await page.$$("//div[@class='sc-gZMcBi hviMLb']/text[@class='placeHolderMainText']")

    for(let val of options)
    {
        let text=await val.textContent()
        // console.log(text)
        if(text.includes("Ayodhya Bypass"))
        {
            await val.click()
            break;
        }
    }

    await page.locator("#dest").fill("indore")

    await page.waitForSelector("//div[@class='sc-gZMcBi hviMLb']/text[@class='placeHolderMainText']")

    const options2=await page.$$("//div[@class='sc-gZMcBi hviMLb']/text[@class='placeHolderMainText']")

    for(let val of options2)
    {
        let text=await val.textContent()
        if(text.includes("Chhotigwaltoli"))
        {
            await val.click()
            break
        }
    }
    await page.waitForTimeout(5000)

})
