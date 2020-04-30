class HomePage{

get customerService(){
    return $("//a[contains(text(),'Customer Service')]");
}

get allLinks(){
    return $$("//a")
}

}

module.exports = new HomePage();