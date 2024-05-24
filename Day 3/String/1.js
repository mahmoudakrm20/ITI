var userInput = prompt('Enter a palindrome word:');
var considerCases = prompt('Do you want to consider cases? (yes/no)');

if (considerCases === 'no') {
    userInput = userInput.toLowerCase();
}

var userArray = Array.from(userInput);
userArray.reverse();

if (userArray.join("").toLowerCase() === userInput) {
    document.write('Valid palindrome');
} 
if (considerCases === 'yes' && userArray.join("") === userInput) {
    document.write('Valid palindrome');
}else {
    document.write('Not a valid palindrome');
}
