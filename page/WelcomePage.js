class WelcomePage {
    constructor() {
        this.updateButtonLocator = '//*[@content-desc="Update"]';
        this.updateAppLabelLocator = '//*[@text="Update Available"]';
    }

    async ensureUpdateCompleted() {
        let isUpdateLabelVisible = true;
        while (isUpdateLabelVisible) {
            try {
                const updateLabel = await driver.$(this.updateAppLabelLocator);
                if (await updateLabel.isDisplayed()) {
                    await driver.$(this.updateButtonLocator).click();
                    console.log('Update button clicked');

                    // Wait for the update label to disappear
                    await driver.waitUntil(async () => {
                        return !(await updateLabel.isDisplayed());
                    }, {
                        timeout: 10000, // Adjust timeout as needed
                        timeoutMsg: 'Update label did not disappear within the timeout period'
                    });
                } else {
                    isUpdateLabelVisible = false;
                }
            } catch (error) {
                isUpdateLabelVisible = false; // Exit loop if element is not found
            }
        }
        console.log('Update process completed');
    }

    async launchApp() {
        await driver.pause(5000);
        await this.ensureUpdateCompleted();
        await driver.pause(3000);
    }
}

module.exports = new WelcomePage();