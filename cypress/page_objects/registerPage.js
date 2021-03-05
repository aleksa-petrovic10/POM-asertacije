class RegisterPage {
    get registerButton() {
        return cy.get("a[href='/register']") 
    }

    get firstName() {
        return cy.get("#first-name")
    }

    get lastName() {
        return cy.get("#last-name")
    }

    get email() {
        return cy.get("#email")
    }

    get password() {
        return cy.get('#password')
    }

    get passwordConfirmation() {
        return cy.get('#password-confirmation')
    }

    get checkbox() {
        return cy.get("input[type='checkbox']")
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
    }

    get upozorenje() {
        return cy.get(".alert")
    }

    clickRegisterButton() {
        this.registerButton.click()
    }

    fillFirstName(firstName) {
        this.firstName.type(firstName)
    }

    fillLastName(lastName) {
        this.lastName.type(lastName)
    }

    fillEmail(email) {
        this.email.type(email)
    }

    fillPassword(password) {
        this.password.type(password)
    }

    fillPasswordConfirmation(passConf) {
        this.passwordConfirmation.type(passConf)
    }

    clickCheckbox() {
        this.checkbox.check()
    }

    clickSubmitButton() {
        this.submitButton.click()
    }


}

export const registerPage = new RegisterPage ()