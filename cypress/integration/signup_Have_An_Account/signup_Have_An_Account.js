import { Given,Then,When} from "cypress-cucumber-preprocessor/steps";

const signupLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register'
const signinLink="https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login"


describe("when i trying signup and i have an account", ()=>{
    Given ('a user navigated to sign up page',()=>{
        cy.visit(signupLink)
    
    })
      
     When('clicks on Have an account?',()=>{
         cy.contains('Have an account?').should('be.visible').click()
     })
    
    Then ('go to signin page',()=>{
        cy.visit(signinLink)
        

    })
})


