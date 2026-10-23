const { test, expect, selectors } = require('@playwright/test')

test('verify static table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let staticTable = await page.locator('[name="BookTable"]')

    const tableHeaderColumns = await staticTable.locator('tbody tr th')
    console.log(`table headers = ${await tableHeaderColumns.count()}`)

    const tableRows = await staticTable.locator('tbody tr')
    console.log(`table headers = ${await tableRows.count()}`)

    expect(await tableHeaderColumns.count()).toBe(4)
    expect(await tableRows.count()).toBe(7)

    //verify any value present in table -function

    const tableData = (await staticTable.locator('tr td').allTextContents()).map(text => text.trim())

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
test('verify pagination table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pageTable = await page.locator('#productTable')

    const hCol = await pageTable.locator('thead th')
    console.log(`header columns = ${await hCol.count()}`)

    const drow = await pageTable.locator('tbody tr')
    console.log(`data rows count  = ${await drow.count()}`)

    const cell = await pageTable.locator('tbody tr td')
    console.log(`cell = ${await cell.count()}`)

    async function selectProduct(page, drow, product) {
        let matchedRow = drow.filter({
            has: page.locator('td'),
            hasText: product
        })
        matchedRow.locator('input').click()
    }
    await selectProduct(page, drow, 'Smartwatch')
    await selectProduct(page, drow, 'Wireless Earbuds')
    await selectProduct(page, drow, 'Tablet')
    await page.waitForTimeout(5000)
})

test.only('verify and print all productfrom pagination table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pageTable = await page.locator('#productTable')

    const columns = await pageTable.locator('thead th')
    console.log(`no of columns = ${await columns.count()}`)

    const rows = await pageTable.locator('tbody tr')
    console.log(`total no of rows = ${await rows.count()}`)

    const cell = await pageTable.locator('tbody tr td')
    console.log(`cell = ${await cell.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //print products from one page

    // for(let i=0;i<await rows.count();i++){
    //     const currentRow=rows.nth(i)
    //     const tdInRow = await currentRow.locator('td')
    //     for(let j=0;j<await tdInRow.count();j++){
    //         console.log(await tdInRow.nth(j).textContent())
    //     }
    // }
    //---------------------------------------------------------------------------------------------------
    // for(let i=0;i<await rows.count(); i++){
    //     const currentRow =  await rows.nth(i)
    //     const tdInRow =  await currentRow.locator('td')
    //     for(let j=0;j<await tdInRow.count()-1;j++){             //0,1,2,3 for(i=0;i<4-1(3-1);i++)
    //         console.log(await tdInRow.nth(j).textContent())
    //     }
    // }

    //click on perticular product of any page

    const pages = await page.locator('#pagination li a')

    paginationLoop : for (let i = 0; i < await pages.count(); i++) {
        if (i > 0) {
            await pages.nth(i).click()
            //await page.waitForTimeout(3000)
        }
        for (let i = 0; i < await rows.count(); i++) {
            const currentRow = await rows.nth(i)
            const tdInRow = await currentRow.locator('td')
            for (let j = 0; j < await tdInRow.count() - 1; j++) {             //0,1,2,3 for(i=0;i<4-1(3-1);i++)
                //console.log(await tdInRow.nth(j).textContent())
                let txt = await tdInRow.nth(j).textContent()
                if(txt == 'Action Camera'){
                    currentRow.locator('input').click()
                    await page.waitForTimeout(3000)
                    break paginationLoop;
                }
            }
        }
        await page.waitForTimeout(3000)
    }




})


