class CreateGallery {
    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }

    get galleryButton() {
        return cy.get("a[href='/create']")
    }

    get title() {
        return cy.get('#title')
    }

    get description() {
        return cy.get('#description')
    }

    get image() {
        return cy.get("input[type='url']")
    }

    get addImage() {
        return cy.get("form > :nth-child(3) > :nth-child(3)")
    }

    get submit() {
        return cy.get("form > :nth-child(4)")
    }

    get upozorenje() {
        return cy.get(".alert")
    }

    clickCreateGallery() {
        this.galleryButton.click()
    }

    fillTitle(title) {
        this.title.type(title)
    }

    fillDescription(description) {
        this.description.type(description)
    }

    fillImage(image) {
        this.image.type(image)
    }

    clickAddImage() {
        this.addImage.click()
    }

    clickSubmitButton() {
        this.submit.click()
    }
}

export const createGallery = new CreateGallery ()