document.addEventListener('keydown', function(event) {
    var message = ('Key Pressed: ');
    if (event.altKey) {
        message += ' Alt';
        alert(message);
    }
    if (event.ctrlKey) {
        message += ' Ctrl';
        alert(message);
    }
    if (event.shiftKey) {
        message += ' Shift';
        alert(message);
    }

});

var inputField = document.querySelector('.inputField');
inputField.addEventListener('keydown', function(event) {
    var controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'];
    if (isNaN(event.key) && !controlKeys.includes(event.key)) {
        event.preventDefault()
    }
});
