class Filter {
    get searchInput() {
        return cy.get("input[placeholder='Search...']")
    }

    get filterButton() {
        return cy.get("button[type='button']")
    }

    get galleryTitle() {
        return cy.get("h2 > .box-title")
    }

    fillSearchInput(search) {
        this.searchInput.type(search)
    }

    clickFilterButton() {
        this.filterButton.click()
    }
}

export const filter = new Filter ()