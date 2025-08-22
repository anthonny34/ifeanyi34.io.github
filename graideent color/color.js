var css= document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector('.color2')
var body= document.querySelector("body")

function setBackgroud(argument) {
	body.style.background= "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
}
color1.addEventListener("input", setBackgroud);
color2.addEventListener("input", setBackgroud);