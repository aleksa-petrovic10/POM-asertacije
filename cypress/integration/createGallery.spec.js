const locCreate = require("../fixtures/locCreate.json")

describe ("Create gallery", () => {

    before(() => {
        cy.visit('https://gallery-app.vivifyideas.com/login')
    })

    it ('Login', () => {
        cy.get(locCreate.start.email).type('acafaca10@test.com')
        cy.get(locCreate.start.password).type('11111111')
        cy.get(locCreate.start.submit).click()
    })

    it ("Create gallery", () => {
        cy.get(locCreate.gallery.clickGalleryButton).click()
        cy.get(locCreate.gallery.title).type('aca')
        cy.get(locCreate.gallery.description).type('informacija')
        cy.get(locCreate.gallery.image).type('https://www.alo.rs/resources/images/0000/112/939/aca2_1000x0.png')
        cy.get(locCreate.gallery.submit).click()
    })
})