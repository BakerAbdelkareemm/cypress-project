Feature: add article


    Scenario: verify the user can add article
        Given a user navigated to sign in page
        And typed in Email field a valid Email
        And typed in password field a valid password
        When clicks on sign in button
        When clicks on New Article
        And typed in Article Title field an article title
        And typed in What is this article about? field
        And typed in Write your article in markdown field
        And typed in Enter tags field
        Then clicks on  Publish Article button
      





