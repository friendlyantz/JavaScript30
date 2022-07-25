describe('clock', () => {
  before(() => {
    cy.visit('/javascript30/02 - JS and CSS Clock/index.html ');
  });

  it('start with hour, minute and second hands starting at 10h:10m:20s', () => {

    cy.get('.clock > .clock-face > .hour-hand');
    cy.get('.clock > .clock-face > .min-hand');
    cy.get('.clock > .clock-face > .second-hand');

    cy.get('.clock > .clock-face > .hand')
      .should(
        'have.css',
        'transform-origin',
        '150px 3px'//,'right' unable to assert non-absolute value such as 'right'
      );

  });

  xit('second hand ticks every second'), () => {
    //TODO
  };
});
