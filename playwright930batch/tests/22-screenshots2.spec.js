import {test , expect} from "@playwright/test"


test("TC001-valid login test",async({page})=>{
    //AAA
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.waitForTimeout(3000)
    await page.locator('button[type="submit"]').click()

    let txt = await page.locator('h6.oxd-text').textContent()

    await expect(txt).toBe("Dashboard")

    await page.waitForTimeout(3000)
})


//do setting in playwright.config.js
// use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     screenshot : 'only-on-failure'
//   },