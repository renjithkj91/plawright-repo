import{test, expect} from '@playwright/test'

test('Mouse hover sample', async({page})=>{ 
    await page.goto("https://selenium.qabible.in/")
    const mouseHover = page.locator('#others').hover()
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    //const rightClick = page.locator("//span[text()='Draggable n°1']").click({button:'right'})
    //const doubleClick = page.locator("//span[text()='Draggable n°2']").dblclick()
    const drag_drop = await page.locator("//span[text()='Draggable n°4']").dragTo(page.locator('#mydropzone'))
})