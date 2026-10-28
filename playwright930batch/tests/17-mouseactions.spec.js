const { test, expect } = require('@playwright/test')
//dbclick
//right click
//click
//grag n drop
//click n hold 
//mouse hover


test('Mouse actions in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    //dbclick

    await page.locator('#doubleClickBtn').dblclick()

    //await page.dblclick('#doubleClickBtn')
    await page.waitForTimeout(3000)

    let dbText=await page.locator('#doubleClickMessage').textContent()
    await expect(dbText).toBe('You have done a double click')

    let dbText2=await page.locator('#doubleClickMessage')
    await expect(dbText2).toHaveText('You have done a double click')

    //right click

})