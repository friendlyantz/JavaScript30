describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
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
