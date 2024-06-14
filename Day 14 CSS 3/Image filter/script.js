document.getElementById("saturateBtn").addEventListener("click", function() {
    document.querySelector(".background").style.filter = "saturate(200%)";
});

document.getElementById("opacityBtn").addEventListener("click", function() {
    document.querySelector(".background").style.opacity = "0.5";
});

document.getElementById("invertBtn").addEventListener("click", function() {
    document.querySelector(".background").style.filter = "invert(100%)";
});

document.getElementById("sepiaBtn").addEventListener("click", function() {
    document.querySelector(".background").style.filter = "sepia(100%)";
});

document.getElementById("grayscaleBtn").addEventListener("click", function() {
    document.querySelector(".background").style.filter = "grayscale(100%)";
});

document.getElementById("defaultBtn").addEventListener("click", function() {
    document.querySelector(".background").style.filter = "none";
    document.querySelector(".background").style.opacity = "1";
});