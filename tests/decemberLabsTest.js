module.exports = {
    "@tags": ["decemberLabs"],
    'Complete Join Our Team form' (browser) {

        const careersPage = browser.page.decemberLabsCareersPage();

        careersPage
            .navigate()
            .clickApply();
        
        const joinOurTeamForm = browser.page.joinOurTeamForm();
        joinOurTeamForm
            .setName('Test User')
            .setEmail('test@decemberlabs.com')
            .setPhone('098765432')
            .setLinkedin('https://www.linkedin.com/in/test')
            .setComments('this are test comments')
            .submitJoinUsForm()
            .assertSuccessText()
    }

}