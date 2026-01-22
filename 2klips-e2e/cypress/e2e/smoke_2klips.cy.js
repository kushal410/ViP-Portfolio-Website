describe('2klips.com - Full Smoke Navigation', () => {
  const scrollDownUp = () => {
    // Scroll down (bottom), then back to top
    cy.scrollTo('bottom', { duration: 800 })
    cy.wait(300)
    cy.scrollTo('top', { duration: 800 })
  }

  const visitAndCheck = (urlOrPath) => {
    cy.visit(urlOrPath, { failOnStatusCode: false })

    // Basic "page loaded" checks
    cy.location('href').should('include', urlOrPath.startsWith('http') ? '' : '2klips.com')
    cy.document().its('readyState').should('eq', 'complete')

    // Avoid obvious error pages
    cy.contains(/404|not found|something went wrong|error/i).should('not.exist')

    scrollDownUp()
  }

  it('Visits key pages and vendor landing, scrolls, then returns home', () => {
    // Home
    visitAndCheck('/')

    // Main site pages
    visitAndCheck('/csaePolicy')
    visitAndCheck('/contact')
    visitAndCheck('/about')
    visitAndCheck('/termsUse')

    // Vendor landing (different subdomain)
    // NOTE: cy.visit can navigate cross-origin, but page checks must be done after.
    cy.visit('https://vendor.2klips.com/landing', { failOnStatusCode: false })
    cy.document().its('readyState').should('eq', 'complete')
    cy.contains(/404|not found|something went wrong|error/i).should('not.exist')
    scrollDownUp()

    // Back to main site
    visitAndCheck('https://2klips.com')
  })
})
