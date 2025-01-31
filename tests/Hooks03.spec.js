import{test,expect} from '@playwright/test'


let page;

test.beforeAll('login', async({browser})=>{

    const context=await browser.newContext()

    page=await context.newPage()

    await page.goto("https://www.demoblaze.com/")

    // Login to the application:-
    await page.click("#login2")
    await page.fill("#loginusername", "pavnol")
    await page.fill("#loginpassword","test@123")
    await page.click("//button[text()='Log in']")

})

test.afterAll('logout', async()=>{

    await page.click("#logout2")

})


test('Home Page Login', async()=>{


    // Home Page Of the Application
    await page.waitForSelector("[class='hrefch']")
    const allProduct=await page.$$("[class='hrefch']")

    console.log(allProduct.length)

  
})

test('Add The Product to cart', async()=>{
    
     await page.waitForSelector("[class='hrefch']")

        // Add Product
    await page.locator("//a[text()='Samsung galaxy s6']").click()
    await page.click("//a[text()='Add to cart']")

    page.on('dialog', async dialog=>{

        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})