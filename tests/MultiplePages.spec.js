import {test,expect} from '@playwright/test'

test('Handle Multiple Pages', async({browser})=>{

    const context=await browser.newContext()

    const page=await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage]=await Promise.all(
        [
             context.waitForEvent("page"),

             page.click("(//a[contains(@href,'facebook')])[1]"),


        ]
    )

    await newPage.waitForTimeout(3000)
    await newPage.locator("//span[text()='Email address or phone number']").fill("sumit@facebook.com")
    await newPage.waitForTimeout(5000)

    await newPage.close()

    await page.fill("#email1","sahu@facebook.com")

    await page.waitForTimeout(3000)

})

test.only('Handle Pages', async({browser})=>{

    const context=await browser.newContext()

    const page=await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const promise=context.waitForEvent("page")
    await page.click("(//a[contains(@href,'facebook')])[1]")

    const page1=await promise

    const promise2=context.waitForEvent("page")
    await page1.locator("(//a[@href='https://www.facebook.com/recover/initiate?ars=royal_blue_bar'])[2]").click()

    const page2=await promise2
    page2.locator("#identify_email").fill("sumit@Facebook.com")

    await page2.waitForTimeout(3000)
})
