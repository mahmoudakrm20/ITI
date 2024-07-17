var inputString = prompt("Enter a string:");
function countEs() {
    var count = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'e' || inputString[i] === 'E') {
            count++;
        }
    }
    return count;
}
alert(`${countEs()}`)
