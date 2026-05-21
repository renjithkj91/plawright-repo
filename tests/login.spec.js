import{test, expect} from '@playwright/test'
const validcredentials = require('../utils/testcredentials.json')//accessing json file
//'beforeEach' is a hook used in playwright. 
// when it is used, it will execute before each test cases.
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})

test('Login using valid credentials', async({page})=>{ 
    const userNameValue = validcredentials.username
    const passwordValue = validcredentials.password
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill(userNameValue)
    await passwordTxt.fill(passwordValue)
    await loginBtn.click()
    const title = await page.title()
    console.log(title)
    //await expect(page).toHaveTitle("Swag Labs")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('Login using invalid credentials', async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill("standard_user")
    await passwordTxt.fill("secret_sauce1")
    await loginBtn.click()
    //const errorMsgXpath = page.locator("//h3[@data-test='error']")
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})