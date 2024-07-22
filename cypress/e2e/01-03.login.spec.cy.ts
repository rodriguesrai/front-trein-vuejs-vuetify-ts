describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('1 - should allow a user to log in with correct credentials', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { access_token: 'mock-token' }
    }).as('loginRequest')

    cy.get('h3').should('contain', 'Login')
    cy.get('[data-testid="username-input"]').type('testuser')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[type="submit"]').click()

    cy.url().should('include', '/')

    cy.visit('/profile')
    cy.url().should('include', '/profile')
    cy.contains('Profile').should('be.visible')
  })

  it('2 - should display an error message with incorrect credentials', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 404,
      body: { message: 'User with username 1 not found' }
    }).as('loginRequest')

    cy.get('#input-1').type('1')
    cy.get('#input-3').type('1')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/login')
  })

  it('3 - should navigate to the register page when the register button is clicked ', () => {
    cy.get('[data-testid="register-button"]').click()
    cy.url().should('include', '/register')
    cy.contains('Register').should('be.visible')
  })
})
