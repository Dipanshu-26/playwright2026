import {test, expect} from '@playwright/test'

test("TC001-first test case",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//<input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="">

    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin123')

    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(3000)
    let txt = await page.locator('.oxd-topbar-header-breadcrumb-module').textContent()
    await page.waitForTimeout(3000)
    await expect(txt).toBe("Dashboard")
})

test.only("TC002-negative test case",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//<input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="">

    await page.locator('[name="username"]').fill("abc")
    await page.locator('[name="password"]').fill('abc')

    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(3000)
    let txt = await page.locator('.oxd-alert-content-text').textContent()
    await page.waitForTimeout(3000)
    await expect(txt).toBe("Invalid credentials")
})