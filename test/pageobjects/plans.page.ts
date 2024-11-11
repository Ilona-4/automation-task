import Page from "./page.js";

class PlansPage extends Page {

  get getStartedButton() {
    return $$('a[href="/try-premium/"]')[2];
  }

  get emailAddressInput() {
    return $$('[id*="input-label"]')[1]
  }

  get getSubmitButton() {
    return $$('button[type="submit"]')[1]
  }
}

export default new PlansPage();
