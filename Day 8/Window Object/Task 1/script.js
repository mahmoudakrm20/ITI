function openChildWindow() {
    var childWindow = window.open()

    childWindow.document.write("<h1>Welcome and goodbye</h1>");
    childWindow.document.write("<p>This window will close after 5 seconds</p>");

    setTimeout(function() {
        childWindow.close();
    }, 5000);
}