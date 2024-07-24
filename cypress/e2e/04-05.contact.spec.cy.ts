describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('4 - should display the contact form elements correctly', () => {
    cy.get('[data-testid="contact-form"]').should('be.visible')
  })

  it('5 - should enable the submit button after filling out the form ', () => {
    cy.get('[data-testid="name-input"]').type('John Doe')
    cy.get('[data-testid="email-input"]').type('john.doe@example.com')
    cy.get('[data-testid="message-input"]').type('This is a test message')

    cy.get('[data-testid="submit-button"]').should('be.enabled')
  })
})
