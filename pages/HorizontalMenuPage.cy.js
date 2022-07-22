class HorizontalMenuPage{
  
  logout() {
    const logoutBtn = cy.contains('Odhlásit se');
    logoutBtn.click();
  }
  
}

export default HorizontalMenuPage;