describe('Link Navigation Test', () => {
    it('Should navigate to the GitHub page when clicking the link', () => {
      cy.visit('http://localhost:3000');  // Uygulama URL'sini ziyaret ediyoruz
      cy.get('a[href="https://github.com/ElifAkan/witflix-workintech"]')
        .should('have.attr', 'href', 'https://github.com/ElifAkan/witflix-workintech');  // GitHub linkini kontrol ediyoruz
    });
  });