class checkbox{


    getcheckboxElement(index){
        return $(`//input[@type='checkbox'][${index}]`)
    }

    clickoncheckbox(index){
        return this.getcheckboxElement(index).click();
    }

}

module.exports = new checkbox();