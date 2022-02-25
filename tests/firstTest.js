module.exports = {
    'My first test case'(browser) {
        browser.url('https://news.ycombinator.com')
        .waitForElementVisible('.hnname')
        .assert.containsText('.hnname', "Hacker News");
    },

    'My second test case' (browser) {
        browser.url('https://news.ycombinator.com')
        .waitForElementVisible('.hnname')
        .assert.containsText('.hnname', "Hacker News");
    }
}