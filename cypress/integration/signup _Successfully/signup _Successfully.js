import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register'
const userName= "teesddst";
const email = "teesfkdsdDst@prsedk.com";
const password = "123455";


describe("verify the user can sign up conduit website", ()=>{
    Given ('a user navigated to sign up page',()=>{
        cy.visit(websiteLink)
    
    })
    
    And('typed in username field a valid username',()=>{
        cy.get('[placeholder=Username]').type(userName) 
    })
    
    And('typed in Email field a valid Email',()=>{
        cy.get('[placeholder=Email]').type(email);
    })
    And('typed in password field a valid password',()=>{
        cy.get('[placeholder=Password]').type(password)
    })
    
     When('clicks on sign up button',()=>{
         cy.get('button').contains('Sign up').should('be.visible').click()
     })
    
    Then ('the user should signed up successfully',()=>{
            cy.contains('Settings').should('be.visible').click()
        cy.get('button').contains('Or click here to logout.').should('be.visible').click()

    })
})


