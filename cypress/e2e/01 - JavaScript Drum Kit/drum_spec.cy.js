describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/javascript30/01 - JavaScript Drum Kit/index.html ')

    cy.get(`.keys > [data-key="65"]`).contains('A')
    cy.get(`.keys > [data-key="65"]`).contains('clap')
    cy.get(`.keys > [data-key="65"]`).trigger('keydown', { keyCode: 65 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="83"]`).contains('S')
    cy.get(`.keys > [data-key="83"]`).contains('hihat')
    cy.get(`.keys > [data-key="83"]`).trigger('keydown', { keyCode: 83 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="68"]`).contains('D')
    cy.get(`.keys > [data-key="68"]`).contains('kick')
    cy.get(`.keys > [data-key="68"]`).trigger('keydown', { keyCode: 68 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="70"]`).contains('F')
    cy.get(`.keys > [data-key="70"]`).contains('openhat')
    cy.get(`.keys > [data-key="70"]`).trigger('keydown', { keyCode: 70 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="71"]`).contains('G')
    cy.get(`.keys > [data-key="71"]`).contains('boom')
    cy.get(`.keys > [data-key="71"]`).trigger('keydown', { keyCode: 71 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="72"]`).contains('H')
    cy.get(`.keys > [data-key="72"]`).contains('ride')
    cy.get(`.keys > [data-key="72"]`).trigger('keydown', { keyCode: 72 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="74"]`).contains('J')
    cy.get(`.keys > [data-key="74"]`).contains('snare')
    cy.get(`.keys > [data-key="74"]`).trigger('keydown', { keyCode: 74 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="75"]`).contains('K')
    cy.get(`.keys > [data-key="75"]`).contains('tom')
    cy.get(`.keys > [data-key="75"]`).trigger('keydown', { keyCode: 75 }).should('have.class', 'playing')

    cy.get(`.keys > [data-key="76"]`).contains('L')
    cy.get(`.keys > [data-key="76"]`).contains('tink')
    cy.get(`.keys > [data-key="76"]`).trigger('keydown', { keyCode: 76 }).should('have.class', 'playing')
    })
})
