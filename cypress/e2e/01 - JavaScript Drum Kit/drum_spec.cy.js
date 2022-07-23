describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/01 - JavaScript Drum Kit/index.html ')
    cy.contains('clap')
    cy.contains('hihat')
    cy.contains('kick')
    cy.contains('openhat')
    cy.contains('boom')
    cy.contains('ride')
    cy.contains('snare')
    cy.contains('tom')
    cy.contains('tink')
    })
})
