import { test, expect, chromium} from "@playwright/test"

test("launch browser and context",async()=>{
    const browser  = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://playwright.dev/docs/api/class-page")
    //const txt=page1.locator("article >div >header >h1").textContent()
    await expect(page1.locator("article >div >header >h1")).toHaveText('Page')


    await page2.goto('https://discord.com/servers/playwright-807756831384403968')
    let txt2 = await page2.locator('[class="title_RnlGwt"]').textContent()
    await expect(txt2).toBe('Wrong turn?')
    await page1.waitForTimeout(3000)
})


test.only("launch multiple tabs",async()=>{
    const browser  = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    
    await page1.goto("https://playwright.dev/docs/api/class-page")
    //const txt=page1.locator("article >div >header >h1").textContent()
    await expect(page1.locator("article >div >header >h1")).toHaveText('Page')

    const pagePromise = context.waitForEvent('page')
    await page1.locator('[aria-label="Discord server"]').click()

    const newPage = await pagePromise
    let txt2 = await newPage.locator('[class="title_RnlGwt"]').textContent()
    
    await expect(txt2).toBe('Wrong turn?')
    //await page1.waitForTimeout(3000)
})