describe('Projects API Test', () => {
    beforeEach(() => {
      // Sahte veri ile API çağrısını engelliyoruz
      cy.intercept('GET', 'https://api.example.com/projects', { fixture: 'projects.json' });
    });
  
    it('Should load the projects page', () => {
      cy.visit('http://localhost:3000');  // Proje URL'sini ziyaret ediyoruz
  
      // "Projects" başlığının görünür olduğunu kontrol et
      cy.contains('Projects').should('be.visible');
  
      // WitFlix kartını kontrol et
      cy.contains('WitFlix').should('be.visible');
  
      // GitHub linkini kontrol et
      cy.get('a').contains('View on GitHub').should('have.attr', 'href', 'https://github.com/ElifAkan/witflix-workintech');
    });
  });