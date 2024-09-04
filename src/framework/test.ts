import { ContactUsPage } from "@pages/contact-us.page.js";
import { HomePage } from "@pages/home.page.js";
import { test as baseTest } from "@playwright/test";

type TestFixtures = {
  homePage: HomePage;
  contactUsPage: ContactUsPage;
};
type WorkerFixtures = {};

export const test = baseTest.extend<TestFixtures, WorkerFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
});
