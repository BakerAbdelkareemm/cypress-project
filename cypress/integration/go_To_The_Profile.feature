Feature: go to the profile


    Scenario: verify the user can go to the profile
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        Then when clicks on profile button should go to the profile successfully