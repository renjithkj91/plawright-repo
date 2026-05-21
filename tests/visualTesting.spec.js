import{test, expect} from '@playwright/test'
test('Visual testing in playwright(static page)', async({page})=>{ 
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')//wait untill network idle state. ie, page loading fully complete
    await expect(page).toHaveScreenshot('loginpage.png', {threshold:0.2,maxDiffPixels:7000})
    //loginpage.png - screenshot name
    //threshold - Value for how much difference is allowed
    //maxDiffPixels - max pixel difference allowed
    //run command for take baseline screenshot -> npx playwright test tests/visualTesting.spec.js --update-snapshots
})