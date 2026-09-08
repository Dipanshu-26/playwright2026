import {test,expect} from '@playwright/test'

test("my first tast case",async({page})=>{
    //AAA
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()

    let txt = await page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').textContent()
    console.log(txt)

    await expect(txt).toBe('Dashboard')

})

//npx playwright test tests/1.basic.spec.js --project=chromium --headed


