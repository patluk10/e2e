class SharedPage{
  
  checkUrl(url) {
    cy.url().should('include', url)
    return
  }
  
}

export default SharedPage;