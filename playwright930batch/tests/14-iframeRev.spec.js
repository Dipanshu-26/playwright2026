import { test, expect } from "@playwright/test"



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
    let frame2 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_2' })
    await frame2.locator('[name="mytext2"]').fill('Tanish')


    //getting child frames
    let frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' })

    const childFrames3 = await frame3.childFrames()
    console.log(`child frames = ${childFrames3.length}`)
    const childF3 = await childFrames3[0]
    //await childF3.click('[aria-describedby="wSDd7b"]')
    await childF3.locator('[id="i6"]').click()

    await page.waitForTimeout(2000)

    await childF3.locator('[id="i9"]').click()
    await page.waitForTimeout(2000)

})