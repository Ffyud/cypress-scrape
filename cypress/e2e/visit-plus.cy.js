describe('Visit plus', () => {

    it('Navigate and download outerHTML', () => {
      cy.visit('https://plus.nl')

      cy.get('[data-title="Aanbiedingen"]').click();
      cy.get('footer#footer').scrollIntoView({duration: 5000, easing: 'swing'});
      
      cy.document().then((doc) => {
        const fullDOM = doc.documentElement.outerHTML;
  
        cy.writeFile('dom-from-cypress.html', fullDOM);
      });
    });

  });
