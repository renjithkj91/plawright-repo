import{test, expect} from '@playwright/test'
test('Radio button in playwright', async({page})=>{ 
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radioGreen = page.locator("//input[@value='green']")
    //await radioGreen.click()
    await radioGreen.check()
    const status = await radioGreen.isChecked()
    console.log(status)
})