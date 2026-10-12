import { test, expect } from "@playwright/test"
import { connect } from "node:http2"


test("verify iframe in playwright rev", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //get total number of iframes 
    let frameCount = await page.frames()
    console.log(`frames count = ${frameCount.length}`)

    //type 1
    //await page.locator('[name="mytext1"]').fill('dipanshu')
    //await page.fill('[name="mytext1"]','Tanish')

    const textBox1 = await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]')
    await textBox1.fill('Dipanshu')

    //type2

    const frame1 = await page.frameLocator('[src="frame_1.html"]')
    await frame1.locator('[name="mytext1"]').fill('Neel')

    //type3
    //get by url
    let frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'})
    await frame2.locator('[name="mytext2"]').fill('Tanish')


    await page.waitForTimeout(2000)
})