///<reference types="Cypress"/>

describe("review Car", () => {

  it('Top rated car exists', () => {
    cy.visit("http://localhost:4200/home");
    cy.get('[data-cy=compareCarsBtn]').click();
    cy.get('[data-cy=reviewBtn]').click();
  });
})
