import { defineConfig, devices } from "@playwright/test";
import { type TestmoReporterOptions } from "playwright-testmo-reporter";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import "dotenv/config";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html"],
    [
      "playwright-testmo-reporter",
      {
        outputFile: "testmo/testmo.xml", // Optional: Output file path. Defaults to 'testmo.xml'.
        embedBrowserType: false, // Optional: Embed browser type in the XML file. Defaults to false.
        embedTestSteps: true, // Optional: Embed test steps in the XML file. Defaults to true.
        testStepCategories: ["hook", "expect", "pw:api", "test.step"], // Optional: Test step categories to include in the XML file. Defaults to ["hook","expect","pw:api","test.step"]. Possible options are "hook", "expect", "pw:api", "test.step".
        testTitleDepth: 2, // Optional: Test case title depth to report in the XML file. Defaults to 1. Increase this to 2 include suite name. Increase this even further to include the path.
        includeTestSubFields: true, // Optional: Include test sub fields in the XML file. Defaults to false.
      } satisfies TestmoReporterOptions,
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    /* Collect screenshots when the test fails. */
    screenshot: "only-on-failure",

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL ?? "https://qaura.be",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
