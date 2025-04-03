require('dotenv').config();
// const path = require('path');

// const baseConfig = require('./wdio.conf.js');

// // Load environment-specific settings
// const device = process.env.DEVICE || 'local';
// const environmentConfig = require(`./${device}.js`);

exports.config = {
    // ...baseConfig.config,
    // ...environmentConfig,
    runner: 'local',
    user: 'thuanduong_NFzuaJ',
    key: 'CpY6q4N5qRjrNtgwsa84',
    specs: ['../tests/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Samsung Galaxy S24',
        'appium:platformVersion': '15.0',
        'appium:app': 'bs://b7bcf0c1c6497ec69a8cfa74ec192a9c9bd066ab',
        'appium:automationName': 'UiAutomator2'
    }],
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
    services: ['browserstack'],
};