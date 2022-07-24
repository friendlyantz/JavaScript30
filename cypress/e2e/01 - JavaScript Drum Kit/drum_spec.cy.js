describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/javascript30/01 - JavaScript Drum Kit/index.html ')

    cy.get(`.keys > [data-key="65"]`).contains('A')
    cy.get(`.keys > [data-key="65"]`).contains('clap')

    cy.get(`.keys > [data-key="83"]`).contains('S')
    cy.get(`.keys > [data-key="83"]`).contains('hihat')

    cy.get('body').trigger('keydown', { keyCode: 83 })

    cy.get(`.keys > [data-key="68"]`).contains('D')
    cy.get(`.keys > [data-key="68"]`).contains('kick')

    cy.get(`.keys > [data-key="70"]`).contains('F')
    cy.get(`.keys > [data-key="70"]`).contains('openhat')

    cy.get(`.keys > [data-key="71"]`).contains('G')
    cy.get(`.keys > [data-key="71"]`).contains('boom')

    cy.get(`.keys > [data-key="72"]`).contains('H')
    cy.get(`.keys > [data-key="72"]`).contains('ride')

    cy.get(`.keys > [data-key="74"]`).contains('J')
    cy.get(`.keys > [data-key="74"]`).contains('snare')

    cy.get(`.keys > [data-key="75"]`).contains('K')
    cy.get(`.keys > [data-key="75"]`).contains('tom')

    cy.get(`.keys > [data-key="76"]`).contains('L')
    cy.get(`.keys > [data-key="76"]`).contains('tink')
    })
})
