var canvas = document.getElementById('circleCanvas');
var ctx = canvas.getContext('2d');
var colorPicker = document.getElementById('colorPicker');
var changeColorButton = document.getElementById('changeColorButton');

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function changeColorAndPosition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 20; i++) {
        var x = Math.random() * (canvas.width - 40) +20 ; 
        var y = Math.random() * (canvas.height - 40) +20 ; 
        drawCircle(x, y, 20, colorPicker.value);
    }
}

changeColorButton.addEventListener('click', changeColorAndPosition);

changeColorAndPosition();
