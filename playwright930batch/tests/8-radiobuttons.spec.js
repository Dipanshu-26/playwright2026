import {test, expect} from "@playwright/test"


test("verify radio buttons",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let r1 = await page.locator('[value="radio1"]')
    let r2 = await page.locator('[value="radio2"]')
    let r3 = await page.locator('[value="radio3"]')
    
    await expect(r1).not.toBeChecked()
    await expect(r2).not.toBeChecked()
    await expect(r3).not.toBeChecked()

    await r1.check()
    await expect(r1).toBeChecked()
    await expect(r2).not.toBeChecked()
    await expect(r3).not.toBeChecked()

    await page.waitForTimeout(2000)

    await r2.check()
    await expect(r2).toBeChecked()
    await expect(r1).not.toBeChecked()
    await expect(r3).not.toBeChecked()

    await page.waitForTimeout(2000)

    //write for r3

})