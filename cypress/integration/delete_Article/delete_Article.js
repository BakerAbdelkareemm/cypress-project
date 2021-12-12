import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakker@gmail.com";
const password = "12345";

describe("verify the user can delete article", ()=>{
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

     When('when clicks on Global Feed should go successfully',()=>{
        cy.contains('Global Feed').should('be.visible').click()
    })
    When('clicks on the article',()=>{
        cy.get(':nth-child(1) > .article-preview > .preview-link > h1.ng-binding').click()
    })
    Then('when clicks on delete article button should delete the article successfully',()=>{
        cy.get('.article-actions > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-danger').click()
    })
    
 
})