import {LoginPage} from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import {test, expect} from '@playwright/test'

test('Login and checkout inventory item', async({page})=>{
    const loginObject = new LoginPage(page) 
    await loginObject.navigateToPage()
    await loginObject.login('standard_user','secret_sauce')
    
    const inventoryObject = new InventoryPage(page)
    await inventoryObject.addItemToCart()
})