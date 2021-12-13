Feature: home

    @CP-6
    Scenario: Make sure home is working
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        Then when clicks on Global Feed should go successfully



