Feature: sign up conduit website


    Scenario: verify the user can sign up conduit website
        Given  a user navigated to sign up page
        And typed in username field a valid username
        And typed in Email field a valid Email
        And typed in password field a valid password
        When  clicks on sign up button
        Then  the user should signed up successfully







