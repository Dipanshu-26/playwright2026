import {test , expect} from "@playwright/test"


test("test1@reg",async({page})=>{
    console.log("i am test 1...")
})

test("test2",async({page})=>{
    console.log("i am test 2...")
})

test("test3@reg",async({page})=>{
    console.log("i am test 3...")
})

test("test4@reg@sanity",async({page})=>{
    console.log("i am test 4...")
})

test("test5@sanity",async({page})=>{
    console.log("i am test 5...")
})

test("test6@sanity",async({page})=>{
    console.log("i am test 6...")
})

test("test7@reg@sanity",async({page})=>{
    console.log("i am test 7...")
})

// npx playwright test tests/25-tags.spec.js --grep "@reg"
// npx playwright test tests/25-tags.spec.js --grep "@reg@sanity"
// npx playwright test tests/25-tags.spec.js --grep "@sanity"
//npx playwright test tests/25-tags.spec.js --grep "@reg" --grep-invert "@sanity"