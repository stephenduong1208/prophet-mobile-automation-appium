const ENV = process.env.ENV || 'staging';
const appPackage = process.env.APP_PACKAGE || `com.prophetxsweepstake.${ENV}`;

module.exports = {
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '15.0',
        'appium:appPackage': appPackage,
        'appium:appActivity': process.env.APP_ACTIVITY || 'com.prophetxsweepstake.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        // 'appium:noReset': true
    }],
};