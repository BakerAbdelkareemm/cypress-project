import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakerr@gmail.com";
const password = "12345";
const shortBio="my name is baker abdalkreem"


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
    
     When('clicks on Settings',()=>{
        cy.contains('Settings').should('be.visible').click()
    })
     
    And('typed in short bio about you field a short bio',()=>{
        cy.get(':nth-child(3) > .form-control').type(shortBio)
    })
    Then('when clicks on Update Settings button should Update Settings successfully',()=>{
        cy.get('button').contains('Update Settings').should('be.visible').click()
    })
 
})