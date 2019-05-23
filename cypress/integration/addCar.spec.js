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
  it('fill in form (lets add a new Polestar', () => {
    cy.get('[data-cy=modelInp]').type("Polestar 1");
    cy.get('[data-cy=brandInp]').type("Polestar");
    cy.get('[data-cy=priceInp]').type("50000");
    cy.get('[data-cy=maxSpeedInp]').type("200");
    cy.get('[data-cy=maxRangeInp]').type("500");
    cy.get('[data-cy=chargeTimeInp]').type("20");
    cy.get('[data-cy=imgInp]').click({
      force: true
    }).fixture("e-tron.png");
    cy.get('[data-cy=submitBtn]').click({
      force: true
    });
  });

  it('Mock Polestar 1', () => {
    cy.server();
    cy.route({
      headers: {
        Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbmR5LnZhbmNhbmVnZW1Ac3R1ZGVudC5ob2dlbnQuYmUiLCJ1bmlxdWVfbmFtZSI6IkluZHkudmFuY2FuZWdlbUBzdHVkZW50LmhvZ2VudC5iZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNTU4NjQ0MDI4fQ.DmUK45dEIk9wPgDiv_udz2QOiLHdA-_4bB16gDyEDE8'
      },
      method: 'GET',
      url: 'api/cars/',
      status: 200,
      response: 'fixture:Polestar1.json'
    })
    cy.visit('http://localhost:4200/cars');

  })
})
