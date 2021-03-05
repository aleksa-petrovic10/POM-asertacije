
import {filter} from '../page_objects/filter'

const data = require("../fixtures/data.json")

describe('Filter gallery page', () =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('Filter unique gallery', () => {
        filter.fillSearchInput(data.filter.uniqueSearch)
        filter.clickFilterButton()
        filter.searchInput.should('have.value', data.filter.uniqueSearch)
        filter.galleryTitle.should('contain', data.filter.uniqueSearch)
    })
    it('Filter multiple galleries', () => {
        filter.fillSearchInput(data.filter.multipleSearch)
        filter.clickFilterButton()
        filter.searchInput.should('have.value', data.filter.multipleSearch)
        filter.galleryTitle.should('contain', data.filter.multipleSearch)
    })
})