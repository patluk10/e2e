class LoginPage{
  
  checkLoginFormIsVisible() {
    return cy.get('#ego_user').should('be.visible'), 
    cy.get('#ego_secret').should('be.visible'),
    cy.get('#ego_submit').should('be.visible')
  }
  
  fillEmail(email) {
    const emailInput = cy.get('#ego_user');
    emailInput.clear();
    emailInput.type(email);
    
    return this;
  }
  
  fillPswd(pswd) {
    const pswdInput = cy.get('#ego_secret');
    pswdInput.clear();
    pswdInput.type(pswd);
    
    return this;
  }
  
  submit() {
    const submitBtn = cy.get('#ego_submit');
    submitBtn.click();
  }
  
  fillLoginForm(email, pswd) {
    this.fillEmail(email);
    this.fillPswd(pswd);
    this.submit()
  }
  
}

export default LoginPage;