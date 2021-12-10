Feature: can not sign up conduit website




    Scenario: verify the user can not sign up conduit website When entering a user name previously used
        Given  a user navigated to sign up page
        And typed in username field a previously used user name
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign up button
        Then the user should not signed up successfully And show a message that the user name have been used before
