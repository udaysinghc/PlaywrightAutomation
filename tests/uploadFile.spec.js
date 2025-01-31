import{test,expect} from '@playwright/test'

test('Single file', async({page})=>{
    await page.goto('https://www.foundit.in/upload')


    await page.waitForSelector("[class*='heroSection-buttonContainer_secondaryBtn__te']")
    await page.locator("[class*='heroSection-buttonContainer_secondaryBtn__te']").click()

    await page.waitForSelector("#file-upload")
    // await page.locator("#file-upload").click()
    await page.locator("#file-upload").setInputFiles('./UploadDir/RecruitBot Profile - Ajay Ahuja.pdf')

    await page.waitForTimeout(5000)

})