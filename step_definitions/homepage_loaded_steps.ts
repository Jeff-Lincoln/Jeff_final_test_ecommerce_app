export const { I } = inject();


Given('I am on the home page', () => {
    I.amOnPage('/');
});

Then('I wait for the homepage elements to stabilize', () => {
    I.wait(5); // Allow UI elements to stabilize
});

Then("I should see the 'Sign in' button", () => {
    I.waitForElement("xpath=//button[contains(.,'Sign in')]", 20);
    I.seeElement("xpath=//button[contains(.,'Sign in')]");
});

When("I click the 'Sign in' button", () => {
    I.click("xpath=//button[contains(.,'Sign in')]");
});


// Feature('Homepage loaded');

// Scenario('homepage loaded', async ({ I }) => {
//     I.amOnPage('/');
//     I.wait(5); // Allow UI elements to stabilize

//     I.waitForElement("xpath=//button[contains(.,'Sign in')]", 20);
//     I.seeElement("xpath=//button[contains(.,'Sign in')]");
//     I.click("xpath=//button[contains(.,'Sign in')]");
// });