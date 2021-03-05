import { loginPage } from '../page_objects/loginPage'
import { getMaxListeners } from 'cluster';
const data = require("../fixtures/data.json")

describe("Login", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
    })


    it('All empty fields', () => {

        loginPage.clickSubmitButton()
    })
    it('Login without email', () => {

        loginPage.fillPasswordInput(data.login.password)
        loginPage.clickSubmitButton()
    })

    it('Login without password', () => {
        loginPage.fillEmailInput(data.login.email)

        loginPage.clickSubmitButton()
    })
    it('Login with wrong email', () => {
        loginPage.fillEmailInput(data.login.wrongEmail)
        loginPage.fillPasswordInput(data.login.password)
        loginPage.clickSubmitButton()
    })
    it('Login with wrong email type', () => {
        loginPage.fillEmailInput(data.login.emailWithoutMonkey)
        loginPage.fillPasswordInput(data.login.password)
        loginPage.clickSubmitButton()
    })
    it('Login with incorrect password less than 8 characters', () => {
        loginPage.fillEmailInput(data.login.email)
        loginPage.fillPasswordInput(data.login.passwordLessThan8)
        loginPage.clickSubmitButton()
    })
    it.only('Login with incorrect password with only letters', () => {
        loginPage.fillEmailInput(data.login.email)
        loginPage.fillPasswordInput(data.login.onlyLetterPassword)
        loginPage.clickSubmitButton()
        loginPage.upozorenje
        .should('contain', 'Bad Credentials')
        .and("have.class", "alert alert-danger")
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('be.visible')
    
    })
    it('Sucessfull login', () => {
        loginPage.login(data.login.email, data.login.password)
    })
})
