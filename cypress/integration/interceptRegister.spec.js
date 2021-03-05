const data = require("../fixtures/data.json")
import {registerPage} from '../page_objects/registerPage'
const faker = require('faker');

describe("Register", () => {
    it('interception requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) => {
        }).as('succesfullRegister')
        cy.visit('/register')
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
        cy.wait('@succesfullRegister').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
})