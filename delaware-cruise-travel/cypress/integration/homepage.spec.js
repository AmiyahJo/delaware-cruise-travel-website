describe('Homepage', () => {
    it('should display the homepage', () => {
      cy.visit('/');
      cy.contains('Tonyaberry Cruise & Travel');
    });
  });
  