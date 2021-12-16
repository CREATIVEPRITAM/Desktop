function getNumricValue(elementId){
    return parseInt(document.getElementById(elementId).value);
}

function setElementValue(elementId,value,typeElement){
    if(typeElement == "SOHAM"){
        document.getElementById(elementId).value = value;
    }else{
        document.getElementById(elementId).innerText = value;
    }
}