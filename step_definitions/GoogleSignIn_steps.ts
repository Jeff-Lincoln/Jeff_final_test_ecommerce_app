export const { I } = inject();

Given("I am on the homepage", () => {
    I.amOnPage("/");
});

When("I click on the {string} button", (buttonText) => {
    const signInButton = `//button[contains(.,'${buttonText}')]`;
    I.waitForElement(signInButton, 20);
    I.seeElement(signInButton);
    I.click(signInButton);
});

When("I select {string}", (optionText) => {
    const googleButton = `//span[contains(text(), '${optionText}')]`;
    I.waitForElement(googleButton, 20);
    I.click(googleButton);
});

Then("I should see the Google sign-in page", () => {
    const emailField = "input[type='email']";
    I.waitForElement(emailField, 20);
    I.seeElement(emailField);
});
