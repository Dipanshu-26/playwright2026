const { test, expect } = require('@playwright/test')

test('verify static table in playwright', async ({ page }) => {

    let todayDate = new Date()    //Fri Oct 23 2026 21:45:56 GMT+0530 (India Standard Time)
    console.log(`todays date = ${todayDate}`)

    let tdate = todayDate.getDate()
    console.log(`todays date only = ${tdate}`)

    let tmonth = todayDate.getMonth()
    console.log(`todays month number = ${tmonth + 1}`)

    let monthShort = todayDate.toLocaleDateString('default', { month: 'short' })
    console.log(`todays month short = ${monthShort}`)

    let monthLong = todayDate.toLocaleDateString('default', { month: 'long' })
    console.log(`todays month short = ${monthLong}`)

    let tyear = todayDate.getFullYear()
    console.log(`todays full year = ${tyear}`)

    //find future date 
    //let todayDate = new Date() 

    //     let futureDate = new Date(todayDate)
    //     futureDate.setDate(futureDate.getDate() + 90)
    //     console.log(`future date = ${futureDate}`)

    let futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + 90)
    console.log(`future date = ${futureDate}`)

    let fdate = futureDate.getDate()
    console.log(`future date only = ${fdate}`)

    let fmonth = futureDate.getMonth()
    console.log(`future month number = ${fmonth + 1}`)

    let fmonthShort = futureDate.toLocaleDateString('default', { month: 'short' })
    console.log(`future  month short = ${fmonthShort}`)

    let fmonthLong = futureDate.toLocaleDateString('default', { month: 'long' })
    console.log(`future month short = ${fmonthLong}`)

    let fyear = futureDate.getFullYear()
    console.log(`future full year = ${fyear}`)


    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('input#datepicker').click()

    //select month and year
    while (true) {
        let currentMonth = await page.locator('.ui-datepicker-month').textContent()
        let currentyear = await page.locator('.ui-datepicker-year').textContent()

        if (currentMonth == fmonthLong && currentyear == fyear) {
            break;
        }
        //.ui-icon-circle-triangle-e
        await page.locator('.ui-datepicker-header a.ui-datepicker-next').click()
    }
    //select date
    let dates = await page.$$('[data-handler="selectDay"] a')

    for (let dt of dates) {
        //console.log(await dt.textContent())
        if (await dt.textContent() == fdate) {
            await dt.click()
            break;
        }
    }
    await page.waitForTimeout(3000)

})