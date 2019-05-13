///<reference types="Cypress"/>

describe("Test Log in", () => {

  it('loginTest', () => {
    cy.visit("http://localhost:4200/home");
    cy.get('[data-cy=loginBtn]').click();
    cy.get('[data-cy=emailInput]').type("indy.vancanegem@student.hogent.be");
    cy.get('[data-cy=passwordInput]').type("P@ssword1111");
    cy.get('[data-cy=loginSubmit]').click();
    cy.get('[data-cy=logoutBtn]').should('be.visible');
  })
})
