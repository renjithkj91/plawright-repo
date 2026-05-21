import {LoginPage} from '../pages/LoginPage'
import {getData} from '../utils/excelreader'
import {test, expect} from '@playwright/test'

const credentials = getData() //for looping

test('Login using valid credentials', async({page})=>{
    //const loginObject = new LoginPage(page) //pass fixture to constructor
    //await loginObject.navigateToPage()
    //await loginObject.login('standard_user','secret_sauce')
    for(const data of credentials){
        const loginObject = new LoginPage(page) //pass fixture to constructor
        await loginObject.navigateToPage()
        await loginObject.login(data.username, data.password)
    }
    //const InventoryPage = await(await loginObject.navigateToPage()).login('standard_user','secret_sauce') //chaining of methods
})