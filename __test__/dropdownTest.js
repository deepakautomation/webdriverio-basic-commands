const dropdown = require("../pages/dropdownpage");

describe("DD", function(){

    it("DD test", function(){


    browser.url("https://facebook.com")
    browser.pause(14000)
    dropdown.month.selectByAttribute("value","4");
    browser.pause(4000)
    dropdown.month.selectByIndex(12);
    browser.pause(4000)
    dropdown.month.selectByVisibleText("Oct");
    browser.pause(4000)

})

})