import CartPage from "../pageobjects/cart.page.js";
import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";

describe("Login page validation tests", () => {
  const EMAIL_FIELD = "email";
  const PASSWORD_FIELD = "password";
  const TWENTY_FOUR_MONTHS_PERIOD = "24 months";
  const INVALID_EMAIL_MESSAGE = "Invalid email format";
  const INVALID_PASSWORD_MESSAGE =
    "Password must be at least 8 characters long";
  const invalidEmail = "invalidEmailFormat";
  const shortPassword = "short";

  before(async () => {
    await HomePage.openHostingerPage();
    await HomePage.acceptCookieButton.click();
    await HomePage.chooseBusinessPlanButton.waitForDisplayed();
    await HomePage.chooseBusinessPlanButton.click();
    await CartPage.periodSelector.waitForDisplayed();

    //Two lines below are workaround because of the bug. Bug: when period is selected, loader on countinue button loops.
    await browser.back();
    await HomePage.chooseBusinessPlanButton.click();

    await CartPage.periodSelector.click();
    await (await CartPage.getPeriodOption(TWENTY_FOUR_MONTHS_PERIOD)).click();
    await CartPage.continueButton.click();
    await LoginPage.getLoginFieldInput(EMAIL_FIELD).waitForDisplayed();
  });

  it("should validate email field", async () => {
    await LoginPage.getLoginFieldInput(EMAIL_FIELD).addValue(invalidEmail);
    const validationMessage = await LoginPage.getLoginFieldValidationMessage(
      EMAIL_FIELD
    );
    expect(validationMessage).toEqual(INVALID_EMAIL_MESSAGE);
  });

  it("should validate password field", async () => {
    await LoginPage.getLoginFieldInput(PASSWORD_FIELD).addValue(shortPassword);
    const validationMessage = await LoginPage.getLoginFieldValidationMessage(
      PASSWORD_FIELD
    );
    expect(validationMessage).toEqual(INVALID_PASSWORD_MESSAGE);
  });
});
