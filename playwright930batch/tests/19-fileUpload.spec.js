const { test, expect } = require('@playwright/test')

test('verify single file upload in playwright', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const file1='files-to-upload/day1.txt'
    await page.locator('#singleFileInput').setInputFiles('files-to-upload/day1.txt')
    await page.locator('#singleFileInput').setInputFiles(file1)

    await page.locator('#singleFileForm>button').click()
    let singleFileTxt = await page.locator('#singleFileStatus').textContent()

    await expect(singleFileTxt).toContain('day1.txt')
    await page.waitForTimeout(3000)
})

test.only('verify multiple file upload in playwright', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const file1='files-to-upload/day1.txt'
    const file2="C:/Users/Lenovo/OneDrive/Desktop/Total-64743.docx"
    
    await page.locator('#multipleFilesInput').setInputFiles([file1,file2])
    await page.locator('#multipleFilesForm>button').click()

    let multipleFileTxt=await page.locator('#multipleFilesStatus').textContent()
    //console.log(multipleFileTxt)
    await expect(multipleFileTxt).toContain('day1.txt')

    await expect(multipleFileTxt).toContain('Total-64743.docx')
    await page.waitForTimeout(3000)
})