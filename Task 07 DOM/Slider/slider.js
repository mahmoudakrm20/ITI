var prevBtn = document.querySelector('#Previous');
var nextBtn = document.querySelector('#Next');
var slideBtn = document.querySelector('#Slideshow');
var stopBtn = document.querySelector('#Stop');

var img = document.querySelector('#img');

var imgArray = ['1.webp','2.webp','3.png','4.jpg','5.jpg','6.avif'];
var counter = 0 ;

nextBtn.addEventListener('click',function(){
    if (counter<imgArray.length-1) {
    counter ++;
    img.src=`./IMG/${imgArray[counter]}`
    }
})

prevBtn.addEventListener('click',function(){
    if (counter>0) {
        counter --;
        img.src=`./IMG/${imgArray[counter]}`
    }
})

slideBtn.addEventListener('click', function(){
  x =  setInterval(function(){
        if (counter<imgArray.length-1) {
            counter ++;
            img.src=`./IMG/${imgArray[counter]}`
        }
        if (counter==imgArray.length-1) {
            counter = 0;
            img.src=`./IMG/${imgArray[counter]}`
        }    
    }
,2000)
})
stopBtn.addEventListener('click',function (){
    clearInterval(x)
})