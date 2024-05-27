

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var genderInput = document.getElementById('gender');
var mobileInput = document.getElementById('mobile');
var addressInput = document.getElementById('address');
var submitButton = document.querySelector('.submitButton');
var resetButton = document.querySelector('.resetButton');
var userForm = document.getElementById('userForm')


var nameRegex = /^[A-Za-z\s]+$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var mobileRegex = /^0\d{9}$/;
var genderValidation = ['male','female'];


resetButton.addEventListener('click' , function(){
    document.querySelector(".name-span").style.display = 'none';
    document.querySelector(".address-span").style.display = 'none';
    document.querySelector(".email-span").style.display = 'none';
    document.querySelector(".mobile-span").style.display = 'none';
    document.querySelector(".gender-span").style.display = 'none';

})

userForm.addEventListener('submit', function(e){
    e.preventDefault()
    if (nameInput.value == "") {
        document.querySelector(".name-span").innerText = "This field is required";
        document.querySelector(".name-span").style.display = 'block';
    }
   
    if (emailInput.value == "") {
        document.querySelector(".email-span").innerText = "This field is required";
        document.querySelector(".email-span").style.display = 'block';
    }
    if (genderInput.value == "") {
        document.querySelector(".gender-span").innerText = "This field is required";
        document.querySelector(".gender-span").style.display = 'block';
    }
    if (addressInput.value == "") {
        document.querySelector(".address-span").innerText = "This field is required";
        document.querySelector(".address-span").style.display = 'block';
    }
    if (mobileInput.value == "") {
        document.querySelector(".mobile-span").innerText = "This field is required";
        document.querySelector(".mobile-span").style.display = 'block';
    }

    if (!nameInput.value == "") {
        document.querySelector(".name-span").style.display = 'none';
    }
   
    if (!emailInput.value == "") {
        document.querySelector(".email-span").style.display = 'none';
    }
    if (!addressInput.value == "") {
        document.querySelector(".address-span").style.display = 'none';
    }
   
    if (!genderInput.value == "") {
        document.querySelector(".gender-span").style.display = 'none';
    }
    if (!mobileInput.value == "") {
        document.querySelector(".mobile-span").style.display = 'none';
    }
    
    if (!nameRegex.test(nameInput.value) && !nameInput.value == "" ){
        document.querySelector(".name-span").innerText = "Please enter a valid format";
        document.querySelector(".name-span").style.display = 'block';
    }
   
    if (!emailRegex.test(emailInput.value)&& !emailInput.value == ""){
        document.querySelector(".email-span").innerText = "Please enter a valid format";
        document.querySelector(".email-span").style.display = 'block';
    }
    if (!mobileRegex.test(mobileInput.value)&& !mobileInput.value == "" ){
        document.querySelector(".mobile-span").innerText = "Please enter a valid format";
        document.querySelector(".mobile-span").style.display = 'block';
    }
    
    if (!genderValidation.includes(genderInput.value.toLowerCase())&& !genderInput.value == "" ){
        document.querySelector(".gender-span").innerText = "Please enter a valid format";
        document.querySelector(".gender-span").style.display = 'block';
    }
    if (nameRegex.test(nameInput.value) && emailRegex.test(emailInput.value)&&genderValidation.includes(genderInput.value.toLowerCase()) && addressInput.value !== "" && mobileRegex.test(mobileInput.value)){
        userForm.submit();  
    }
    
})

var url = new URLSearchParams(window.location.search);
var emailUrl = url.get('email');
var nameUrl = url.get('name');
var addressUrl = url.get('address');
var genderUrl = url.get('gender') ;
var mobilerUrl = url.get('mobile') ;

if(nameUrl!==null && mobilerUrl !==null){
    childWindow = window.open();
    childWindow.document.write(`<h1>Welcome ${nameUrl}</h1>
    <h2>Your Information are</h2>
    <h3>email :${emailUrl}</h3>
    <h3>mobile :${mobilerUrl}</h3>
    <h3>Gender :${genderUrl}</h3>
    <h3>address :${addressUrl}</h3>
    `);
}
var clockInterval;
var countdown = 30; 


function updateClock() {
    if (countdown >= 0) {
        document.getElementById('clock').textContent = countdown ;
        countdown--; 
    } else {
        clearInterval(clockInterval); 
    }
}


updateClock(); 
clockInterval = setInterval(updateClock, 1000); 


setTimeout(() => {
    if(nameUrl==null && mobilerUrl ==null){
        window.location.reload()
    }
}, 30000);