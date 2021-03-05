describe("Login test", () => {
    before(() => {
        cy.loginCommand()
    })

    it('visit gallery', () => {
        cy.visit('/')
    })
    it('filter', () => {
        cy.get('input[type="text"]').type('new cat')
        cy.get('button.input-button').click()
        cy.wait(2000)
    })
    it('iterate trough cars', () => {
        cy.get('h2').each((element) => {
            expect(element.text()).to.include('new cat')
        })
    })
})