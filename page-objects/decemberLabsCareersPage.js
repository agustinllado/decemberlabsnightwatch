module.exports = {
    url: 'https://decemberlabs.com/careers',
    elements: {
        cultureOfInnovationButton: '.row.content_culture .button.modal-opener',
        mobileDevelopersButton: '.row.position.interested .button.modal-opener'


    },
    commands: [{
        clickApply(element) {
            const page = this;
            page
                .waitForElementVisible('@cultureOfInnovationButton')
                .click('@cultureOfInnovationButton');
        }
    }]
}