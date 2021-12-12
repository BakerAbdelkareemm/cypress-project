Feature: logout


    Scenario: verify the user can logout from the site
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When clicks on Settings
        Then when clicks on Or click here to logout button should logout successfully

