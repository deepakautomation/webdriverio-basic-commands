const blazemeter = require('../pages/blazemeter')

describe("fetch text", function(){

    it("fetch specific text", function(){

        browser.url("https://www.blazemeter.com/");
        let text = blazemeter.getSpecificElement(2).getText()
        console.log("element is :"+text)

    })

    it("click on customers", function(){

        blazemeter.clickOnCustomers();
        browser.pause(5000)

    })
})