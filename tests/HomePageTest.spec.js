const {test, expect}=require('@playwright/test')

test.describe.parallel('Home Page',async ({page}) =>{

    await page.goto("https://demoblaze.com/")

    const pageTitile= await page.title()

    console.log("The page title is :-"+pageTitile)

    await expect(page).toHaveTitle('STORE')

    const pageURL=await page.url()

    console.log("the url of the application is: "+pageURL)

    await expect(page).toHaveURL('https://demoblaze.com/')

    await page.close()
})