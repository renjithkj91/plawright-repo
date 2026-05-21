import{test, expect} from '@playwright/test'
const dataSet = require('../utils/paramTestData.json')
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})

for (const data of dataSet){
    test(`Login with multiple test data ${data.username} ${data.password}`, async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill(data.username)
    await passwordTxt.fill(data.password)
    await loginBtn.click() 
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})
}
