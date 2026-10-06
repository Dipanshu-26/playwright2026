import { test, expect } from "@playwright/test"


test("verify dropdown-1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator('#colors').selectOption('Red')

    //await page.selectOption('#colors','White')

    //select multiple options 

    await page.selectOption('#colors',['White','Blue','Green'])


    //count the options 

    // let color = await page.locator('#colors').textContent()
    // console.log(color)

    let colorCount = await page.locator('#colors option')
    await expect(colorCount).toHaveCount(7) 
    
    let colorCount2 = await page.$$('#colors option')    //array
    await expect(colorCount2.length).toBe(7) 
    await expect(colorCount2).toHaveLength(7)
    //await expect(7).toBe(7)

   //print all options with for loop
   let colorCount3 = await page.$$('#colors option')
   //for(el of array){}
   for(let color of colorCount3){
    const colorTxt = await color.textContent()
    console.log(`color options are ==> ${colorTxt}`)
   }

   console.log("-------------------------------")
   //check for presence of option 
   let color1 = await page.locator('#colors').textContent()
   console.log(color1)
   await expect(color1.includes('Red')).toBeTruthy()
   await expect(color1.includes('Redeeee')).toBeFalsy()

    await page.waitForTimeout(3000)
})


