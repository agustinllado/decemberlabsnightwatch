module.exports = {
    url: '',
    elements: {
        nameText: 'input[type="name"]',
        emailText: '.row input[name="email"]',
        phoneText: 'input[type="tel"]',
        linkedinText: 'input[type="link"]',
        chooseFileUploader: '#file_name',
        commentsText: 'textarea[name="comments"]',
        submitButton: '.row input[type="submit"]',
        successText: '.join-us-success .big_text'
    },
    commands: [{
        setName(name) {
            return this
                .waitForElementVisible('@nameText')
                .setValue('@nameText', name);
        },

        setEmail(email) {
            return this
                .waitForElementVisible('@emailText')
                .setValue('@emailText', email)
        },

        setPhone(phone) {
            return this 
                .waitForElementVisible('@phoneText')
                .setValue('@phoneText', phone)
        },

        setLinkedin(linkedin) {
            return this
                .waitForElementVisible('@linkedinText')
                .setValue('@linkedinText', linkedin)
        },

        setComments(comments) {
            return this 
                .waitForElementVisible('@commentsText')
                .setValue('@commentsText', comments)
        },

        chooseFile(routeToFile) {
            return this
                .waitForElementVisible('@chooseFileUploader')
                .setValue('@chooseFileUploader', routeToFile)
        },

        submitJoinUsForm() {
            return this
                .waitForElementVisible('@submitButton')
                .click('@submitButton')
        },

        assertSuccessText() {
            return this
                .waitForElementVisible('@successText')
                .assert.containsText('@successText', 'Success')
        }
    }]
}