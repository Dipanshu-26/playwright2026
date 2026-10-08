import { test, expect } from "@playwright/test"


test.skip("verify simple alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    await page.locator('#alertBtn').click()
    await page.waitForTimeout(3000)

})

test.skip("verify confirm alert - 1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await page.waitForTimeout(3000)
        await dialog.accept()
    })
    await page.locator('#confirmBtn').click()
    await page.waitForTimeout(3000)

})

test.skip("verify confirm alert - 2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await page.waitForTimeout(3000)
        await dialog.dismiss()
    })
    await page.locator('#confirmBtn').click()
    await page.waitForTimeout(3000)

})

test("verify prompt alert - 1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain('Harry Potter')
        //await page.waitForTimeout(3000)
        await dialog.accept("dipanshu") 
        
    })
    await page.locator('#promptBtn').click()
    await expect(page.locator("#demo")).toHaveText('Hello dipanshu! How are you today?')
    await page.waitForTimeout(3000)

})


test("verify prompt alert - 2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(3000)
        await dialog.dismiss()
        
    })
    await page.locator('#promptBtn').click()
    await expect(page.locator("#demo")).toHaveText('User cancelled the prompt.')
    await page.waitForTimeout(3000)
})