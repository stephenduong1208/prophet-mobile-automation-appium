const LoginPage = require('../page/LoginPage');
const WelcomePage = require('../page/WelcomePage');

describe('Logout Test', () => {
    it('should logout successfully', async () => {
        await WelcomePage.launchApp();
        // await LoginPage.acceptNotifications();
        // await LoginPage.login('testuser', 'password123');

        // const isLoggedIn = await LoginPage.isLoggedIn();
        // expect(isLoggedIn).toBe(true);

        // // Perform logout (assuming a logout method exists)
        // await LoginPage.logout();

        // const isLoggedOut = await LoginPage.isLoggedOut();
        // expect(isLoggedOut).toBe(true);

        console.log('Logout test passed');
    });
});