describe('clock', () => {
  it('passes', () => {
    cy.visit('/javascript30/02 - JS and CSS Clock/index.html ');

    cy.get('.clock > .clock-face > .hour-hand');
    cy.get('.clock > .clock-face > .min-hand');
    cy.get('.clock > .clock-face > .second-hand');
  });
});
