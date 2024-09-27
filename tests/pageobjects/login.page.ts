import Page from "./page.js";

class LoginPage extends Page {
  public get loginButton() {
    return $('button[data-qa="login-button"]');
  }
  getLoginField(fieldName: string) {
    return $(`div[data-qa="registration-${fieldName}-input"]`);
  }
  getLoginFieldValidationMessage(fieldName: string) {
    return this.getLoginField(fieldName)
      .$('p[data-qa="input-error"]')
      .getText();
  }
  getLoginFieldInput(fieldName: string) {
    return this.getLoginField(fieldName).$('input[class="h-input__input"]');
  }
}

export default new LoginPage();
