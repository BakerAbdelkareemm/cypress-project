Feature: can not sign up conduit website

    @CP-16
    Scenario: verify the user can not sign up conduit website When entering a user name and email previously used
        Given  a user navigated to sign up page
        And typed in username field a previously used user name
        And typed in Email field a previously valid Email
        And typed in password field a valid password
        When clicks on sign up button
        Then the user should not signed up successfully And show a message that the user name and email have been used before
