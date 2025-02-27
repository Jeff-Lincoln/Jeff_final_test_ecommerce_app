Feature: Add and Remove Kobe's 4 Xtray Shoes from Basket

  Scenario: User adds Kobe's 4 Xtray shoes to the basket and verifies it
    Given I am on the homepage
    When I wait for the product to appear and click on it
    And I add the product to the basket
    And I navigate to My Basket
    Then I should see the product in the cart

  Scenario: User adds and then removes Kobe's 4 Xtray shoes from the basket and verifies it
    Given I am on the homepage
    When I wait for the product to appear and click on it
    And I add the product to the basket
    And I navigate to My Basket
    Then I should see the product in the cart
    When I remove the product from the basket
    Then I should not see the product in the cart
