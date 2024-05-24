var numberInput = prompt("Enter a number to find it's square root");
var number = parseFloat(numberInput);

if (!isNaN(number)) {
    var squareRoot = Math.sqrt(number);
    alert("The square root of the number" + number + " is: " + squareRoot);
} else {
    alert("Please enter a number");
}