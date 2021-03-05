import { getMaxListeners } from "cluster";

class LoginPage {
    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
    }

    get logoutButton() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }

    get upozorenje() {
        return cy.get(".alert")
    }


    fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

    clickLogoutButton() {
        this.logoutButton.click()
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}



export const loginPage = new LoginPage ()