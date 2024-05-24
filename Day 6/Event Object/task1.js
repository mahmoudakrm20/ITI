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
