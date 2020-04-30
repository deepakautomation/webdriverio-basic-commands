const homePage = require('../pages/homepage');

describe("fetch the text of the webelements", function(){

   

    it("fetch text of all the links", function(){

        browser.url("https://amazon.com")
        let links = homePage.allLinks;
        console.log(`Size of list is : ${links.length}`)

        links.forEach(element => {
            console.log(`links are: ${element.getText()}`)
        });

    })
})