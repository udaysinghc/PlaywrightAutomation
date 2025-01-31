import{test,expect} from '@playwright/test'

test('Shadow root', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const Shadow=page.locator('div#shadow_host')

    const mobile=Shadow.locator('#shadow_content span')

    const mobiletext=await mobile.textContent()

    const textField=Shadow.locator("input[type='text']")

    await textField.fill("Sumit Sahu")

    await page.waitForTimeout(5000)
    console.log(mobiletext)

})