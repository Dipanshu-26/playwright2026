import { test, expect, chromium} from "@playwright/test"
import data from "../payload/dataFor28.json"


test.skip(`verify payload in playwright `,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('input[name="username"]').fill(data.username)
    await page.locator('input[name="password"]').fill(data.password)
    await page.locator('[type="submit"]').click()

    let txt = await page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').textContent()
    console.log(txt)

    await expect(txt).toBe('Dashboard')
})



data.forEach((el,index)=>{
test(`verify payload in playwright for user ${index +1} : ${el.name} `,async({page})=>{
    //console.log(el.username)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)
    await page.locator('input[name="username"]').fill(el.username)
    await page.locator('input[name="password"]').fill(el.password)
    await page.locator('[type="submit"]').click()

    let txt = await page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').textContent()
    console.log(txt)

    await expect(txt).toBe('Dashboard')
    await page.waitForTimeout(2000)
})
})
//let  data = {
//         "usename": "Admin",
//         "password": "admin@123"
//     }
//console.log()


// data = [
//         {
//             "usename": "Admin",
//             "password": "admin123"
//         },
//         {
//             "usename": "Admin",
//             "password": "admin123"
//         }
//     ] 
//data[0].username

// data.forEach((el,index)=>{
//     console.log(el.usename)
// })