import {test , expect} from "@playwright/test"


test("TC001-valid login test",async({page})=>{
    //AAA
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.waitForTimeout(3000)
    await page.locator('button[type="submit"]').click()

    let txt = await page.locator('h6.oxd-text').textContent()

    await expect(txt).toBe("Dashboard")

    await page.waitForTimeout(3000)
})

test("TC002-invalid login test",async({page})=>{
    //AAA
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("abc")
    await page.locator('input[name="password"]').fill("abc")
    await page.waitForTimeout(3000)
    await page.locator('button[type="submit"]').click()

    let txt = await page.locator('.oxd-alert-content-text').textContent()

    await expect(txt).toBe("Invalid credentials")

    await page.waitForTimeout(3000)
})




//npx playwright test tests/1.basic.spec.js --project=chromium --headed