import {getCellData} from '../utils/excelreader2'
import {test, expect} from '@playwright/test'

const credentials = getCellData()

test('Get specific cell value and login', async({page})=>{
    const username = getCellData(2,1)
    const password = getCellData(2,2)
    await page.goto('https://www.saucedemo.com/')
    const UserName = page.locator("//input[@data-test='username']")
    const Password = page.locator("//input[@data-test='password']")
    const LoginButton = page.locator("//input[@data-test='login-button']")
    await UserName.fill(username)   
    await Password.fill(password)
    await LoginButton.click()
})