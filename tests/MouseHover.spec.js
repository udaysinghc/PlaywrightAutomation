import{test,expect} from '@playwright/test'
import { sign } from 'crypto'

test.skip('Mouse Hover', async({page})=>{
    await page.goto('https://www.amazon.in/')

    const account=page.locator("#nav-link-accountList")
    const signIn=page.locator("[id='nav-flyout-ya-signin'] span")

    await account.hover()
    await signIn.hover()

    await page.waitForTimeout(2000)
})

test.skip('Right Click', async({page}) =>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const button=page.locator("//span[text()='right click me']")

    // Right Click Action
    await button.click({button:'right'})

    await page.waitForTimeout(5000)
})

test.skip('Double Click', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Double Click Action
    const button=page.locator("//button[text()='Copy Text']")

    await button.dblclick()

    const field =page.locator("#field2")

   await expect(field).toHaveValue("Hello World!")

   await page.waitForTimeout(5000)

})

test('Drag and Drop', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")


    const source=await page.locator("#draggable p")

    const dest=await page.locator("#droppable p")

    // Approach 1:-
    // await source.hover()
    // await page.mouse.down()

    // await dest.hover()
    // await page.mouse.up()

    // Approach 2:-
    await source.dragTo(dest)
    
    await page.waitForTimeout(5000)
})