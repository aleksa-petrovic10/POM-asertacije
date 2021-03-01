const locators = require("../fixtures/locators.json")
const faker = require('faker');

describe("Register", () => {

    //userdata varijablu pravimo ako zelimo da svaki test koristi iste podatke
    var userData = {
        randomName: faker.name.firstName(),
        randomLastname : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        randomPassword : faker.internet.password()
    }


    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it ('Click on register button', () => {
        cy.get(locators.register.registerButton).click()
    })

    let password = faker.internet.password();
    //ova gore varijabla je ako hocemo da bude isti password u polju password i password confirmation, prilikom koriscenja fakera

    it('Without email', () => {
        cy.get(locators.register.firstName).type(faker.name.firstName())
        cy.get(locators.register.lastName).type(faker.name.lastName())
        
        cy.get(locators.register.password).type(password)
        cy.get(locators.register.passwordConfirmation).type(password)
        cy.get(locators.register.checkbox).check()
        cy.get(locators.register.submit).click()
    })
    it ('Password confirmation doesnt match', () => {
        cy.get(locators.register.firstName).clear().type('Aleksa')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get("#email").clear().type(faker.internet.email())
        cy.get(locators.register.password).clear().type('11111111')
        cy.get(locators.register.passwordConfirmation).clear().type('1111111112')
        cy.get(locators.register.checkbox).check()
        cy.get(locators.register.submit).click()
        cy.get(locators.register.upozorenje).should('contain', 'The password confirmation does not match.')
    })
    it ('Terms unchecked', () => {
        cy.get(locators.register.firstName).clear().type('Aleksa')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get("#email").clear().type(faker.internet.email())
        cy.get(locators.register.password).clear().type('11111111')
        cy.get(locators.register.passwordConfirmation).clear().type('11111111')
        cy.get(locators.register.checkbox).uncheck()
        cy.get(locators.register.submit).click()
        cy.get(locators.register.upozorenje).should('contain', 'The terms and conditions must be accepted.')
    })
    it ('Registration', () => {
        cy.get(locators.register.firstName).clear().type('Aleksa')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get("#email").clear().type(faker.internet.email())
        cy.get(locators.register.password).clear().type('11111111')
        cy.get(locators.register.passwordConfirmation).clear().type('11111111')
        cy.get(locators.register.checkbox).check()
        cy.get(locators.register.submit).click()
    })

 })