Feature: Search and Navigate to Product Page

Scenario: User searches for 'Puma', sees the result, and navigates to the product page
    Given I am on the home page
    When I search for 'Puma'
    Then I should see 'Puma Shoes MB.01' in the search results
    And I navigate to the product details page
    Then I should see the product details for 'Puma Shoes'
