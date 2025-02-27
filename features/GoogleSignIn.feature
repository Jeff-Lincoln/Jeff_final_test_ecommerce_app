Feature: User Sign-In with Email and OTP Authentication

  Scenario: Successful sign-in using email and OTP
    Given I am on the homepage
    When I click on the "Sign in" button
    And I enter my email and continue
    Then I wait for the OTP input field
    When I manually input the OTP and wait for authentication
    Then I should be redirected to the homepage and see 'Welcome Back' text and the avatar image
