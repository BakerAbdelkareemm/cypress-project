Feature: post comment on the article


    Scenario: verify the user can post comment on the article
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When when clicks on Global Feed should go successfully
        When clicks on the article
        When add comments
        Then when clicks on post comments button should post comments successfully




