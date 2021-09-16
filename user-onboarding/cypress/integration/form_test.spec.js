
// Tests
describe('New User', () => {
    beforeEach(() => {
    //
        cy.visit('localhost:3000');
    })

    // Variables
    const nameInput = () => cy.get('input[name = name]');
    const emailInput = () => cy.get('input[name = email');
    const passwordInput = () => cy.get('input[name = password');

    
    // It Can
    it('correctly renders', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')

    })
    it('correctly enters inputs', () => {
        const name = 'cain'
        const email = 'cain.alexander.palmer@gmail.com'
        const password = 'Fire45654'
        nameInput().type(name).should('have.value', name)
        emailInput().type(email).should('have.value', email)
        passwordInput().type(password).should('have.value', password)
    })
    it('correctly accepts Terms of Service', () => {
        cy.get('[type = "checkbox"]').check()
        cy.get('[type = "checkbox"]').should('be.checked')
    })
    it('correctly submits', () => {
        cy.get('form').submit
    })
    it('does not submit empty', () => {
        nameInput().clear()
        cy.get('[type = "submit"]').should('be.disabled')
    })

})