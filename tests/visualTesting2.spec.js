import{test, expect} from '@playwright/test'
test('Visual testing in playwright(dynamic page)', async({page})=>{ 
    await page.goto('https://selenium.qabible.in/')
    await page.waitForLoadState('networkidle')
    await page.locator("//div[@id='carouselExampleIndicators']").evaluate((element)=>{
        element.style.display = "none"
    })
        await expect(page).toHaveScreenshot('obsqura.png', {threshold:0.2,maxDiffPixels:8000})
})