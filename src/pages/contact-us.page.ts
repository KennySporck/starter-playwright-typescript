import { BasePage } from "@framework/base.page.js";
import { Locator } from "@playwright/test";

export class ContactUsPage extends BasePage {
  readonly url = "/contactus";

  readonly headingContactUs: Locator = this.page
    .locator("#wrap")
    .getByRole("list")
    .getByText("Contact us");
}
