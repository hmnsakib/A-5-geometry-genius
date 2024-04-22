// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    inputField.value = '';
    return inputValue;
}

// get inner text
function getInnerText(inputId) {
    const elementField = document.getElementById(inputId);
    const elementText = elementField.innerText;
    return elementText;
}
document.getElementsByTagName
// set value
function setTextValue(inputId, newValue) {
    const elementField = document.getElementById(inputId);
    elementField.innerText = newValue;
}

// show result in area calculation
function showResult(inputId, result) {
    const elementField = document.getElementById(inputId);
    elementField.style.display = 'grid';

    const resultFeild = document.getElementById(inputId).childNodes[3].childNodes[1];
    resultFeild.innerText = result;
}