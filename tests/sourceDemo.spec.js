import{test, expect} from '@playwright/test'
const validcredentials = require('../utils/testcredentials.json')//accessing json file
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')
})

test('@smoke Login(Valid credentials)', async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill("standard_user")
    await passwordTxt.fill("secret_sauce")
    await loginBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('@smoke Login(Valid username and invalid password)', async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill("standard_user")
    await passwordTxt.fill("secret_sauce1")
    await loginBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

test('Login(Invalid username and valid password)', async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill("standard_user1")
    await passwordTxt.fill("secret_sauce")
    await loginBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

test('Login(Invalid username and invalid password)', async({page})=>{ 
    const userNameTxt = page.locator('#user-name')
    const passwordTxt = page.locator("//input[@data-test='password']")
    const loginBtn = page.locator('#login-button')
    await userNameTxt.fill("standard_user1")
    await passwordTxt.fill("secret_sauce1")
    await loginBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})