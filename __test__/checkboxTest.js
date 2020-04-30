const checkbox = require('../pages/checkboxpage')

describe("perform action on checkbox", function(){

    it("locate and click on checkbox", function(){

        browser.url("https://the-internet.herokuapp.com/checkboxes")
        
        checkbox.clickoncheckbox(1);
        browser.pause(5000)

        expect(checkbox.getcheckboxElement(1).isSelected()).equals(true)
    })

    it("verify url", function(){

        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/checkboxes")
    })
})