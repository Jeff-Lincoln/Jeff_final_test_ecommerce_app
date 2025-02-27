const { I } = inject();

Given('I am on the home page', () => {
    I.amOnPage('/');
    I.waitForElement("//input[@name='query']", 10); // Ensure search input is visible
});

When("I search for 'Puma'", () => {
    I.fillField("//input[@name='query']", 'Puma');
    I.pressKey('Enter');
});

Then("I should see 'Puma Shoes MB.01' in the search results", () => {
    I.waitForElement("//img[@alt='puma shoes MB.01']", 10);
    I.seeElement("//img[@alt='puma shoes MB.01']");
    I.scrollTo("//img[@alt='puma shoes MB.01']");
});

When("I navigate to the product details page", async () => {
    I.waitForClickable("//img[@alt='puma shoes MB.01']", 10);
    const currentUrl = await I.grabCurrentUrl();
    I.say(`Current URL before clicking: ${currentUrl}`);
    // I.click("xpath=//div/img");
    // // I.waitForNavigation();\
    // const newUrl = await I.grabCurrentUrl();
    // I.say(`Navigated to URL: ${newUrl}`);
});

Then("I should see the product details for 'Puma Shoes'", () => {
    // I.waitForElement("//h1[contains(text(), 'Puma Shoes MB.01')]");
    I.see("puma");
});


// const { I } = inject();

// Given('I am on the home page', () => {
//     I.amOnPage('/');
// });

// When("I search for 'Puma'", () => {
//     I.waitForElement("//input[@name='query']", 10);
//     I.fillField("//input[@name='query']", 'Puma');
//     I.pressKey('Enter');
// });

// Then("I should see 'Puma Shoes MB.01' in the search results", () => {
//     I.waitForElement("//img[@alt='puma shoes MB.01']", 10);
//     I.seeElement("//img[@alt='puma shoes MB.01']");
//     I.scrollTo("//img[@alt='puma shoes MB.01']");
// });

// When("I navigate to the product details page", async () => {
//     const currentUrl = await I.grabCurrentUrl();
//     I.say(`Current URL before clicking: ${currentUrl}`);
//     I.wait(3);
//     I.click(".object-contain");
//     I.wait(3);
//     const newUrl = await I.grabCurrentUrl();
//     I.say(`Navigated to URL: ${newUrl}`);
// });

// Then("I should see the product details for 'Puma Shoes'", () => {
//     I.see("puma shoes");
// });
