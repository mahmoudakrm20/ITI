var mainDiv = document.querySelector('#mainDiv')

function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

mainDiv.addEventListener('click', function() {
    var clone = this.cloneNode(false);
    clone.style.backgroundColor = getColor();
    document.body.appendChild(clone);
    clone.innerText="i'm fake"
    console.log(getRandomColor())
});