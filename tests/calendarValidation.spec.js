import {test, expect} from '@playwright/test'

test('Calendar validations', async({page})=>{
    page.goto('https://selenium.qabible.in/date-picker.php')
    const calendarField = page.locator('#single-input-field')
    await calendarField.click()
    const targetYear = 1997
    await expect(page.locator('.dropdown-menu')).toBeVisible()//wait untill the calendar popup element is visible on the page, and verify that it is displayed
    const calendarSwitch = page.locator('.datepicker-switch:visible')//visible is used to filter and select only visible element
    await calendarSwitch.click()
    await calendarSwitch.click()
    let attempts = 10
    while(attempts--){
        const decades = await calendarSwitch.innerText()//get the text visible on the screen
        const startYear = parseInt(decades.split('-')[0].trim()) 
        //trim used to remove extra space and parseInt is used to convert to integer
        if(targetYear>=startYear && targetYear<=startYear+9)
            break
        await page.locator('.prev:visible').click()//visible is used to select only the visible element even if multiple matches exist
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()//is used to filter elements based on the visible text
    await page.locator('.month:visible').filter({hasText:'Feb'}).click()
    await page.locator('.day:visible').filter({hasText:'12'}).click()
    await page.locator('#button-one').click()
    })