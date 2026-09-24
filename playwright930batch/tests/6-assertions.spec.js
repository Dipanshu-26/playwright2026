// expect (page).toHaveURL()
// expect(page).toHaveTitle()
// expect(locator). toBeVisible()
// expect(locator).toBeEnabled()
//expect(locator).not.toBeEnabled()
// expect (locator). toBeDisabled()
// expect(locator).toBeChecked()
// expect(locator).toHaveAttribute()
// expect(locator).toHaveText ()
// expect(locator).toContainText()
// expect(locator).toHaveValue(value)
// expect(locator). toHaveCount ()

import {test, expect} from "@playwright/test"

test("assertions types",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")

    //toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await page.waitForTimeout(3000)
    //toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //toBeVisible()
    //await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()


})

test("assertions types 2",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

    //await expect(page.locator('#nava')).toBeVisible()
    await expect(page.locator('[id="nava"]')).toBeVisible()
})

test.only("assertions 3",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.getByPlaceholder('Type to Select Countries')).toBeEnabled()

    const chbox1= await page.locator('#checkBoxOption1')
    await expect(chbox1).not.toBeChecked()

    await chbox1.click()
    await expect(chbox1).toBeChecked()
    

    //toContainText(), toHaveText()
    const text = await page.locator('h1')
    await expect(text).toHaveText('Practice Page')

    const btnTxt = await page.locator('legend').first()
    await expect(btnTxt).toContainText('Radio Button Example')
   

    //toHaveValue()
    //await page.getByPlaceholder('Enter Your Name').fill("dipanshu")

    await page.fill("#name","dipanshu")
    const nmIp = await page.getByPlaceholder('Enter Your Name')
    await expect(nmIp).toHaveValue("dipanshu")

    //toHaveCount()
    await expect(page.locator('legend')).toHaveCount(12)

    await page.waitForTimeout(3000)

})