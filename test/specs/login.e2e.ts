import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import AccountPage from "../pageobjects/account.page.js";
import { generateRandomEmail } from "../helpers/utils.js";

describe("Login tests", () => {
  const USER_EMAIL = generateRandomEmail();
  const USER_PASSWORD = "testPassword.";

  before(async () => {
    await HomePage.openNordpassPage();
    await HomePage.loginButton.click();
    await HomePage.getLoginOption(1).click();
    await browser.switchWindow(
      "Quick, easy, and secure login with Nord Account."
    );
    await LoginPage.usernameOrEmailInput.waitForDisplayed();
  });

  it("should login user with valid email and password", async () => {
    await LoginPage.usernameOrEmailInput.addValue(USER_EMAIL);
    await LoginPage.countinueButton.click();
    await LoginPage.passwordInput.addValue(USER_PASSWORD);
    await LoginPage.loginButton.click();

    const userProfileButtonDisplayed =
      AccountPage.userProfileButton.isDisplayed;

    expect(userProfileButtonDisplayed).toEqual(true);
  });
});
