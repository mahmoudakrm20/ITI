var liHTML = document.getElementsByTagName("li")


for(var i = 0 ; i < liHTML.length ; i++) {
    liHTML[i].classList.add('li-styling');
}

document.querySelector('ul').classList.add('ul-styling')
document.getElementById('header').style.textAlign='right'


var theIMG = document.createElement('img');
theIMG.src="dom.jpg";
document.body.appendChild(theIMG);
