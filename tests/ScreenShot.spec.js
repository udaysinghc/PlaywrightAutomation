import{test,expect} from '@playwright/test'

test('Page Screen Shot', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    await page.screenshot({path:"tests/ScreenShot/"+Date.now()+"LoginPage.png"})

})

test('Full page Screen Shot', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    await page.screenshot({path:"tests/ScreenShot/"+Date.now()+"fullpage.png", fullPage:true})
})

test('Element screenshot', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    
    await page.waitForTimeout(5000)
    await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4'])[1]").screenshot({path:"tests/ScreenShot/"+Date.now()+"Samsung.png"})

})