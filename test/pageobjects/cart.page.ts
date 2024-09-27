import { $ } from "@wdio/globals";
import Page from "./page.js";

class CartPage extends Page {
  public get periodSelector() {
    return $('div[class="cart-periods-select__select"]');
  }
  public get continueButton() {
    return $('button[data-qa="continue-button"]');
  }
  getPeriodOption(period: string) {
    return $(`//*[@data-qa="dropdown-option" and contains(., "${period}")]`);
  }
}

export default new CartPage();