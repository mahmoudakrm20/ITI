var inputField = document.getElementById("Answer");
var operators = ["+", "-", "/", "*"];

function EnterNumber(value) {
    inputField.value += value;
}

function EnterOperator(value) {
    if (!operators.includes(inputField.value.slice(-1))) {
        inputField.value += value;
    }
   
}

function EnterClear() {
    inputField.value = ""
}

function EnterEqual () {
    if (!operators.includes(inputField.value.slice(-1))) {
        var calculate = eval(inputField.value)
        inputField.value = calculate
    }

}

inputField.addEventListener('keydown', function(event) {
    if (event.key=="Enter") {
        EnterEqual()
    }
});