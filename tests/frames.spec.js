import{test, expect} from '@playwright/test'

test('Frames sample', async({page})=>{ 
    await page.goto('https://demoqa.com/frames')
    const FrameElement = page.frameLocator("#frame1")
    console.log(await FrameElement.locator("#sampleHeading").textContent())
})
