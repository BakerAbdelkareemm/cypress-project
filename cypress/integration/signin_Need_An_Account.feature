Feature: trying signin and i need an account

    @CP-12
    Scenario: when i trying signin and i need an account
        Given a user navigated to sign in page
        When clicks Need an account?
        Then go to signup page