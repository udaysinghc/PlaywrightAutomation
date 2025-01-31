const{test,expect} =require ('@playwright/test')

test('Test 1', async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await expect(page).toHaveTitle("STORE")
})

test('Test 2', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM")
})

test('Test 3', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login?ReturnUrl=%2Fvendor%2Fapply")
    await expect(page).toHaveTitle("nopCommerce demo store. Login")
})