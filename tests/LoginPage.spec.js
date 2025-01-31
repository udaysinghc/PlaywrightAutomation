import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
const testdata=JSON.parse(JSON.stringify(require('../testData/data.json')))


test('login', async({page})=>{

    const urlOFApplication=testdata.BaseURL
    console.log("The URL is:- ",urlOFApplication)
    const login=new LoginPage(page)
    await login.goToLoginPage(urlOFApplication)
    await login.loginToApplication(testdata.username,testdata.password)
    await page.waitForTimeout(3000)
})