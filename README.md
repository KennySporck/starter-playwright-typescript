# starter-playwright-typescript

A Template for Playwright using TypeScript, Page Object Models, Parametrized Tests, Flows, and more.

## Table of contents

1. [Project description](#project-description)
2. [Who this project is for](#who-this-project-is-for)
3. [Project dependencies](#project-dependencies)
4. [Instructions for using starter-playwright-typescript](#instructions-for-using-starter-playwright-typescript)
   1. [Install starter-playwright-typescript](#install-starter-playwright-typescript)
   2. [Configure starter-playwright-typescript](#configure-starter-playwright-typescript)
   3. [Run starter-playwright-typescript](#run-starter-playwright-typescript)
   4. [Troubleshoot starter-playwright-typescript](#troubleshoot-starter-playwright-typescript)
5. [Contributing guidelines](#contributing-guidelines)
6. [Additional documentation](#additional-documentation)
7. [How to get help](#how-to-get-help)
8. [Terms of use](#terms-of-use)

## Project description

With **starter-playwright-typescript**, you can streamline your end-to-end testing using Playwright with TypeScript. This template integrates advanced testing techniques such as Page Object Models, parametrized tests, and user flows, making it easier to write and maintain robust tests.

**starter-playwright-typescript** helps you accelerate the setup of end-to-end testing projects with a solid structure and best practices.

Unlike basic Playwright setups, **starter-playwright-typescript** offers a comprehensive framework out of the box, including:

- TypeScript support
- Page Object Models for better test maintainability
- Parametrized tests for more flexible testing scenarios
- Flows to represent complex user interactions

<!-- ![Screenshot](./docs/screenshot.png)  Optional: Include a screenshot if available -->

## Who this project is for

This project is intended for developers and QA engineers who want to implement end-to-end tests efficiently using Playwright with TypeScript. It's ideal for teams looking for a structured starting point for writing scalable and maintainable tests.

## Project dependencies

Before using **starter-playwright-typescript**, ensure you have:

- Node.js (v18 or later)
- npm
- git

## Instructions for using starter-playwright-typescript

Get started with **starter-playwright-typescript** by following these steps:

### Install starter-playwright-typescript

1. Clone the repository:

   ```bash
   git clone https://github.com/QAura-NV/starter-playwright-typescript.git
   ```

   This creates a local copy of the project.

2. Install dependencies:

   ```bash
   cd starter-playwright-typescript
   npm install
   ```

   This installs all necessary packages for the project.

### Configure starter-playwright-typescript

1. Update Playwright configuration:

   Modify `playwright.config.ts` to adjust settings according to your needs.

2. Set up environment variables:

   Create a `.env` file in the root directory and define any necessary environment variables.

### Run starter-playwright-typescript

1. Run tests:

   ```bash
   npm test
   ```

   This runs all the end-to-end tests defined in your project.

### Troubleshoot starter-playwright-typescript

1. **Issue: Tests are failing with a timeout error.**

   **Solution:** Increase the timeout setting in `playwright.config.ts` or ensure that your application is running correctly.

2. **Issue: Page Object Models are not found.**

   **Solution:** Check that the file paths in your imports are correct and that the Page Object Models are correctly defined.

3. **Issue: Parametrized tests are not executing as expected.**

   **Solution:** Verify the parameters being passed and check if the test cases are correctly set up to handle different inputs.

Other troubleshooting supports:

- [FAQs](https://github.com/QAura-NV/starter-playwright-typescript/wiki/FAQs)
- [Runbooks](https://github.com/QAura-NV/starter-playwright-typescript/wiki/Runbooks)
- [Community Support](https://github.com/QAura-NV/starter-playwright-typescript/issues)

## Contributing guidelines

We welcome contributions to **starter-playwright-typescript**! Please refer to our [Contributing Guide](https://github.com/QAura-NV/starter-playwright-typescript/blob/main/CONTRIBUTING.md) for detailed instructions on how to contribute.

## Additional documentation

For more information:

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Page Object Model Pattern](https://martinfowler.com/bliki/PageObject.html)

## How to get help

Here’s how to get help, share ideas, or ask questions:

- Post issues or questions on our [GitHub Issues](https://github.com/QAura-NV/starter-playwright-typescript/issues).
- Join discussions and seek help in our [Community Forum](https://github.com/QAura-NV/starter-playwright-typescript/discussions).

## Terms of use

**starter-playwright-typescript** is licensed under the [ISC License](https://github.com/QAura-NV/starter-playwright-typescript/blob/main/LICENSE).
