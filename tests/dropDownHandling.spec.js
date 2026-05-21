import{test, expect} from 'playwright/test'
test('Multiple window handling', async({page, context})=>{
    await page.goto('https://selenium.qabible.in/select-input.php')
    const selectColorDropdown = page.locator('#single-input-field')
    //await selectColorDropdown.selectOption({label:'Red'})
    //await selectColorDropdown.selectOption({value:'Yellow'})
    await selectColorDropdown.selectOption({index:3})
})