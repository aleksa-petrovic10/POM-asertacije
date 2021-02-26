describe("Login", () => {
    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it ("Click on login button", () => {
        cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    })
    it('Login without email', () => {
        cy.get("#password").type('11111111')
        cy.get('button[type="submit"]').click()
    })
    it('Login without password', () => {
        cy.get("#email").type('acafaca10@test.com')
        cy.get("#password").clear()
        cy.get('button[type="submit"]').click()
    })
    it('Login with wrong email', () => {
        cy.get("#email").clear().type('acafacetina@test.com')
        cy.get("#password").type('11111111')
        cy.get('button[type="submit"]').click()
    })
    it('Login with wrong email type', () => {
        cy.get("#email").clear().type('acafaca10testom')
        cy.get("#password").clear().type('11111111')
        cy.get('button[type="submit"]').click()
    })
    it('Login with incorrect password less than 8 characters', () => {
        cy.get("#email").clear().type('acafaca10@test.com')
        cy.get("#password").clear().type('12345')
        cy.get('button[type="submit"]').click()
    })
    it('Login with incorrect password with only letters', () => {
        cy.get("#email").clear().type('acafaca10@test.com')
        cy.get("#password").clear().type('acafaca10')
        cy.get('button[type="submit"]').click()
    })
})