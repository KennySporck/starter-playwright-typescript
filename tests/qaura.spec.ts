import { test } from "@framework/test.js";
import { expect } from "@playwright/test";

test("has logo", async ({ page, homePage }) => {
  await page.goto(homePage.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
  await expect(page).toHaveTitle(/QAura/);
});

test("has introduction", async ({ page, homePage }) => {
  await page.goto(homePage.url);

  // Expect the introduction to have the exact text.
  await expect(homePage.headingIntroduction).toHaveText(
    "At QAura, we are dedicated to redefining quality assurance with a focus on innovation and sustainability. Our advanced software testing solutions empower businesses to create robust and eco-friendly digital products.",
  );

  // Expect the page to be fully loaded before taking a screenshot.
  await page.waitForLoadState("networkidle");

  // Expect that it looks correct.
  await expect(homePage.headingIntroduction).toHaveScreenshot();
});

test("has contact us link", async ({ page, homePage, contactUsPage }) => {
  await page.goto(homePage.url);

  // Click the contact us link.
  await homePage.linkContactUs.click();

  // Expects page to have a heading with the name of Contact Us.
  await expect(page).toHaveTitle(/Contact Us/);

  await expect(contactUsPage.headingContactUs).toBeVisible();

  // Expects page to have a URL of /contactus.
  await expect(page).toHaveURL(contactUsPage.url);
});
