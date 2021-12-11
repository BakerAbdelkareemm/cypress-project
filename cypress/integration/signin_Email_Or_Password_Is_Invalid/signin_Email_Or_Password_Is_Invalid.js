import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakersd@gmail.com";
const password = "12345";


describe("verify the user can not sign in conduit website When entering an invalid email or password", ()=>{
    Given ('a user navigated to sign in page',()=>{
        cy.visit(websiteLink)
    
    })
    
    And('typed in Email field an incorrect email',()=>{
        cy.get('[placeholder=Email]').type(email);
    })
    And('typed in password field a valid password',()=>{
        cy.get('[placeholder=Password]').type(password)
    })
    
     When('clicks on sign in button',()=>{
         cy.get('button').contains('Sign in').should('be.visible').click()
     })
    
    Then ('the user should not signed in successfully And show a message that email or password is invalid',()=>{
            cy.contains('email or password is invalid').should('be.visible')
      
    })
})


