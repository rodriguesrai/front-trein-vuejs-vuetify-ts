describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('06 - should display the header component', () => {
    cy.get('[data-testid="header"]').should('be.visible')
  })

  it('07 - should have a links to the pages that navigates correctly', () => {
    cy.get('[data-testid="contact-button"]').should('be.visible').click()
    cy.url().should('include', '/contact')
    cy.go('back')

    cy.get('[data-testid="home-button"]').should('be.visible').click()
    cy.url().should('include', '/')

    cy.get('[data-testid="login-button"]').should('be.visible').click()
    cy.url().should('include', '/login')
  })

  it('08 - should have a footer', () => {
    cy.get('[data-testid="footer"]').should('be.visible')
  })
})
