// Visited counter
const img = $("img");
const msg = $("h1");

let name = getCookie("name");
let gender = getCookie("gender");
let color = getCookie("color");

let counter = Number((!getCookie("old") || getCookie("old") == name) && getCookie("count") || 0) + 1;
setCookie("count", counter);
setCookie("old", name);

if (gender == "male") {
    img.attr("src", "img/male.jpg");
} else if (gender == "female") {
    img.attr("src", "img/female.jpg");
}

msg.text(` ${name}, you visited the page ${counter} times.`);
msg.css("color", color);
