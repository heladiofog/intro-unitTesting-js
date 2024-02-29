# UI Testing with Playwright

## Setup for UI tests
This folder contains a sample Node application that is empty.
It will only include a basic [Playwright](https://playwright.dev/) installation and a couple of examples with this tessting Framework.

## Setting up and configurations for the project

1. First an empty node project is created in a new folder: `npm init -y`

2. Then just follos the instructions from the [Playwright documentation](https://playwright.dev/docs/intro):
  - `npm init playwright@latest`
     - Follow the instructions and at the end you will have in place the mentioned examples ready to be run.
3. Run the examples:
  - `npx playwright test`
4. Generate an HTML Test Report:
  - `npx playwright show-report`
5. Finally you can run the example with th UI Mode:
  - `npx playwright test --ui`
And you can stop it with:

Continue exploring and learning this framework alog with its [documentation](https://playwright.dev/docs/writing-tests).
