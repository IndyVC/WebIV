///<reference types="Cypress"/>

describe("Add New Car", () => {

  it('log in', () => {
    cy.visit("http://localhost:4200/home");
    cy.get('[data-cy=loginBtn]').click();
    cy.get('[data-cy=emailInput]').type("indy.vancanegem@student.hogent.be");
    cy.get('[data-cy=passwordInput]').type("P@ssword1111");
    cy.get('[data-cy=loginSubmit]').click();
  });
  it('access admin tool to add new car', () => {
    cy.get('[data-cy=adminToolBtn]').click();
    cy.get('[data-cy=addCarBtn]').click();
  });
  it('fill in form (lets add a new E-Tron', () => {
    cy.get('[data-cy=modelInp]').type("ETRON");
    cy.get('[data-cy=brandInp]').type("Audi");
    cy.get('[data-cy=priceInp]').type("50000");
    cy.get('[data-cy=maxSpeedInp]').type("200");
    cy.get('[data-cy=maxRangeInp]').type("500");
    cy.get('[data-cy=chargeTimeInp]').type("20");
    cy.get('[data-cy=imgInp]').click({
      force: true
    }).fixture("e-tron.png");
    cy.get('[data-cy=submitBtn]').click();
  });

  it('Mock get ETRON', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/cars/ETRON',
      status: 200,
      response: 'fixture:ETRON.json'
    });
    cy.visit('http://localhost:4200/review/ETRON');

  })
})
