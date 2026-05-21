export class InventoryPage{
    constructor(page){
        this.page = page
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack')
        //this.goToCart = page.locator('//a[@data-test="shopping-cart-link"]')
        //this.checkout = page.locator('#checkout')
        //this.firstName = page.locator('#first-name')
        //this.lastName = page.locator('#last-name')
        //this.postCode = page.locator('#postal-code')
        //this.continue = page.locator('#continue')
        //this.finish = page.locator('#finish') 
    }
    async addItemToCart(){
        await this.addToCart.click()
        return this
    }
    /*async InventoryItemCheckout(fName,lName,postCode){
        await this.addToCart.click()
        await this.goToCart.click()
        await this.checkout.click()
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.postCode.fill(postCode)
        await this.continue.click()
        await this.finish.click()
    }*/
}