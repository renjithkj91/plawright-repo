import { InventoryPage } from "./InventoryPage"

export class LoginPage{
    constructor(page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }
    async navigateToPage(){
        await this.page.goto('https://www.saucedemo.com/')
        return this
    }
    async login(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
        return new InventoryPage(this.page)
    }
}