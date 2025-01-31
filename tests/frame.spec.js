import{test,expect} from '@playwright/test'

test('Handle frame', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    // Find Total Number of Frames:-
    const allFrames=await page.frames()  //with the help of frames method we can find total number of frames in the page.
    console.log("Number of frames is :-"+allFrames.length)

    // approch 1:- Using Name or Url
    // const frame1=page.frame('name attribute value') //If name is present in frame tag we can using name attribute value as well
    // const frame1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})  //using URL.
    // await frame1.fill('[name="mytext1"]','Hello')

    // approch 2:- Using Frame locator
    const frameloc=page.frameLocator("frame[src='frame_1.html']") //return the frame locator
    let inputfiled=frameloc.locator("[name='mytext1']")
    await inputfiled.fill("Hello")
})