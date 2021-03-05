import { createGallery } from '../page_objects/createGallery'

const data = require("../fixtures/data.json")

describe ("Create gallery", () => {

    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/login')
        createGallery.login(data.login.email, data.login.password)
    })

    it ("Create gallery one letter", () => {
        createGallery.clickCreateGallery()
        createGallery.fillTitle('a')
        createGallery.fillDescription(data.createGallery.description)
        createGallery.fillImage(data.createGallery.image)
        createGallery.clickSubmitButton()
        createGallery.upozorenje
        .should('contain', 'The title must be at least 2 characters.')
        .and("have.class", "alert alert-danger")
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('be.visible')
    })
    it ("Create gallery with wrong image format", () => {
        createGallery.clickCreateGallery()
        createGallery.fillTitle(data.createGallery.title)
        createGallery.fillDescription(data.createGallery.description)
        createGallery.fillImage(data.createGallery.imageWrongFormat)
        createGallery.clickSubmitButton()
        createGallery.upozorenje
        .should('contain', 'Wrong format of image')
        .and("have.class", "alert alert-danger")
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('be.visible')
    })

    let galleryId = "";

    it ('Create gallery interception requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('succesfullCreate')
        createGallery.clickCreateGallery()
        createGallery.fillTitle(data.createGallery.title)
        createGallery.fillDescription(data.createGallery.description)
        createGallery.fillImage(data.createGallery.image)
        createGallery.clickSubmitButton()
        cy.wait('@succesfullCreate').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
            galleryId = interception.response.body.id;
        })
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        createGallery.description.should('not.exist')
    })

    it('Delete gallery', () => {
        cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        }).as('succesfullDelete')
        cy.get("a[href='/my-galleries']").click()
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        cy.contains('Delete Gallery').click()
        cy.wait('@succesfullDelete').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
})