class LoginPage {
    constructor() {
        this.usernameField = '~username'; // Replace with actual selector
        this.passwordField = '~password'; // Replace with actual selector
        this.loginButton = '~login'; // Replace with actual selector
        this.homeScreen = '~home'; // Replace with actual selector
    }

    async acceptNotifications() {
        try {
            const allowButton = await driver.$('~Allow'); // Adjust selector as needed
            if (await allowButton.isDisplayed()) {
                await allowButton.click();
                console.log('Notification permission accepted');
            }
        } catch (error) {
            console.log('No notification prompt displayed');
        }
    }

    async login(username, password) {
        const usernameField = await driver.$(this.usernameField);
        const passwordField = await driver.$(this.passwordField);
        const loginButton = await driver.$(this.loginButton);

        await usernameField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();
    }

    async isLoggedIn() {
        try {
            const homeScreen = await driver.$(this.homeScreen);
            return await homeScreen.isDisplayed();
        } catch (error) {
            return false;
        }
    }
}

module.exports = new LoginPage();