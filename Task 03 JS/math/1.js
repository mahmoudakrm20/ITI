var radiusInput = prompt("Please Enter the value of the circles radius:");
var radius = parseFloat(radiusInput);

if (!isNaN(radius) && radius > 0) {
    var area = Math.PI * radius * radius;
    alert("The area of the circle is: " + area);
} else {
    alert("Please enter a positive number for the radius.");
}