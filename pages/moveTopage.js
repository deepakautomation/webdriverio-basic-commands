class moveToPage{


get loginLink(){
    return $("#ctl00_HyperLinkLogin");
}
get member(){
    return $("=SpiceClub Members");
}
get memberLogin(){
    return $("=Member Login");
}

moveToElement(element){
    element.waitForDisplayed();
    element.moveTo();
}

moveToElementAndClick(element){
    element.waitForDisplayed();
    element.moveTo();
    element.click();
}



}

module.exports = new moveToPage();