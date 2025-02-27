Feature: Google Sign In

  Scenario: Sign in with Google
    Given I am on the homepage
    When I click on the "Sign in" button
    And I select "Continue with Google"
    Then I should see the Google sign-in page
