import{test, expect} from '@playwright/test'
test('Multiple window handling', async({page, context})=>{//'page' works on current tab and 'context' handling multiple windows
    await page.goto('https://demo.guru99.com/popup.php')
    const popup = context.waitForEvent('page')//used to handle new tab. it wait for the new tab or window to open. should be given before the action. ie, here click.
    const clickHereBtn = page.locator("//a[text()='Click Here']")
    await clickHereBtn.click()
    const newPopUp = await popup
    await newPopUp.waitForLoadState()//this method will wait for the complete page load completes
    const email = newPopUp.locator("//input[@name='emailid']")
    const submit = newPopUp.locator("//input[@name='btnLogin']")
    await email.fill("test@yopmail.com")
    await submit.click()
})