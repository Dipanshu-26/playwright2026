import { test, expect } from "@playwright/test";


test("assertion types",async({page})=>{
    //AAA
    await page.goto("https://www.example.com/")

    await expect(page).toHaveTitle("Example Domain")

    await page.waitForTimeout(3000)

    const heading =await page.locator('h1')
    let hd = await page.locator('h1').textContent()
    console.log(hd)
    console.log(heading)

    await expect(heading).toBeVisible()
    await expect(heading).toHaveText("Example Domain")

    await expect(heading).toContainText("Example")

    let para= await page.locator('p')
    await expect(para).toHaveCount(2)

    
    await expect(heading).toHaveCount(1)

    const link = await page.locator('a')
    await expect(link).toBeEnabled()

    await expect(link).toHaveAttribute('href',"https://iana.org/domains/example")
})