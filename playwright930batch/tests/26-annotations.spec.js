// test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
// test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
// test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
// test.slow() marks the test as slow and triples the test timeout.


import {test , expect} from "@playwright/test"

// //skip
// test.skip("skip this test",async({page})=>{
//     console.log("skip this test")
// })

// test("do not skip this test",async({page})=>{
//     console.log("do not skip this test")
// })

// test("skip this test - 2",async({page, browserName})=>{
//     console.log("this test before skip-2")
//     // if(browserName==='firefox'){
//     //     test.skip()
//     // }
//     test.skip(browserName==='firefox',"not suitable for firefox")
//     console.log("this test after skip-2")

// })

// //fixme()

// test("fixme test",async({page, browserName})=>{
//     console.log("before fixme ")
//     if(browserName==='firefox'){
//         test.fixme()
//     }
   
//     console.log("after fixme")

// })

// test.fixme("fixme test 2",async({page, browserName})=>{
//     console.log(" fixme test 2 ")
// })

// //fail()

// //exp ==> fail and test case fail ==> exp == actual ===> result pass
// //exp ==>fail and test case pass ===> exp != actual ===> result fail

// // test("fail test",async({page})=>{
// //     console.log('in fail before')
// //     test.fail()     //expected    fail but test case will pass so result will be error (fail)
// //     console.log(" fixme test 2 ")
// // })


// test("fail test 2",async({page})=>{
//     console.log('in fail before')
//     test.fail()     //expected    fail 
//     expect(2).toBe(1)        //actual  fail 
//     console.log(" in fail after")
// })

//test.slow()
test("slow text",async({page})=>{
    test.slow()
    await page.goto("https://www.flipkart.com/")
})
// timeout: 2000, do this setting in config.js after use{}
