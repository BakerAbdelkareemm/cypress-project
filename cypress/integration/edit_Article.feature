Feature: edit article


    Scenario: verify the user can edit article
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When when clicks on Global Feed should go successfully
        When clicks on the article
        Then when clicks on edit article button should go to edit article successfully




