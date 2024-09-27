import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  public openHostingerPage() {
    return super.openPage();
  }
  public get chooseBusinessPlanButton() {
    return $(
      'button[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business"]'
    );
  }
  public get acceptCookieButton() {
    return $('button[data-click-id="hgr-cookie_consent-accept_all_btn"]');
  }
  public get loginButton() {
    return $('div[class="h-navigation__login"]');
  }
}

export default new HomePage();