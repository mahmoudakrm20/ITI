var inputField = document.getElementById("Answer");
var operators = ["+", "-", "/", "*"];
var afterCalc = false
function EnterNumber(value) {
    if (afterCalc){
        inputField.value = "";
        afterCalc=false
    }
    inputField.value += value;
}

function EnterOperator(value) {
    if (!operators.includes(inputField.value.slice(-1))) {
        inputField.value += value;
    }
    afterCalc = false
}

function EnterClear() {
    inputField.value = ""
    afterCalc = false
}

function EnterEqual () {
    var inputValue = inputField.value
    if (!operators.includes(inputField.value.slice(-1))) {
        var calculate = eval(inputField.value)
        inputField.value = calculate
        afterCalc = true

    }
    if (inputValue.includes("/0")) {
        inputField.value = "Error: Division by zero";
        afterCalc = true
    }
}

inputField.addEventListener('keydown', function(event) {
    if (event.key=="Enter") {
        EnterEqual()
    }
});
// divide by zero Case 
// reset after result