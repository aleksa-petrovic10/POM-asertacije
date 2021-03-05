const locators = require("../fixtures/locators.json");
const data = require("../fixtures/data.json")

describe("Login test", () => {
    it('interception requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('succesfullLogin')
        cy.visit('/login')
        registerPage.fillFirstName(data.register.firstName)
        registerPage.fillLastName(data.register.lastName)
        registerPage.fillEmail(faker.internet.email())
        registerPage.fillPassword(data.register.password)
        registerPage.fillPasswordConfirmation(data.register.passwordConfirmation)     
        registerPage.clickCheckbox()
        registerPage.clickSubmitButton()
        cy.wait('@succesfullLogin').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
})