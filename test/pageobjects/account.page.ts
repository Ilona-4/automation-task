import Page from "./page.js";

class AccountPage extends Page {
  get userProfileButton() {
    return $('button[data-testid="Desktop__navigation-bar-user-email"]');
  }
}
export default new AccountPage();
