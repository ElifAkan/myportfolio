describe('Dark Mode Toggle Test', () => {
    it('Should toggle dark mode successfully', () => {
      cy.visit('http://localhost:3000');  // Uygulama URL'nizi ziyaret eder
      cy.get('button').contains('Dark Mode').click();  // Dark Mode butonuna tıklar
  
      // Dark mode aktif olduktan sonra body elementinin 'dark' class'ına sahip olduğunu kontrol ediyoruz
      cy.get('body').should('have.class', 'dark');
    });
  });