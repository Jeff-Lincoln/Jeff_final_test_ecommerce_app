Feature: Add Kobe's 4 Xtray Shoes to Basket

  Scenario: User adds Kobe's 4 Xtray shoes to the basket and verifies it
    Given I am on the homepage
    When I wait for the product to appear and click on it
    And I add the product to the basket
    And I navigate to My Basket
    Then I should see the product in the cart
