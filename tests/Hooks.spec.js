import{test,expect} from '@playwright/test'

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

test('Add The Product to cart', async({page})=>{
    
        //  Login into the application
        await page.goto("https://www.demoblaze.com/")

        await page.click("#login2")
    
        await page.fill("#loginusername", "pavnol")
    
        await page.fill("#loginpassword","test@123")
    
        await page.click("//button[text()='Log in']")

        await page.waitForSelector("[class='hrefch']")

        // Add Product
        await page.locator("//a[text()='Samsung galaxy s6']").click()
        await page.click("//a[text()='Add to cart']")

        page.on('dialog', async dialog=>{

            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
        })

          // Logout from the application
        await page.click("#logout2")
})