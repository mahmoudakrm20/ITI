var inputField = document.querySelector('.inputField');
var icon = document.querySelector('#icon');
icon.addEventListener('click', function() {
    if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    
    } else {
        inputField.type = "password";
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }
});
