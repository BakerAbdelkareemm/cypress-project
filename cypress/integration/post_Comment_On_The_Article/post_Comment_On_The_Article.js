import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakeer@gmail.com";
const password = "12345";
const comment="good";

describe("verify the user can post comment on the article", ()=>{
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

    When('add comments',()=>{
        cy.get('.form-control').type(comment)
    })

    Then('when clicks on post comments button should post comments successfully',()=>{
        cy.get('.card-footer > .btn').click()
    })
    
 
})