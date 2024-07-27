var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

window.onload = initalColors;

function initalColors() {
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    setGradient();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setRandomGradient() {
    color1.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomGradient);