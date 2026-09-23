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
    await page.waitForTimeout(3000)

})