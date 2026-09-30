import {test, expect} from "@playwright/test"


test("verify radio buttons",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //select single dropdown option

    await page.locator('#dropdown-class-example').selectOption('Option3')
    await page.waitForTimeout(3000)

    await page.locator('#dropdown-class-example').selectOption({label:'Option2'})
    //wait page.waitForTimeout(3000)

    await page.locator('#dropdown-class-example').selectOption({index:3})
    //await page.waitForTimeout(3000)

    await page.selectOption('#dropdown-class-example', 'Option1')
    //await page.waitForTimeout(3000)

    //assertions 
    let options = await page.locator("#dropdown-class-example option")
    console.log(options)

    await expect(options).toHaveCount(4)

    let optionsTxt = await page.locator("#dropdown-class-example").textContent()
    console.log(optionsTxt)



})

//https://testautomationpractice.blogspot.com/