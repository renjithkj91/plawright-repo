import{test, expect} from '@playwright/test'
import { only } from 'node:test'
test('Page Locators Test', async({page})=>{ 
    // const context = await browser.newContext() 
    // const page = await context.newPage() 
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const messagebox = page.locator('#single-input-field')
    // const value1 = page.locator('.form-control')
    // const getTotalBtnXpath = page.locator("//button[@id='button-two']")
    // const getTotalBtnText = page.locator("//button[text()='Get Total']")
    const showMessage = page.locator('#button-one')
    await messagebox.fill("Hello world")
    await showMessage.click()
})

//Special locators are that are specially available for playwrights
//User in ARIA applications 
test.only('Special Locators', async({page})=>{
    const userNameXpath = page.locator("//input[@name='username']")
    const passwordXpath = page.locator("//input[@name='password']")
    const signInBtnXpatch = page.locator("//button[text()='Sign In']")
    await page.goto('https://groceryapp.uniqassosiates.com/admin')
    await userNameXpath.fill("admin")
    await passwordXpath.fill("admin")
    await signInBtnXpatch.click()
    await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
   // await page.getByRole('button', {name:'Active'}).nth(0).click()
    //here 'button' is the role of element and 'Active' is the visible name
    //getByRole is a pw locator used to find element by role and visible name, making text more stable and user friendly
    await page.getByText('Active').nth(1).click()
    await page.getByText('Active').first().click() //click on the first element in the matches list
    //await page.getByText('Active').last().click() //click on the last element in the matches list

})