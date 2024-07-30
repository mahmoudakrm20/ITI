var message = prompt("Please enter your message");
var htmlMessage = "";
for (var i = 1; i <= 6; i++) {
    html += `<h${i}>${message}</h${i}>\n`;
}
document.write(htmlMessage);