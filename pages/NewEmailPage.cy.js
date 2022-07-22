class NewEmailPage{
    
  findContact(contact) {
    const findContactInput = cy.get('#quick_contact_search');
    findContactInput.clear();
    findContactInput.type(contact);
    
    return this;
  }
  
  chooseFirstContact() {
    const firstContact = cy.get('#qcontact_0');
    firstContact.click();
  }
  
  fillSubject(text) {
    const subjectInput = cy.get('#subject_input');
    subjectInput.clear();
    subjectInput.type(text);
    
    return this;
  }
  
  uploadAttachement(imagePath) {
    const input = cy.get('#mc_attachments_add');
    input.selectFile(imagePath, {force: true});
    
    return this;
  }
  
  sendEmail() {
    const sendBtn = cy.get('#qa_email_send_bottom');
    sendBtn.click();
  }
  
  createNewEmail(contact, text, imagePath) {
    this.findContact(contact)
    this.chooseFirstContact();
    this.fillSubject(text);
    this.uploadAttachement(imagePath);
    this.sendEmail();
  }
  
  checkSendBtnNotVisible() {
    const sendBtn = cy.get('#qa_email_send_bottom');
    sendBtn.should('not.be.visible');
  }
  
}

export default NewEmailPage;