import{test,expect} from '@playwright/test'

test.beforeAll(async ()=>{

    console.log("Before All is executed")
})

test.afterAll(async ()=>{
    console.log("After all is executed")
})

test.beforeEach(async ()=>{
    console.log("Before each is executed")
})

test.afterEach(async()=>{
    console.log("After each is executed")
})

test.describe('Group 1',()=>{

    test('Test 1', async()=>{
        console.log("This is test 1")
    })
    
    test('Test 2', async()=>{
        console.log("This is test 2")
    })
})


test.describe('Group 2', ()=>{

    test('Test 3', async()=>{
        console.log("This is test 3")
    })
    
    test('Test 4', async()=>{
        console.log("This is test 4")
    })
})
