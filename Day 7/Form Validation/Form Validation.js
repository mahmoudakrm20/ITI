var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var emailInput = document.getElementById('email');


var addButton = document.querySelector('.addButton');
var resetButton = document.querySelector('.resetButton');

var tBody = document.querySelector('#tBody')

const nameRegex = /^[A-Za-z\s]+$/;
const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

resetButton.addEventListener('click' , function(){
    document.querySelector(".name-span").style.display = 'none';
    document.querySelector(".email-span").style.display = 'none';
    document.querySelector(".age-span").style.display = 'none';
})

addButton.addEventListener('click', function(){
    if (nameInput.value == "") {
        document.querySelector(".name-span").innerText = "This field is required";
        document.querySelector(".name-span").style.display = 'block';
    }
    if (ageInput.value == "") {
        document.querySelector(".age-span").innerText = "This field is required";
        document.querySelector(".age-span").style.display = 'block';
    }
    if (emailInput.value == "") {
        document.querySelector(".email-span").innerText = "This field is required";
        document.querySelector(".email-span").style.display = 'block';
    }


    if (!nameInput.value == "") {
        document.querySelector(".name-span").style.display = 'none';
    }
    if (!ageInput.value == "") {
        document.querySelector(".age-span").style.display = 'none';
    }
    if (!emailInput.value == "") {
        document.querySelector(".email-span").style.display = 'none';
    }

    
    if (!nameRegex.test(nameInput.value) && !nameInput.value == "" ){
        document.querySelector(".name-span").innerText = "Please enter a valid format";
        document.querySelector(".name-span").style.display = 'block';
    }
    if (!ageRegex.test(ageInput.value)&& !ageInput.value == ""){
        document.querySelector(".age-span").innerText = "Please enter a valid format";
        document.querySelector(".age-span").style.display = 'block';
    }
    if (!emailRegex.test(emailInput.value)&& !emailInput.value == ""){
        document.querySelector(".email-span").innerText = "Please enter a valid format";
        document.querySelector(".email-span").style.display = 'block';
    }


    if (nameRegex.test(nameInput.value)&& ageRegex.test(ageInput.value) && emailRegex.test(emailInput.value)){
        tBody.innerHTML+=`
                <tr>
                    <td>${nameInput.value}</td>
                    <td>${ageInput.value}</td>
                    <td>${emailInput.value}</td>
                </tr>`
    }
})


