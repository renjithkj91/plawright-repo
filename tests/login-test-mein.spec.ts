import {LoginPage} from '../pages/LoginPage'
import {getData} from '../utils/excelreader'
import {test, expect} from '@playwright/test'

const credentials = getData() //for looping

test('Login using valid credentials', async({page})=>{
    const loginObject = new LoginPage(page)
    await loginObject.navigateToPage()
    await loginObject.login('standard_user','secret_sauce')
})