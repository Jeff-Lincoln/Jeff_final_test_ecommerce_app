export const { I } = inject();

Given("I am on the homepage", () => {
    I.amOnPage("/");
});

When("I wait for the product to appear and click on it", () => {
    const productSelector = ".flex:nth-child(3) .object-contain";
    I.waitForElement(productSelector, 20);
    I.seeElement(productSelector);
    I.click(productSelector);
});

When("I add the product to the basket", () => {
    const addToCartButton = "xpath=//span[contains(.,'+')]";
    I.waitForElement(addToCartButton, 10);
    I.click(addToCartButton);
});

When("I navigate to My Basket", () => {
    const myBasketButton = ".flex-1 > span:nth-child(3)";
    I.waitForElement(myBasketButton, 10);
    I.click(myBasketButton);
});

Then("I should see the product in the cart", () => {
    const cartItemSelector = "xpath=//div/img";
    I.waitForElement(cartItemSelector, 10);
    I.seeElement(cartItemSelector);
});



//     Feature('Add Kobe\'s 4 Xtray Shoes to Basket');

//     Scenario('User adds Kobe\'s 4 Xtray shoes to the basket and verifies it', async ({ I }) => {
//         I.amOnPage('/');

//         // Wait for the product to appear and click on it
//         I.waitForElement(".flex:nth-child(3) .object-contain", 20);
//         I.seeElement(".flex:nth-child(3) .object-contain");
//         I.click(".flex:nth-child(3) .object-contain");

//         // Wait for product page to load
//         // I.waitForNavigation();
//         // I.waitForElement(".bg-blue-500 > .text-xl");
//         // I.click(".bg-blue-500 > .text-xl");

//         // Navigate to My Basket
//         I.waitForElement(".flex-1 > span:nth-child(3)");
//         I.click(".flex-1 > span:nth-child(3)");

//         // Verify the item is in the cart
//         I.waitForElement("//img[@alt=\" Kobe's 5  X-ray\"]");
//         I.seeElement("//img[@alt=\" Kobe's 5  X-ray\"]");
//     });



// // Feature('Add Kobe\'s 4 Xtray Shoes to Basket');

// // Scenario('User adds Kobe\'s 4 Xtray shoes to the basket and verifies it', async ({ I }) => {
// //     I.amOnPage('/');

// //     // Wait for the product to appear and click on it
// //     I.waitForElement(".flex:nth-child(3) .object-contain", 20);
// //     I.seeElement(".flex:nth-child(3) .object-contain");
// //     I.click(".flex:nth-child(3) .object-contain");

// //     // Wait for product page to load
// //     // I.waitForNavigation();
// //     I.waitForElement(".bg-blue-500 > .text-xl");
// //     I.click(".bg-blue-500 > .text-xl");

// //     // Navigate to My Basket
// //     I.waitForElement(".flex-1 > span:nth-child(3)");
// //     I.click(".flex-1 > span:nth-child(3)");

// //     // Verify the item is in the cart
// //     // I.waitForElement("//div[contains(text(),'Kobe\'s 4 Xtray')]");
// //     I.see("Kobe's 4 Xtray", "//div[contains(@id,'cart-items')]");
// // // });



// // // Feature('Add Kobe\'s 4 Xtray Shoes to Basket');

// // // Scenario('User adds Kobe\'s 4 Xtray shoes to the basket and verifies it', async ({ I }) => {
// // //     I.amOnPage('/');

// // //     // Wait for the product to appear and click on it
// // //     I.waitForElement(".flex:nth-child(3) .object-contain", 20);
// // //     I.seeElement(".flex:nth-child(3) .object-contain");
// // //     I.click(".flex:nth-child(3) .object-contain");

// // //     // Wait for product page to load
// // //     // I.waitForNavigation();
// // //     I.waitForElement("//button[contains(text(),'+')]");
// // //     I.click("//button[contains(text(),'+')]");

// // //     // Navigate to My Basket
// // //     I.waitForElement("//button[contains(text(),'My Basket')]");
// // //     I.click("//button[contains(text(),'My Basket')]");

// // //     // Verify the item is in the cart
// // //     I.waitForElement("//div[contains(text(),'Kobe\'s 4 Xtray')]");
// // //     I.see("Kobe's 4 Xtray", "//div[contains(@id,'cart-items')]");
// // // });

