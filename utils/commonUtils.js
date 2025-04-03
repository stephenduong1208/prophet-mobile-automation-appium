// Utility to generate random strings
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Utility to wait for a specific time
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Utility to format dates
function formatDate(date, format = 'YYYY-MM-DD') {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const [month, day, year] = new Intl.DateTimeFormat('en-US', options).format(date).split('/');
    return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}

module.exports = {
    generateRandomString,
    wait,
    formatDate
};