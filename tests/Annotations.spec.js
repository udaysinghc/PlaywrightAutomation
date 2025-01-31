import{test,expect} from '@playwright/test'

// only-If we provide this annotation it will run only this test case.
/*
test.only('Test 1', async({page})=>{

    console.log("Test 1 is running..")
})
*/

// test('Test 2', async({page})=>{

//     console.log("Test 2 is running..")
// })

// skip- With the help of this annotation we can skip the particular test case.
// test.skip('Test 3', async({page})=>{

//     console.log("Test 3 is running..")
// })

// test('Test 3', async({page, browserName})=>{

//     if(browserName==="chromium")
//     {
//         test.skip()
//     }
// })

// fixme-This work same as skip test case
// test('Test 4', async({page})=>{

//     test.fixme()
//     console.log("Test 4 is running..")
// })

// Fail
/*
test('Test 5', async({page})=>{
    test.fail()  //Expecting.. expection
    console.log("Test 5 is running.")
    expect(1).toBe(2)  //actual // If both exp and actual is fail the test case is pass.
})
*/
// test('Test 6', async({page,browserName})=>{
    
//     if(browserName==="chromium")
//     {
//         test.fail()
//     }
//     console.log("Test 6 is runnong")
// })

// slow- marks the test as slow and triples the test timeout.

// test('Test 7', async({page})=>{

//     test.slow();
//     await page.goto("https://www.demoblaze.com/")
// })
