export const { I } = inject();

Given("I am on the homepage", () => {
    I.amOnPage("/");
});

When("I click on the {string} button", (buttonText: string) => {
    const signInButton = `//button[contains(.,'${buttonText}')]`;
    I.waitForElement(signInButton, 30);
    I.seeElement(signInButton);
    I.click(signInButton);
});

When("I enter my email and continue", () => {
    const emailInput = "//input[@id='identifier-field']"; // Email input field
    const continueButton = "css=.cl-formButtonPrimary"; // Continue button

    I.waitForElement(emailInput, 30);
    I.fillField(emailInput, "jefflin399@gmail.com"); // Enter email
    I.wait(1);
    I.click(continueButton); // Click continue
});

Then("I wait for the OTP input field", () => {
    const otpField = "//input[@id='identifier-field']"; // OTP input field

    I.waitForElement(otpField, 40);
    I.say("Manually input the OTP...");
});

When("I manually input the OTP and wait for authentication", () => {
    I.wait(30); // Wait 30s for manual OTP entry
    I.pressKey("Enter"); // Submit OTP manually
});

Then("I should be redirected to the homepage and see 'Welcome Back' text and the avatar image", () => {
    // I.waitForElement("//h1[contains(text(), 'Welcome Back')]", 40);
    I.see("Welcome Back");
    I.waitForElement("css=.cl-avatarImage", 30);
    I.seeElement("css=.cl-avatarImage");
});


// export const { I } = inject();

// Given("I am on the homepage", () => {
//     I.amOnPage("/");
// });

// When("I click on the {string} button", (buttonText: string) => {
//     const signInButton = `//button[contains(.,'${buttonText}')]`;
//     I.waitForElement(signInButton, 30);
//     I.seeElement(signInButton);
//     I.click(signInButton);
// });

// When("I enter my email and continue", () => {
//     const emailInput = "//input[@id='identifier-field']"; // Email input field
//     const continueButton = "css=.cl-formButtonPrimary"; // Continue button

//     I.waitForElement(emailInput, 30);
//     I.fillField(emailInput, "jefflin399@gmail.com");
//     I.wait(1); // Small wait for stability
//     I.click(continueButton);
// });

// Then("I wait for the OTP input field", () => {
//     const otpField = "//input[@id='identifier-field']"; // OTP input field

//     I.waitForElement(otpField, 40);
//     I.say("Manually input the OTP...");
//     I.wait(30); // Give time to manually enter OTP
// });

// When("I submit the OTP and complete sign-in", () => {
//     I.pressKey("Enter"); // Submit OTP
// });

// Then("I should be redirected to the homepage", () => {
//     I.waitForElement("//h1[contains(text(), 'Welcome Back')]");
//     I.see("Welcome Back");
//     I.waitForElement("css=.cl-avatarImage", 20); // Ensure avatar image appears
//     I.seeElement("css=.cl-avatarImage");
// });



// // export const { I } = inject();

// // Given("I am on the homepage", () => {
// //     I.amOnPage("/");
// // });

// // When("I click on the {string} button", (buttonText: string) => {
// //     const signInButton = `//button[contains(.,'${buttonText}')]`;
// //     I.waitForElement(signInButton, 30);
// //     I.seeElement(signInButton);
// //     I.click(signInButton);
// // });

// // When("I enter my email and continue", () => {
// //     const emailInput = "//input[@id='identifier-field']"; // Updated email input XPath
// //     const continueButton = "css=.cl-formButtonPrimary"; // Button to continue

// //     I.waitForElement(emailInput, 30);
// //     I.fillField(emailInput, "jefflin399@gmail.com"); // Enter email
// //     I.wait(1); // Small wait for stability
// //     I.click(continueButton); // Click continue
// // });

// // Then("I wait for the OTP input field", () => {
// //     const otpField = "//input[@id='identifier-field']"; // OTP input field

// //     I.waitForElement(otpField, 40);
// //     I.say("Manually input the OTP...");
// //     I.wait(30); // Give time to manually enter OTP
// // });

// // When("I submit the OTP and complete sign-in", () => {
// //     I.pressKey("Enter"); // Submit OTP
// // });

// // Then("I should be redirected to the homepage", () => {
// //     // I.waitForElement("//h1[contains(text(), 'Welcome back')]", 40);
// //     I.see("Welcome Back");
// // });



// // // export const { I } = inject();

// // // Given("I am on the homepage", () => {
// // //     I.amOnPage("/");
// // // });

// // // When("I click on the {string} button", (buttonText: string) => {
// // //     const signInButton = `//button[contains(.,'${buttonText}')]`;
// // //     I.waitForElement(signInButton, 30);
// // //     I.seeElement(signInButton);
// // //     I.click(signInButton);
// // // });

// // // When("I select {string}", (optionText: string) => {
// // //     const googleButton = `//span[contains(., 'Continue with Google')]`; // Updated XPath
    
// // //     I.wait(5); 
// // //     // I.switchToNextTab(); // Handle new tab if needed

// // //     // I.waitForElement("iframe", 10); // Detect iframe
// // //     // I.switchTo("iframe"); // Switch if Google login is inside iframe

// // //     // I.retry(3).waitForElement(googleButton, 40); // Retry for stability
// // //     I.seeElement(googleButton);
// // //     I.click(googleButton);
    
// // //     // I.switchTo(); // Exit iframe if applicable
// // // });
// // // Then("I should see the Google sign-in page", () => {
// // //     const emailField = "input[type='email']";
// // //     I.waitForElement(emailField, 40);
// // //     I.seeElement(emailField);
// // // });

// // // When("I input my email and continue", () => {
// // //     I.fillField("input[type='email']", "jefflin399@gmail.com");
// // //     I.pressKey("Enter");
// // //     I.wait(5);
// // // });

// // // Then("I wait for the OTP input field", () => {
// // //     const otpField = "input[type='tel']";
// // //     I.wait(30);
// // //     I.say("Manually input the OTP...");
// // //     I.wait(30);
// // // });

// // // When("I submit the OTP and complete sign-in", () => {
// // //     I.pressKey("Enter");
// // //     I.waitForNavigation({ waitUntil: "networkidle" });
// // // });

// // // Then("I should be redirected to the homepage", () => {
// // //     I.waitForElement("//h1[contains(text(), 'Welcome back')]", 40);
// // //     I.see("Welcome back");
// // // });




// // // // export const { I } = inject();

// // // // Given("I am on the homepage", () => {
// // // //     I.amOnPage("/");
// // // // });

// // // // When("I click on the {string} button", (buttonText) => {
// // // //     const signInButton = `//button[contains(.,'${buttonText}')]`;
// // // //     I.waitForElement(signInButton, 20);
// // // //     I.seeElement(signInButton);
// // // //     I.click(signInButton);
// // // // });

// // // // When("I select {string}", (optionText) => {
// // // //     const googleButton = `//span[contains(text(), '${optionText}')]`;
// // // //     I.waitForElement(googleButton, 20);
// // // //     I.click(googleButton);
// // // // });

// // // // Then("I should see the Google sign-in page", () => {
// // // //     const emailField = "input[type='email']";
// // // //     I.waitForElement(emailField, 20);
// // // //     I.seeElement(emailField);
// // // // });
