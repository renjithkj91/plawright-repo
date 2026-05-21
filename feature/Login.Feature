@smoke
Feature: Login functionality
Scenario: Login with valid credentials
Given User is on login page
When User enters valid username
And User enters valid password
And Clicks on login button
Then User should navigate to home page

Scenario: Login with invalid credentials
Given User is on login page
When User enters valid username
And User enters invalid password
And Clicks on login button
Then User should see an error message in the login page