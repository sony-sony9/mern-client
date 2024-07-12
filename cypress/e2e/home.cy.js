describe('Home Page test', () => {
    it('Check The Input field', () => {
      cy.visit('/');
      cy.get('input').type('Cinderella');
      cy.get('button').click(); // Updated selector
      cy.contains('Welcome, Yagami Light');
      cy.get('input').should('have.value','Cinderella')
    });
  });