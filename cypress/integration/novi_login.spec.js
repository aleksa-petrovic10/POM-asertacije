import {loginPage} from '../page_objects/loginPage'
import { getMaxListeners } from 'cluster';


describe("Login", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
    })
    
    
    it('Login without email', () => {
        
        loginPage.clickSubmitButton()
    })
    it('Login without password', () => {
        loginPage.fillEmailInput('acatest@mali.com')
        
        loginPage.clickSubmitButton()
    })
    it('Login with wrong email', () => {
        loginPage.fillEmailInput("acaca@test.com")
        loginPage.fillPasswordInput('1321354')
        loginPage.clickSubmitButton()
    })
    it('Login with wrong email type', () => {
        loginPage.fillEmailInput("cacaksja.haja")
        loginPage.fillPasswordInput('564654654')
        loginPage.clickSubmitButton()
    })
    it('Login with incorrect password less than 8 characters', () => {
        loginPage.fillEmailInput('acatest@mali.com')
        loginPage.fillPasswordInput('12345')
        loginPage.clickSubmitButton()
    })
    it('Login with incorrect password with only letters', () => {
        loginPage.fillEmailInput('acatest@mali.com')
        loginPage.fillPasswordInput('kajdkkgas')
        loginPage.clickSubmitButton()
    })
    it('Sucessfull login', () => {
        loginPage.login('acafaca10@test.com', '11111111')
    })
})
