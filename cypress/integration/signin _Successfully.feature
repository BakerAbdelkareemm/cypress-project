Feature: sign in conduit website


    Scenario: verify the user can sign in conduit website
        Given  a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When  clicks on sign in button
        Then  the user should signed in successfully







