///<reference types="Cypress"/>

describe("Delete Polestar 1", () => {

  it('log in', () => {
    cy.visit("http://localhost:4200/home");
    cy.get('[data-cy=loginBtn]').click();
    cy.get('[data-cy=emailInput]').type("indy.vancanegem@student.hogent.be");
    cy.get('[data-cy=passwordInput]').type("P@ssword1111");
    cy.get('[data-cy=loginSubmit]').click();
  });

  it('access admin tool to delete car', () => {
    cy.get('[data-cy=adminToolBtn]').click();
    cy.get('[data-cy=deleteCarBtn]').click();
  });

  it('delete Polestar 1', () => {
    cy.get("[data-cy=deleteBtn]").should("be.disabled");
    cy.get("[data-cy=modelInp]").type("Polestar 1");
    cy.get("[data-cy=deleteBtn]").click();
  });

  it('mock delete request', () => {
    cy.server();
    cy.route({
      method: 'DELETE',
      url: '/api/Cars/Polestar%201',
      status: 201,
    });
  });
  it('polestar 1 not visible', () => {
    cy.visit('http://localhost:4200/review/polestar%201')
  })
});
