import{test, expect} from '@playwright/test'
test('Checkbox in playwright', async({page})=>{ 
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const checkBox1 = page.locator("//input[@value='option-1']")
    const checkBox3 = page.locator("//input[@value='option-3']")
   // await checkBox1.click()
   // const status = await checkBox1.isChecked()
   //await checkBox3.click()
   //console.log(status)
   //await checkBox1.check()
   await checkBox3.check()
})