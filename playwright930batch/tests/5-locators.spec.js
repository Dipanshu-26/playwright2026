//locator()
//getByRole()
//getByText()
//getByLebel()
//getByAltText()
//getByTitle()
//getByPlaceholder()

import { test, expect } from "@playwright/test";


test("locator methods",async({page})=>{
    //AAA
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let q1 = await page.locator('#mousehover').textContent()
    let q2 = await page.locator('[id="mousehover"]').textContent()
    
    console.log(q1)
    console.log(q2)

    //let home = await page.getByText('Home').click()
    

    await page.getByPlaceholder('Enter Your Name').fill("dipanshu")
    await page.waitForTimeout(3000)
})