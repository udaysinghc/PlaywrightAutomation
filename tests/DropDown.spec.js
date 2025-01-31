import{test,expect} from '@playwright/test'

test('handle dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("#country").click()

    //  Multiple ways of Selecting the value form dropdown:-
    // await page.locator("#country").selectOption({label:"India"}) // label//visbile text
    // await page.locator("#country").selectOption("India")   //visible text
    // await page.locator("#country").selectOption({value:"uk"})   //value
    // await page.locator("#country").selectOption({index:5})  //index

    // await page.selectOption("#country","uk")   //text

    //  Assertions:-
    // 1) validate the number of options in the dropdown:-
    // await expect(page.locator("#country option")).toHaveCount(10)

    // 2) check the number of options in the dropdown
    // const options=await page.$$("#country option")
    // console.log(options.length)
    // expect(options.length).toBe(10)

    // Check the presence of element in dropdown:-
    // const listOfValues=await page.locator("#country").textContent() // list of array values.
    // expect(listOfValues.includes("India")).toBeTruthy()
    // expect(listOfValues.includes("dsjsd")).toBeFalsy()

    // Print all the value in dropdown:-

    // const options=await page.$$("#country option")
    // let status=false
    // for(const val of options)
    // {
    //     let value=await val.textContent()
    //     if(value.includes("Japan"))
    //     {
    //         status=true
    //         break
    //     }
    //     console.log(await val.textContent())
    // }


    // Select options from dropdown with the help of loops:-
    

})