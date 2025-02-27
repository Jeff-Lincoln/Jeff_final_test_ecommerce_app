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
    const addToCartButton = ".bg-blue-500 > .text-xl";
    I.waitForElement(addToCartButton, 10);
    I.click(addToCartButton);
});

When("I navigate to My Basket", () => {
    const myBasketButton = ".flex-1 > span:nth-child(3)";
    I.waitForElement(myBasketButton, 10);
    I.click(myBasketButton);
});

Then("I should see the product in the cart", () => {
    const cartItemSelector = "xpath=//div[2]/div/div/div/div/div";
    I.waitForElement(cartItemSelector, 10);
    I.seeElement(cartItemSelector);
});

When("I remove the product from the basket", () => {
    const removeButton = ".bg-gray-200 > .text-xl";
    I.waitForElement(removeButton, 10);
    I.click(removeButton);
});

Then("I should not see the product in the cart", () => {
    const cartItemSelector = "xpath=//div[2]/div/div/div/div/div";
    I.dontSeeElement(cartItemSelector);
});
