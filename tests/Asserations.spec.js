const{test,expect}=require('@playwright/test')

test('Asserations',async({page}) =>{

     await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

     await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

     await expect(page).toHaveTitle('nopCommerce demo store. Register')

     const element=await page.locator('.header-logo')

     await expect(element).toBeVisible()

     const searchBox=await page.locator('#small-searchterms')

    await expect(searchBox).toBeEnabled()

    // await page.click("//a[text()='Register']")

    const radioButton=await page.locator('#gender-male')

    await radioButton.click()
    
    await expect(radioButton).toBeChecked()

    const newLetter=await page.locator('#Newsletter')

    await expect(newLetter).toBeChecked()

    const regiterButton=await page.locator('#register-button')

    await expect(regiterButton).toHaveAttribute('type','submit')

    await expect(page.locator('.page-title h1')).toHaveText('Register')   // Complete Value

    await expect(page.locator('.page-title h1')).toContainText('Reg')     // Partial Value

    const emailInput=await page.locator('#Email')

    await emailInput.fill('test@gmail.com')

    await expect(emailInput).toHaveValue('test@gmail.com')

    const countNumber=await page.locator("select[name='DateOfBirthDay'] option")

    await expect(countNumber).toHaveCount(32)
})