const fs = require('fs');
const allure = require('@wdio/allure-reporter').default;

require('dotenv').config();
const path = require('path');

const baseConfig = require('./wdio.conf.js');

// Load environment-specific settings
const device = process.env.DEVICE || 'local';
const environmentConfig = require(`./${device}.js`);

exports.config = {
    ...baseConfig.config,
    ...environmentConfig,
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (passed) {
            // Stop screen recording
            const video = await driver.stopRecordingScreen();

            // Save the video to a file
            const videoPath = `./reports/allure-results/${test.title.replace(/\s+/g, '_')}.mp4`;
            fs.writeFileSync(videoPath, video, 'base64');

            // Attach the video to the Allure report
            allure.addAttachment('Screen Recording', Buffer.from(video, 'base64'), 'video/mp4');
        }
    },
    beforeTest: async function () {
        // Start screen recording before each test
        await driver.startRecordingScreen();
    },
};