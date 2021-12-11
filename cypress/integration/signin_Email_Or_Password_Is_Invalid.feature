Feature: can not sign in conduit website




    Scenario: verify the user can not sign in conduit website When entering an invalid email or password
        Given  a user navigated to sign in page
        And typed in Email field an incorrect email
        And typed in password field a valid password
        When clicks on sign in button
        Then the user should not signed in successfully And show a message that email or password is invalid
