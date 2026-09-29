import {test, expect} from "@playwright/test"


test("verify hard and soft assertions",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //hard assertions 
    // await expect(page).toHaveTitle("Practice Page")
    // await expect(page.locator("h1")).toHaveText('Practice Pageeeeee')
    // await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")

    //soft assertions 

    await expect.soft(page).toHaveTitle("Practice Page")
    await expect.soft(page.locator("h1")).toHaveText('Practice Pageeeeee')
    await expect.soft(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")
    
})