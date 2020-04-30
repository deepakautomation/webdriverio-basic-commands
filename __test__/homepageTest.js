const homePage = require('../pages/homepage');

describe("fetch the text of the webelements", function(){

    it("fetch text of the linktext", function(){

        browser.url("https://amazon.com")
        let customerLink = homePage.customerService.getText();
        console.log(`Text of the label is: ${customerLink}`)

    })

})