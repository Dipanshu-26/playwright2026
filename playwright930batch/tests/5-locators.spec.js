//locator()
//getByRole()
//getByText()
//getByLebel()
//getByAltText()
//getByTitle()
//getByPlaceholder()

import { test, expect } from "@playwright/test";


test("locator methods", async ({ page }) => {
    //AAA
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    let q1 = await page.locator('#mousehover').textContent()
    let q2 = await page.locator('[id="mousehover"]').textContent()

    console.log(q1)
    console.log(q2)

    //let home = await page.getByText('Home').click()


    await page.getByPlaceholder('Enter Your Name').fill("dipanshu")
    //await page.waitForTimeout(3000)

    // await page.getByRole('button', { name: "Open Window" }).click()
    // await page.waitForTimeout(3000)

    // await page.getByRole('radio',{name:"radioButton"}).click()
    // await page.waitForTimeout(3000)

    
})

test("buil in locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //await page.locator('[name="username"]').fill("Admin")

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:"submit"}).click()

    await expect(page.getByText('Time at Work')).toBeVisible()
    await page.waitForTimeout(3000)

})

test.only("get by title and get by lebel",async({page})=>{
    await page.goto("https://playwright.dev/")
    await page.getByTitle("system mode").click()


    await page.getByLabel('Search (Control+k)').click()
    await page.waitForTimeout(3000)
})

// Built-in locators.
// -------------------

// page.getByRole() to locate by explicit and implicit accessibility attributes. 

// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text.

// page.getByPlaceholder() to locate an input by placeholder.

// page.getByAltText() to locate an element, usually image, by its text alternative.

// page.getByTitle() to locate an element by its title attribute.

// page.getByTestId() to locate an element based on its data-testid attribute.