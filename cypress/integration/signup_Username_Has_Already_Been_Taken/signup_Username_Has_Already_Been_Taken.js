import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register'
const userName= "tesstt";
const email = "tesstdssfddst@prsedk.com";
const password = "123455";


describe("verify the user can not sign up conduit website When entering a user name previously used", ()=>{
    Given ('a user navigated to sign up page',()=>{
        cy.visit(websiteLink)
    
    })
    
    And('typed in username field a previously used user name',()=>{
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
    
    Then ('the user should not signed up successfully And show a message that the user name have been used before',()=>{
            cy.contains('username has already been taken').should('be.visible')
        

    })
})


