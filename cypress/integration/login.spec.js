const locators = require("../fixtures/locators.json");
const faker = require('faker');

describe("Login", () => {
    
    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it ("Click on login button", () => {
        cy.get(locators.login.loginButton).click()
    })
    it('Login without email', () => {
        cy.get(locators.login.password).type('11111111')
        cy.get(locators.login.submit).click()
    })
    it('Login without password', () => {
        cy.get(locators.login.email).type('acafaca10@test.com')
        cy.get(locators.login.password).clear()
        cy.get(locators.login.submit).click()
    })
    it('Login with wrong email', () => {
        cy.get(locators.login.email).clear().type('acafacetina@test.com')
        cy.get(locators.login.password).type('11111111')
        cy.get(locators.login.submit).click()
    })
    it('Login with wrong email type', () => {
        cy.get(locators.login.email).clear().type('acafaca10testom')
        cy.get(locators.login.password).clear().type('11111111')
        cy.get(locators.login.submit).click()
    })
    it('Login with incorrect password less than 8 characters', () => {
        cy.get(locators.login.email).clear().type('acafaca10@test.com')
        cy.get(locators.login.password).clear().type('12345')
        cy.get(locators.login.submit).click()
    })
    it('Login with incorrect password with only letters', () => {
        cy.get(locators.login.email).clear().type('acafaca10@test.com')
        cy.get(locators.login.password).clear().type('acafaca10')
        cy.get(locators.login.submit).click()
    })
    it('Logout', () => {
        cy.get(locators.login.email).clear().type('acafaca10@test.com')
        cy.get(locators.login.password).clear().type('11111111')
        cy.get(locators.login.submit).click()
        cy.get(locators.login.logoutButton).click()
    })
})
