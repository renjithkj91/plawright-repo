import { only } from 'node:test'
import{test, expect} from 'playwright/test'
test('Simple alert handling', async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog', async dialog => { //on is used for listening the event. Here 1st dialog is event used detect, 2nd dialog is object that is used to handle or control the alert
        expect(dialog.message()).toBe('I am a Javascript alert box!')//checking the text inside the alert box. toBe is used to compare values
        await dialog.accept()
    })
    const clickMeBtn = page.locator("//button[@onclick='jsAlert()']")
    await clickMeBtn.click()
})

test('Confirmation alert handling', async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog', async dialog => { 
        //await dialog.accept()
        await dialog.dismiss()
    })
    const clickMeBtn = page.locator("//button[@onclick='jsConfirm()']")
    await clickMeBtn.click()
})

test.only('Prompt alert handling', async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog', async dialog => { 
        //await dialog.accept('Test Message')
        await dialog.dismiss('Test Message')
    })
    const clickMeBtn = page.locator("//button[@onclick='jsPrompt()']")
    await clickMeBtn.click()
})