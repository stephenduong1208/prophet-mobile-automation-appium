exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['../tests/**/*.js'],
    maxInstances: 1,
    mochaOpts: {
        timeout: 90000 // Set timeout for all specs to 90 seconds
    },
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
    services: ['appium']
};