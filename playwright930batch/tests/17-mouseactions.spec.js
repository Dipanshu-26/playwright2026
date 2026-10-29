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
    await page.locator('#rightClickBtn').click({button:"right"})

    let rclickTxt=await page.locator('#rightClickMessage').textContent()
    await expect(rclickTxt).toBe('You have done a right click')

    let rclick=await page.locator('#rightClickMessage')
    await expect(rclick).toHaveText('You have done a right click')

})

test('Mouse actions-2 in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')

    await page.locator('.dropbtn').first().hover()
    expect(await page.getByText('Link 1').nth(0)).toBeVisible()

    await page.waitForTimeout(3000)

    //Hover Over Me Second!
    //Hover Over Me Third!
})

test.only('Mouse actions-3 drag n drop in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')
    let takeme = await page.locator('#draggable p')
    let dropHere = await page.locator('#droppable p')

    await takeme.dragTo(dropHere)

    let dropedMsg=await page.locator('#droppable p').textContent()

    await expect(dropedMsg).toBe('Dropped!')
    await page.waitForTimeout(5000)

})

