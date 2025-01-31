import {test,expect} from '@playwright/test'

test('Test 1', async()=>{

    console.log("Test 1 is running...")
})

test('Test 2@reg', async()=>{

    console.log("Test 2 is running...")
})

test('Test 3@reg', async()=>{

    console.log("Test 3 is running...")
})

test('Test 4@sanity', async()=>{

    console.log("Test 4 is running...")
})

test('Test 5@reg@sanity', async()=>{

    console.log("Test 5 is running...")
})

test('Test 6',{tag:'@smoke'},async()=>{
    console.log("Test 6 is running...")
})


/*
-You can now run tests that have a particular tag with --grep command line option.
-Command use for run reg test case:-
npx playwright test Tags.spec.js --project=chromium --grep  "@reg"

-Command use for run sanity test case:-
npx playwright test Tags.spec.js --project=chromium --grep  "@sanity"

-Command use for run sanity but excluded reg test case:-
 npx playwright test Tags.spec.js --project=chromium --grep  "@smoke" --grep-invert "@reg"
*/