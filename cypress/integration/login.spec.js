const locators = require("../fixtures/locators.json");
const faker = require('faker');
const data = require("../fixtures/data.json")

describe("Login", () => {
    
    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it ("Click on login button", () => {
        cy.get(locators.login.loginButton).click()
    })
    // it('Login without email', () => {
    //     cy.get(locators.login.password).type(data.login.password)
    //     cy.get(locators.login.submit).click()
    // })
    // it('Login without password', () => {
    //     cy.get(locators.login.email).type(data.login.email)
    //     cy.get(locators.login.password).clear()
    //     cy.get(locators.login.submit).click()
    // })
    // it('Login with wrong email', () => {
    //     cy.get(locators.login.email).clear().type(data.login.wrongEmail)
    //     cy.get(locators.login.password).type(data.login.password)
    //     cy.get(locators.login.submit).click()
    // })
    // it('Login without @ email type', () => {
    //     cy.get(locators.login.email).clear().type(data.login.emailWithoutMonkey)
    //     cy.get(locators.login.password).clear().type(data.login.password)
    //     cy.get(locators.login.submit).click()
    // })
    // it('Login with incorrect password less than 8 characters', () => {
    //     cy.get(locators.login.email).clear().type(data.login.email)
    //     cy.get(locators.login.password).clear().type(data.login.passwordLessThan8)
    //     cy.get(locators.login.submit).click()
    // })
    // it('Login with incorrect password with only letters', () => {
    //     cy.get(locators.login.email).clear().type(data.login.email)
    //     cy.get(locators.login.password).clear().type(data.login.onlyLetterPassword)
    //     cy.get(locators.login.submit).click()
    // })
    it('Logout', () => {
        cy.get(locators.login.email).clear().type(data.login.email)
        cy.get(locators.login.password).clear().type(data.login.password)
        cy.get(locators.login.submit).click()
        // cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        cy.get(locators.login.email).should('not.exist')
        // cy.get(locators.login.logoutButton).click()
    })
    it('Filter', () => {
        cy.get(locators.filter.searchInput).type('jedna')
        cy.get(locators.filter.filterButton).click()
        // cy.get(locators.filter.searchInput).should('have.value', 'jedna')
        // cy.get(locators.filter.gallTitle).should('contain', 'jedna')
    })
})
