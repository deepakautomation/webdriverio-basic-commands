describe("Interaction with the webelements", function(){

    it("Enter value in field", function(){

        browser.url("/");
        const searchBox = $("//input[@id='twotabsearchtextbox']");
        searchBox.setValue("laptop")
        

    })

    it("get text of the field", function(){

        const label = $("//span[@class='a-size-base a-color-base']");
        let text = label.getText();
        console.log(`Text of the label is: ${text}`)

    })

    it("click button", function(){

        const clickLink = $("//a[contains(text(),'Click to learn')]");
        clickLink.click();
        browser.pause(5000)

    })
})