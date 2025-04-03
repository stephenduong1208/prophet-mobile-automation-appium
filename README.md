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

To run on browser stack

```env
BROWSERSTACK_USER=your_username
BROWSERSTACK_KEY=your_access_key
```

### Run Tests Locally

Should add uuid of your android device into realdevice.js

```bash
DEVICE=realdevice npx wdio run config/wdio.local.conf.js
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

## Using Appium Inspector

Appium Inspector is a tool that allows you to inspect the UI elements of your mobile application. It helps in identifying the locators for your automation scripts.

### Steps to Use Appium Inspector

1. **Download and Install Appium Inspector**
   - Visit the [Appium Inspector GitHub page](https://github.com/appium/appium-inspector) to download the latest version for your operating system.

2. **Start Appium Server**
   - Ensure that the Appium server is running on your machine. You can start it using the Appium Desktop application or via the command line.

3. **Connect Appium Inspector**
   - Open Appium Inspector and configure the desired capabilities to connect to your mobile device or emulator. Example capabilities:
     ```json
     {
       "platformName": "Android",
       "platformVersion": "11.0",
       "deviceName": "YourDeviceName",
       "app": "/path/to/your/app.apk",
       "automationName": "UiAutomator2"
     }
     ```

4. **Inspect Elements**
   - Once connected, you can interact with your application and inspect the UI elements. Use the provided locators (e.g., `id`, `xpath`) in your automation scripts.

5. **Save and Use Locators**
   - Save the locators for the elements you want to automate and use them in your test scripts.

For more details, refer to the [Appium Inspector Documentation](https://appium.io/docs/en/about-appium/intro/).

## Folder Structure

- `tests/` - Contains your test specs.
- `config/` - WebDriverIO configuration files.
- `utils/` - Utility functions/helpers.
- `reports/` - Allure reports output.
- `page/` - Contains your page object files.

## Sample Test

See `tests/sample.test.js` for a working example.

## Notes

- Make sure Appium is installed and running for local tests.
- BrowserStack credentials are required for cloud execution.