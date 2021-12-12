import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "baker@gmail.com";
const password = "12345";
const articleTitle="Created a new implementation"
const aboutArticle="Share your knowledge and enpower the community by creating a new implementation"
const article="Share your knowledge and enpower the community by creating a new implementation"
const tags="implementation"



describe("verify the user can sign in conduit website", ()=>{
    Given ('a user navigated to sign in page',()=>{
        cy.visit(websiteLink)
    })
    And('typed in Email field a valid Email',()=>{
        cy.get('[placeholder=Email]').type(email);
    })
    And('typed in password field a valid password',()=>{
        cy.get('[placeholder=Password]').type(password)
    })
    
    When('clicks on sign in button',()=>{
         cy.get('button').contains('Sign in').should('be.visible').click()
     })
    
     When('clicks on New Article',()=>{
        cy.contains('New Article').should('be.visible').click()
    })
    
    And('typed in Article Title field an article title',()=>{
        cy.get('input[placeholder*="Article Title"]').type(articleTitle)
    })
    And('typed in What is this article about? field',()=>{
        cy.get(`input[placeholder*="What's this article about?"]`).type(aboutArticle)
    })
    And('typed in Write your article in markdown field',()=>{
        cy.get(':nth-child(3) > .form-control').type(article)
    })
    And('typed in Enter tags field',()=>{
        cy.get('input[placeholder*="Enter tags"]').type(tags)
    })
    Then('when clicks on Publish Article button should publish article successfully',()=>{
        cy.get('button').contains('Publish Article').should('be.visible').click()
    })
 
})