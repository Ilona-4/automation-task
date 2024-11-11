import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  public openNordpassPage() {
    return super.openPage();
  }

  get loginButton() {
    return $('li[data-testid="header-nav-login"] button');
  }

  getLoginOption(index: number) {
    return $(
      `li[data-testid="header-nav-login"] a[data-testid="header-nav-${index}"]`
    );
  }

  get personalPlanButton() {
    return $('span a[href="/plans/"]');
  }

  get cookieBannerAcceptButton() {
    return $('[data-testid="consent-widget-accept-all"]')
  }
}

export default new HomePage();