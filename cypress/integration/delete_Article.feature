Feature: delete article


    Scenario: verify the user can delete article
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When when clicks on Global Feed should go successfully
        When clicks on the article
        Then when clicks on delete article button should delete the article successfully




