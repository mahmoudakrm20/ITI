var marbles = document.querySelectorAll('.marble');
var counter = -1 ;


function startAnimation() {
    animationInterval = setInterval(function () {
    for (var i = 0; i < 4; i++) {
        marbles[i].src = 'marble1.jpg';
        }
        counter++; 
        marbles[counter].src = 'marble2.jpg';
    if (counter == 3 ){
        counter = -1;
        };
    }, 1000);
}


for (var i = 0; i < 4; i++) {
     marbles[i].addEventListener('mouseenter', function () {
        clearInterval(animationInterval);
    });
    marbles[i].addEventListener('mouseleave', startAnimation);
};

startAnimation();
