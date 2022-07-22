class VerticalMenuPage{
  
  composeNewEmail() {
    const composeBtn = cy.get('#compose_button');
    composeBtn.click();
  }
  
  goToSentEmails() {
    const sentEmailsBtn = cy.get('#fld_1_line');
    sentEmailsBtn.click()
  }
  
}

export default VerticalMenuPage;