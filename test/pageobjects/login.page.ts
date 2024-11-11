import Page from "./page.js";

class LoginPage extends Page {
  get usernameOrEmailInput() {
    return $('input[data-testid="identifier-input"]');
  }
  get passwordInput() {
    return $('input[data-testid="signin-password-input"]');
  }
  get loginButton() {
    return $('button[data-testid="signin-button"]');
  }
  get countinueButton() {
    return $('button[data-testid="identifier-submit"]');
  }
}

export default new LoginPage();
