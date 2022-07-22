import LoginPage from '../pages/LoginPage.cy'
import VerticalMenuPage from '../pages/VerticalMenuPage.cy'
import HorizontalMenuPage from '../pages/HorizontalMenuPage.cy'
import NewEmailPage from '../pages/NewEmailPage.cy'
import SharedPage from '../pages/SharedPage.cy'

let date = Date()
let centrumLoginEmailUrl = 'https://user.centrum.cz/'
let centrumEmailUrl = 'https://mail.centrum.cz/'
let centrumMainUrl = 'https://www.centrum.cz'
let email = 'automation.tester@centrum.cz'
let pswd = 'Testing123456'
let subjectText = 'This is subject: ' + date;
let imagePath = 'C:/Users/Patrik/Pictures/testing_pic.png' //needs to be reconfigured for some specific test file from local disk

describe('Email login test', () => {
  it('Login into email, send email and logout', () => {
    const loginPage = new LoginPage();
    const verticalMenuPage = new VerticalMenuPage();
    const newEmailPage = new NewEmailPage();
    const horizontalMenuPage = new HorizontalMenuPage();
    const sharedPage = new SharedPage();
   
    cy.viewport(1800, 1100)
    cy.visit(centrumLoginEmailUrl)
      sharedPage.checkUrl(centrumLoginEmailUrl)
      loginPage.checkLoginFormIsVisible()
      loginPage.fillLoginForm(email, pswd)
      sharedPage.checkUrl(centrumEmailUrl)
      verticalMenuPage.composeNewEmail()
      newEmailPage.createNewEmail(email, subjectText, imagePath)
      newEmailPage.checkSendBtnNotVisible()
      verticalMenuPage.goToSentEmails()
        cy.xpath('//div[@class="list-object"]').first().should('include.text', subjectText)
      horizontalMenuPage.logout()
      sharedPage.checkUrl(centrumMainUrl);
  })
})
