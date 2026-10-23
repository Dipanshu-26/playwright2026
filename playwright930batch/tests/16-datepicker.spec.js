const { test, expect } = require('@playwright/test')

test('verify static table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let todayDate = new Date()    //Fri Oct 23 2026 21:45:56 GMT+0530 (India Standard Time)
    console.log(`todays date = ${todayDate}`)

    let tdate = todayDate.getDate() 
    console.log(`todays date only = ${tdate}`)

    let tmonth = todayDate.getMonth() 
    console.log(`todays month number = ${tmonth+1}`)

    let monthShort = todayDate.toLocaleDateString('default',{month:'short'})
    console.log(`todays month short = ${monthShort}`)

    let monthLong = todayDate.toLocaleDateString('default',{month:'long'})
    console.log(`todays month short = ${monthLong}`)

    let tyear=todayDate.getFullYear()
    console.log(`todays full year = ${tyear}`)

    //find future date 
    //let todayDate = new Date() 

//     let futureDate = new Date(todayDate)
//     futureDate.setDate(futureDate.getDate() + 90)
//     console.log(`future date = ${futureDate}`)

    let futureDate = new Date()
    futureDate.setDate(futureDate.getDate()+90)
    console.log(`future date = ${futureDate}`)

    let fdate = futureDate.getDate() 
    console.log(`todays date only = ${fdate}`)

    let fmonth = futureDate.getMonth() 
    console.log(`todays month number = ${fmonth + 1}`)

    let fmonthShort = futureDate.toLocaleDateString('default',{month:'short'})
    console.log(`todays month short = ${fmonthShort}`)

    let fmonthLong = futureDate.toLocaleDateString('default',{month:'long'})
    console.log(`todays month short = ${fmonthLong}`)

    let fyear=futureDate.getFullYear()
    console.log(`todays full year = ${fyear}`)


})