describe("Login test", () => {
    before(() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', { email: "acafaca10@test.com", password: "11111111" })
            .its('body').then((identity) => {
                window.localStorage.setItem('token', identity.access_token);
            })
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