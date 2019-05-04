///<reference types="Cypress"/>
//Start cypress with: npx cypress open
describe('my first tests', function () {
  it('test will always pass', function () {
    expect(true).be.equal(true);
  });
  it('test will always fail', function () {
    expect(false).be.equal(true);
  });
  //Alle testen zijn gebaseerd op recipeapp hieronder!
  /*
  it('our app runs', function () {
    cy.visit('http://localhost:4200/home');
    cy.get('button').should('be.disabled');
    cy.get('[data-cy=filterInput]').type('sp'); //Zo filter je 
    cy.get('[data-cy=recipeCard]').should('have.length', 1);
  })
  */

  //Als je routing wilt MOCKEN en dus ook FAKE DATA wilt teruggeven,
  //Maak je hiervoor zelf JSON files aan onder folder: cypress/fixtures!
  it('mock recipe get', function () {
    cy.server();
    cy.route({
      url: 'http://localhost:4200/api/recipes',
      status: 200,
      response: 'fixture:recipe.json'
    }); //Nu is alles gemocht, en je wilt zoegzegd 3 recipes teruggeven vanuit de gemochte json onder fixtures.
    cy.visit('/'); //= http://localhost:4200
    //Ook is er een base url meegegeven in JSON bestanden. Hierdoor hoef je niet de hele link te gebruiken, alleen de subroutes
    cy.get('[data-cy=recipeCard]').should('have.length', 3);
  })
});
