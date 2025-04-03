const ENV = process.env.ENV || 'staging';
const appPackage = process.env.APP_PACKAGE || `com.prophetxsweepstake.${ENV}`;

module.exports = {
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': process.env.REAL_DEVICE_NAME || 'Android',
        'appium:platformVersion': process.env.REAL_DEVICE_VERSION || '15.0',
        'appium:udid': process.env.REAL_DEVICE_UDID || 'R5CT82L7TLF',
        'appium:appPackage': appPackage,
        'appium:appActivity': process.env.APP_ACTIVITY || 'com.prophetxsweepstake.MainActivity t8898',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        // 'appium:noReset': true
    }],
};