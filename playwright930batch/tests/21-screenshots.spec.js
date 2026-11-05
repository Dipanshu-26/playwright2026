const { test, expect } = require('@playwright/test')

test("Capture screenshots in playwright", async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: "screenshots/" + "homepage.png" })
})

test("Capture screenshots in playwright-2", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: "screenshots/" + Date.now() + "homepage.png" })
})    

test("Capture screenshots in playwright-3", async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
    await page.screenshot({path:"screenshots/" + Date.now()+"homepage.png",fullPage:true})
    console.log(Date.now())
    })