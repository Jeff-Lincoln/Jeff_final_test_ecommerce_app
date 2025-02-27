Feature: Homepage Functionality

Scenario: Homepage loads successfully
    Given I am on the home page
    Then I wait for the homepage elements to stabilize
    And I should see the 'Sign in' button
    When I click the 'Sign in' button