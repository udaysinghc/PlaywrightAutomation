import {test, expect} from '@playwright/test'
import { constants } from 'buffer'


test('Multiple Element', async ({page})=>{

    await page.goto("https://demoblaze.com/")

    // const multipleLinks=await page.$$("//a")

    // for(const link of multipleLinks)
    // {
    //    const linkText=await link.textContent()
    //    console.log("The text of the link is:- "+linkText)
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")
    const multipleProduct=await page.$$("//div[@id='tbodyid']//div//h4//a")
    for(const product of multipleProduct)
    {
        const productText=await product.textContent()
        console.log("The product name:- " +productText)
    }
})