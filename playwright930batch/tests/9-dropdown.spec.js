import { test, expect } from "@playwright/test"


test("verify dropdown-1", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //select single dropdown option

    await page.locator('#dropdown-class-example').selectOption('Option3')
    await page.waitForTimeout(3000)

    await page.locator('#dropdown-class-example').selectOption({ label: 'Option2' })
    //wait page.waitForTimeout(3000)

    await page.locator('#dropdown-class-example').selectOption({ index: 3 })
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


test.only("verify dropdown-2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //type1
    let countryCount = await page.locator("#country>option")
    await expect(countryCount).toHaveCount(10)

    //type2
    let countryCount2 = await page.$$('#country>option')
    console.log(countryCount2.length)

    await expect(countryCount2.length).toBe(10)
    //await expect(10).toBe(10)

    //check text is available or not 

    let txtContents=await page.locator('#country').textContent()
    console.log(txtContents)

    await expect(txtContents.includes("United Kingdom")).toBeTruthy()
    //await expect(txtContents.includes("abcd")).toBeTruthy()
    await expect(txtContents.includes("Nepal")).not.toBeTruthy()
    await expect(txtContents.includes("Nepal")).toBeFalsy()
    //------------------------------------------------------------------------
    let optionsArr = await page.$$('#country>option')
    let opArrText = []
    for(let option of optionsArr){
    //for(let el of arr){ el.textContent()}    
        let opTxt = await option.textContent()
        //console.log(opTxt)
        opArrText.push(opTxt.trim())
    }
    console.log(opArrText)
    await expect(opArrText.includes("United Kingdom")).toBeTruthy()
})