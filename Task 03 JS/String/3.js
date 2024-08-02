function validateName(name) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateAge(age) {
    var regex = /^(?:1[01][0-9]|120|[1-9][0-9]|[1-9])$/;
    return regex.test(age);
}

function validateAndDisplayInfo() {
    var name = prompt("Please enter your name:");
    if (!validateName(name)) {
        alert("Invalid name. Please enter alphabets and spaces only.");
        validateAndDisplayInfo(); // Re-prompt for name
        return;
    }
    alert("Name is valid!");

    var email = prompt("Please enter your email:");
    if (!validateEmail(email)) {
        alert("Invalid email address. Please enter a valid email.");
        validateAndDisplayInfo(); // Re-prompt for email
        return;
    }
    alert("Email is valid!");

    var age = prompt("Please enter your age:");
    if (!validateAge(age)) {
        alert("Invalid age. Please enter a valid age between 1 and 120.");
        validateAndDisplayInfo(); // Re-prompt for age
        return;
    }
    alert("Age is valid!");

    alert("Welcome, " + name + "!\n\n" +
          "Email: " + email + "\n" +
          "Age: " + age);
}

validateAndDisplayInfo();
