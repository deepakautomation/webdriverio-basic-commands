const moveToPage = require('../pages/moveTopage');

describe("Test move to element feature", function(){

    it("move to element", function(){

        browser.url("https://www.spicejet.com/")
        moveToPage.moveToElement(moveToPage.loginLink)
        moveToPage.moveToElement(moveToPage.member)
        moveToPage.moveToElementAndClick(moveToPage.memberLogin)

    })

})