import{test,expect} from '@playwright/test'

test.skip('Alert with Ok', async({page}) =>{

   await page.goto("https://testautomationpractice.blogspot.com/")

//    Enabling the dialogs  //Enable the dialogs window handler
   page.on('dialog', async dialog=>{

    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
   })

   await page.locator("//button[text()='Simple Alert']").click()

   await page.waitForTimeout(5000)
})

test.skip('Confirmation Alert with Ok and cancel button', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")
 
 //    Enabling the dialogs  //Enable the dialogs window handler
    page.on('dialog', async dialog=>{
 
     expect(dialog.type()).toContain('confirm')
     expect(dialog.message()).toContain('Press a button!')
    //  await dialog.accept()  //Click on the ok button
     await dialog.dismiss() //click on the cancel button
    })
 
    await page.locator("//button[text()='Confirmation Alert']").click()

    // await expect(await page.locator("#demo")).toHaveText("You pressed OK!")
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")
 
    await page.waitForTimeout(5000)

    await page.pause()
 })

 test('Prompt Alert with Ok, cancel button and text field', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")
 
 //    Enabling the dialogs  //Enable the dialogs window handler
    page.on('dialog', async dialog=>{
 
     expect(dialog.type()).toContain('prompt')
     expect(dialog.message()).toContain('Please enter your name:')
     expect(dialog.defaultValue()).toContain("Harry Potter")
     await dialog.accept("Amit Sharma")  //Click on the ok button
    //  await dialog.dismiss() //click on the cancel button
    })
 
    await page.locator("//button[text()='Prompt Alert']").click()

    await expect(page.locator("#demo")).toHaveText("Hello Amit Sharma! How are you today?")
    // await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt.")
 
    await page.waitForTimeout(3000)
 })