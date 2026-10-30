const { test, expect } = require('@playwright/test')

test('verify static table in playwright', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare#diff')
    await page.locator('[name="text1"]').fill("i am learning playwright")
    //ctrl+A
    await page.keyboard.press('Control+A')

    //control +c 
    await page.keyboard.press('Control+C')

    //press tab
    
    await page.keyboard.press('Tab')

    //control +V
    await page.keyboard.press('Control+V')

    let text2=await page.locator('[name="text2"]').textContent()
    console.log(`text=${text2}`)
    //await expect(text2).toBe('i am learning playwright')

    await page.waitForTimeout(3000)
})