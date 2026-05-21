import { InventoryPage } from "./InventoryPage"
import {Page, Locator} from '@playwright/test' //to import type

export class LoginPage{
    page: Page
    username:Locator
    password:Locator
    loginButton:Locator
    constructor(page:Page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }
    async navigateToPage(){
        await this.page.goto('https://www.saucedemo.com/')
        return this
    }
    async login(user:string,pass:string){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
        return new InventoryPage(this.page)
    }
}