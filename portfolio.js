const text = "Anasiudu Anthony Francis";
const speed =120;
let index = 0;
const terget = document.getElementById('typedtext');
function typewriter() {
	if (index < text.length) {
		terget.textContent += text[index];
		index++;
		setTimeout(typewriter, speed);
	}
}

typewriter();
