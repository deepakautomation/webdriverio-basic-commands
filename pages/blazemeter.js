class BlazeMeter{


get linksListParent(){
    return $("//ul[@class='list-nav-links']")
}

getSpecificElement(index){
    
    return this.linksListParent.$(`//li[${index}]`)
}

clickOnCustomers(){
    if(this.linksListParent.isDisplayed()){
        this.linksListParent.click();
    }
}

}

module.exports = new BlazeMeter();