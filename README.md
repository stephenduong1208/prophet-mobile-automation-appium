# Prophet Mobile Automation

This is a mobile automation framework using Appium and WebDriverIO for both iOS and Android.
It supports execution on both local environments and BrowserStack.

## Features

- Appium + WebDriverIO
- Support for both Android and iOS
- Run tests locally or on BrowserStack
- Allure reporting integrated

## Installation

```bash
git clone https://your-repo-url/prophet-mobile-automation.git
cd prophet-mobile-automation
npm install
```

## Setup

### Environment Variables

Create a `.env` file at the root with the following content if using BrowserStack:

```env
BROWSERSTACK_USER=your_username
BROWSERSTACK_KEY=your_access_key
```

### Run Tests Locally

```bash
npx wdio run config/wdio.local.conf.js
```

### Run Tests on BrowserStack

```bash
npx wdio run config/wdio.browserstack.conf.js
```

### Generate Allure Report

```bash
allure generate reports/allure-results --clean -o reports/allure-report
allure open reports/allure-report
```

## Folder Structure

- `tests/` - Contains your test specs.
- `config/` - WebDriverIO configuration files.
- `utils/` - Utility functions/helpers.
- `reports/` - Allure reports output.

## Sample Test

See `tests/sample.test.js` for a working example.

## Notes

- Make sure Appium is installed and running for local tests.
- BrowserStack credentials are required for cloud execution.