describe("Register", () => {
    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it ('Click on register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('Without email', () => {
        cy.get("#first-name").type('Aleksa')
        cy.get("#last-name").type('Petrovic')
        
        cy.get("#password").type('11111111')
        cy.get("#password-confirmation").type('11111111')
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').click()
    })
    it ('Registration', () => {
        cy.get("#first-name").clear().type('Aleksa')
        cy.get("#last-name").clear().type('Petrovic')
        cy.get("#email").clear().type('acafaca10@test.com')
        cy.get("#password").clear().type('11111111')
        cy.get("#password-confirmation").clear().type('11111111')
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').click()
        
    })
 })