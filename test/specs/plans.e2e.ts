import { generateRandomEmail } from "../helpers/utils.js";
import { waitForUrlToContain } from "../helpers/navigation.js";
import HomePage from "../pageobjects/home.page.js";
import PlansPage from "../pageobjects/plans.page.js";

describe("Plan tests", () => {
  const USER_EMAIL = generateRandomEmail();

  before(async () => {
    await HomePage.openNordpassPage();
    await HomePage.cookieBannerAcceptButton.click();
  });

  it("should by able to choose free personal plan", async () => {
    await HomePage.personalPlanButton.click();
    await PlansPage.getStartedButton.click();
    await PlansPage.emailAddressInput.addValue(USER_EMAIL);
    await PlansPage.getSubmitButton.click();

    await waitForUrlToContain('https://chromewebstore.google.com/detail/nordpass%C2%AE-password-manage/');
  });
});

