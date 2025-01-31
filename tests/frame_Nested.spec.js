const{test,expect}=require('@playwright/test')

test('handle Nested Frame', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill('[name="mytext3"]','sumit')

    // Nested Frames:-
    const childFrame=frame3.childFrames()  //It will give the list of all child frames
    await childFrame[0].locator("//div[@id='i6']/div/div").check()

    await page.waitForTimeout(5000)
})