import { BasePage } from "@framework/base.page.js";
import { Locator } from "@playwright/test";

export class HomePage extends BasePage {
  readonly href = "/";
  readonly linkLogo: Locator = this.page.getByRole("link", {
    name: "Logo of QAura",
  });
  readonly headingIntroduction: Locator = this.page.getByRole("heading", {
    name: "At QAura, we are dedicated to",
  });
  readonly linkContactUs: Locator = this.page
    .getByLabel("Main")
    .getByRole("link", { name: "Contact us" });
}
