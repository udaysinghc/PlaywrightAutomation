import {test} from "@playwright/test"

test("Scroll down", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.pause()

    console.log("Element is found")

   page.evaluate(()=>{
        // window.scrollBy(0,1000)
        const element=document.querySelector("#country")
        console.log("Element is found")                           // It will not print this line.
        if(element)
        {
            element.scrollIntoView()
            console.log("Element is found")                  
        }
    })



    await page.waitForTimeout(3000)
})