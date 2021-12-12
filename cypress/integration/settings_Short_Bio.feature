Feature: short bio


    Scenario: verify the user can add short bio
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When clicks on Settings
        And typed in short bio about you field a short bio
        Then when clicks on Update Settings button should Update Settings successfully






