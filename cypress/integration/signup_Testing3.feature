Feature: can not sign up conduit website




    Scenario: verify the user can not sign up conduit website When entering an email previously used
        Given  a user navigated to sign up page
        And typed in username field a valid user name
        And typed in Email field an email previously used
        And typed in password field a valid password
        When clicks on sign up button
        Then the user should not signed up successfully And show a message that the email have been used before
