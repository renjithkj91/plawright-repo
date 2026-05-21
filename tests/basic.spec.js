import{test, expect} from '@playwright/test' //official test runner of pw. 'expect' used for supporting assertions
//import { create } from 'node:domain'
//import { startupSnapshot } from 'node:v8'
test('Browser Context Playwright Test', async({browser})=>{ //browser fixture
    const context = await browser.newContext() //creates a new browser session
    const page = await context.newPage() //create a new tab inside that session
    await page.goto('https://selenium.qabible.in/') //launch url
})
// execution order
// 1. browser starts
// 2. session create
// 3. page/tab create

test.only('page playwright test', async({page}) => //test.only runs only this testcase
{
    await page.goto('https://selenium.qabible.in/')
    const pageTitle = await page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle("Obsqura Testing")
})