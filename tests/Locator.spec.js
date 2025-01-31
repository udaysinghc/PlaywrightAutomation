import {test,except, expect} from '@playwright/test'

test('locator',async ({page}) =>{

    await page.goto("https://demoblaze.com/")

    //  Click on login button -- property
    // await page.locator('id=login2').click()
    await page.click('id=login2')

    // Provide fill username --css 
    // await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername','Pavanol')
    // await page.type('#loginusername','Pavanol')

    // Provide fill password --css
    await page.fill("[id='loginpassword']", "test@123")

    // Click on login button --Xpath
    await page.click("//button[text()='Log in']")

    const logoutLink=await page.locator("//a[text()='Log out']")

    await expect(logoutLink).toBeVisible()


})