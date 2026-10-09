import { test, expect } from "@playwright/test"


test("verify iframe in playwright", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //get total number of iframes 
    let frameCount = await page.frames()
    console.log(frameCount.length)
    //console.log(frameCount)

    //type 1 
    //await page.locator('[name="mytext1"]').fill("dipanshu")    --will give error

    //frame 1 
    let frameOne = await page.frameLocator('frame[src="frame_1.html"]')
    await frameOne.locator('[name="mytext1"]').fill("dipanshu")


    //type 2 and frame 2 
    let frameTwoInputBox = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]')
    await frameTwoInputBox.fill("Tanish")
    
    //type 3 
    //get by url 
    const frameThree = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3'})

    //await frameThree.locator('[name="mytext3"]').fill("Neel")
    await frameThree.fill('[name="mytext3"]', "Neel")

    //getting child frames
    await page.waitForTimeout(2000)

}) 