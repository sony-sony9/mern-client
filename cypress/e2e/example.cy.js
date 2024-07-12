// cypress/e2e/example.cy.js
describe('Open home page', () => {
    it('Open home page', () => {
      cy.visit('http://localhost:3001');
      cy.contains('Welcome');
      cy.contains('Register'); 
      cy.contains('Login')
    });
  })
  