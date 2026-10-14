const { test, expect} = require('@playwright/test')

test('verify static table in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    let staticTable = await page.locator('[name="BookTable"]')

    const tableHeaderColumns = await staticTable.locator('tbody tr th')
    console.log(`table headers = ${await tableHeaderColumns.count()}`)

    const tableRows = await staticTable.locator('tbody tr')
    console.log(`table headers = ${await tableRows.count()}`)

    expect(await tableHeaderColumns.count()).toBe(4)
    expect(await tableRows.count()).toBe(7)

    //verify any value present in table -function
})