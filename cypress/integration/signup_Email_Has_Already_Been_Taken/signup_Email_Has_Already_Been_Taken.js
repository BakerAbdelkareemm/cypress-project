import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register'
const userName= "tldfsaksgesdstst";
const email = "teesdst@prsedk.com";
const password = "123455";


describe("verify the user can not sign up conduit website When entering an email previously used", ()=>{
    Given ('a user navigated to sign up page',()=>{
        cy.visit(websiteLink)
    
    })
    
    And('typed in username field a valid user name',()=>{
        cy.get('[placeholder=Username]').type(userName) 
    })
    
    And('typed in Email field an email previously used',()=>{
        cy.get('[placeholder=Email]').type(email);
    })
    And('typed in password field a valid password',()=>{
        cy.get('[placeholder=Password]').type(password)
    })
    
     When('clicks on sign up button',()=>{
         cy.get('button').contains('Sign up').should('be.visible').click()
     })
    
    Then ('the user should not signed up successfully And show a message that the email have been used before',()=>{
            cy.contains('email has already been taken').should('be.visible')
        

    })
})


