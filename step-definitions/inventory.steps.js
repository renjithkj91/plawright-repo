import { Given, When, Then, BeforeAll, AfterAll, BeforeStep, AfterStep, Status, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";
import assert from 'assert';
import { error } from "console";
import path from "path";
setDefaultTimeout(3000)

let browser
let context
let page

BeforeAll(async function () { 
    browser = await chromium.launch({headless:false})
})

AfterAll(async function () { //executes after all scenarios
    if(browser){
        await browser.close()
    }
})

Before(async function () {
    context = await context.newContext()
    page = await context.newPage()
})

After(async function (scenario) {
    try{
        if(scenario.result == sttus.FAILED){
            //const screenshot = await page.screenshot()
            await page.screenshot({
                path:`screenshot/${Date.now()}.png`
            })
            //this.attach(screenshot, 'image/png')
        }
    }catch(error){
        console.log('after hook error', error.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})

BeforeStep(async function(step){
    console.log(`$step.picklestep`)
})