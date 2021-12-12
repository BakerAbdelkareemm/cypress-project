import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakeer@gmail.com";
const password = "12345";



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
    
     When('clicks on profile',()=>{
        cy.get(':nth-child(4) > .nav-link').click()
    })
    
    Then('when clicks on edit profile settings button should go to settings successfully',()=>{
        cy.contains(' Edit Profile Settings').should('be.visible').click()
    })
 
})