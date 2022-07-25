describe('clock', () => {
  before(() => {
    cy.visit('/javascript30/02 - JS and CSS Clock/index.html ');
  });

  it('defaults hour, minute and second hands to 10h:10m:20s', () => {

    cy.get('.clock > .clock-face > .hour-hand')
      .should(
        'have.css',
        'transform',
        'matrix(0.866025, 0.5, -0.5, 0.866025, 0, 0)' // 'rotate(30deg) or 10o'clock'
      )

    cy.get('.clock > .clock-face > .min-hand')
      .should(
        'have.css',
        'transform',
        'matrix(-0.866025, 0.5, -0.5, -0.866025, 0, 0)' // 'rotate(150deg) or 2o'clock'
        );

    cy.get('.clock > .clock-face > .second-hand')
      .should(
        'have.css',
        'transform',
        'matrix(-0.866025, -0.5, 0.5, -0.866025, 0, 0)' // 'rotate(210deg) or 4o'clock'
      );

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
