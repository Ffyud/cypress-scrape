describe('Een website openen', () => {
    it('Doe plus', () => {
      cy.visit('https://plus.nl')

      cy.get('[data-title="Aanbiedingen"]').click()
    })
  });
