import { Given,And,Then,When} from "cypress-cucumber-preprocessor/steps";

const websiteLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login'
const email = "bakeer@gmail.com";
const password = "12345";


describe("Make sure home is working", ()=>{
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
    
     Then('when clicks on Global Feed should go successfully',()=>{
        cy.contains('Global Feed').should('be.visible').click()
    })
    
    
})


