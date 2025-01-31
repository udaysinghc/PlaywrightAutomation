import{test, expect} from '@playwright/test'

test('SoftAsseration',async ({page}) =>{

    // Hard Assertions:
    // await page.goto("https://www.demoblaze.com/index.html")
    // await expect(page).toHaveTitle('STORE123')
    // await expect((page).locator('.navbar-brand')).toBeVisible()

    // Soft Assertions:
    await page.goto("https://www.demoblaze.com/index.html")
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft((page).locator('.navbar-brand')).toBeVisible()

})