import{test,expect} from '@playwright/test'

test('Keyboard Action', async({page})=>{
    
    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill("Welcome to playwright autmation!")

    // We have to perform these keyboard actions-

    // Ctrl+a
    await page.keyboard.press('Control+A')

    // Ctrl+c
    await page.keyboard.press('Control+C')

    // Tab
    await page.keyboard.down('Tab')  //Pressing the tab Key
    await page.keyboard.up('Tab')    //Releasing the tab key

    // ctrl+v
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)

})