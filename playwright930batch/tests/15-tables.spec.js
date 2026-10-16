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

   const tableData = (await staticTable.locator('tr td').allTextContents()).map(text =>text.trim())

   expect(tableData).toContain('Learn Selenium')
   expect(tableData).not.toContain('dkljklds')

    //console.log(tableData)

    //get all data of table 
    // let table_data = await page.$$('[name="BookTable"] tr td ')
    // //console.log(table_data)
    // let table_data_text = []
    // for(let td of table_data ){
    //     const tdTxt = await td.textContent()
    //     table_data_text.push(tdTxt)
    // }
    // console.log(table_data_text)
    
})
test.only('verify pagination table in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pageTable = await page.locator('#productTable')

    const hCol = await pageTable.locator('thead th')
    console.log(`header columns = ${await hCol.count()}`)

    const drow = await pageTable.locator('tbody tr')
    console.log(`header columns = ${await drow.count()}`)

    const cell= await pageTable.locator('tbody tr td')
    console.log(`header columns = ${await cell.count()}`)

})