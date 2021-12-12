Feature: edit profile settings


    Scenario: verify the user can edit profile settings
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When clicks on profile
        Then when clicks on edit profile settings button should go to settings successfully






