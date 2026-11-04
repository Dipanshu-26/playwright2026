const { test, expect } = require('@playwright/test')


// Playwright Hooks

// beforeEach: This hook is executed before each individual test.
// afterEach: This hook is executed after each individual test.

// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all the tests have been run.
//need to set fullyParallel: false, in playwright.config.js

let page

test.beforeAll(async ({ browser }) => {
    await console.log("i am in before all executed only once")
    page = await browser.newPage()
})

test.afterAll(async () => {
    await console.log("i m in after all executed only once at last")
})

test.beforeEach(async () => {
    await console.log("i will execute before each test case")
})

test.afterEach(async () => {
    await console.log("i will execute after each test case")

})

test("test case 1", async () => {
    console.log("i am test case 1")
})

test("test case 2", async () => {
    console.log("i am test case 2")
})

test("test case 3", async () => {
    console.log("i am test case 3")
})