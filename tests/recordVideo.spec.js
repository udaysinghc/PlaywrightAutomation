import{test,expect} from '@playwright/test'
import exp from 'constants'

test('Home Page Login', async({page})=>{

    //  Login into the application
    await page.goto("https://www.demoblaze.com/")

    await page.click("#login2")

    await page.fill("#loginusername", "pavnol")

    await page.fill("#loginpassword","test@123")

    await page.click("//button[text()='Log in']")

    // Home Page Of the Application
    await page.waitForSelector("[class='hrefch']")
    const allProduct=await page.$$("[class='hrefch']")

    console.log(allProduct.length)

    expect(allProduct.length).toBe(9)
    // Logout from the application
    await page.click("#logout2")
})

