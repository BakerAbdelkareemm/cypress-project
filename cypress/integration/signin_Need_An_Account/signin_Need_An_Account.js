import { Given,Then,When} from "cypress-cucumber-preprocessor/steps";


const signinLink="https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login"
const signupLink='https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register'


describe("when i trying signin and i need an account", ()=>{
    Given ('a user navigated to sign in page',()=>{
        cy.visit(signinLink)
    
    })
      
     When('clicks Need an account?',()=>{
         cy.contains('Need an account?').should('be.visible').click()
     })
    
    Then ('go to signup page',()=>{
        cy.visit(signupLink)
        

    })
})


