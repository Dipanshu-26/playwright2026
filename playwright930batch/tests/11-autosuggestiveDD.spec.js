import { test, expect } from "@playwright/test"


test("verify dropdown-1", async ({ page }) => {
    await page.goto("https://www.redbus.in/")

    await page.locator('#srcinput').fill('nag')

    await page.waitForTimeout(2000)

})