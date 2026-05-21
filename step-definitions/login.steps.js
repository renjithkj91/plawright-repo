import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { assert } from "assert";
let browser 
let page
Given('User is on login page', async function(){
    browser = await chromium.launch({headless:false})
})