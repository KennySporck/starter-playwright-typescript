import { test } from "@framework/test.js";
import { expect } from "@playwright/test";

test.describe("QAura - Home", () => {
  test("has title", async ({ homePage }) => {
    await homePage.page.goto(homePage.href);

    await expect(homePage.page).toHaveTitle(/Home/);
    await expect(homePage.page).toHaveTitle(/QAura/);
  });

  test("has introduction", async ({ homePage }) => {
    await homePage.page.goto(homePage.href);
    await homePage.page.waitForLoadState("networkidle");

    await expect(homePage.headingIntroduction).toHaveText(
      "At QAura, we are dedicated to redefining quality assurance with a focus on innovation and sustainability. Our advanced software testing solutions empower businesses to create robust and eco-friendly digital products.",
    );
    await expect(homePage.headingIntroduction).toHaveScreenshot();
  });

  test("has contact us link", async ({ homePage, contactUsPage }) => {
    await homePage.page.goto(homePage.href);

    await homePage.linkContactUs.click();

    await expect(contactUsPage.page).toHaveURL(contactUsPage.href);
  });
});

test.describe("QAura - Contact Us", () => {
  test("has contact us link", async ({ homePage, contactUsPage }) => {
    await homePage.page.goto(contactUsPage.href);

    await expect(contactUsPage.page).toHaveTitle(/Contact Us/);
    await expect(contactUsPage.headingContactUs).toBeVisible();
    await expect(contactUsPage.page).toHaveURL(contactUsPage.href);
  });
});
