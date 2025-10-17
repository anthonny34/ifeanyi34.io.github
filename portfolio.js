const toggleBtn= document.getElementById("mode-toggle");
const body= document.body;
toggleBtn.addEventListener("click", () =>{
	body.classList.toggle("dark-mode");

	if (body.classList.contains("dark-mode")) {
		toggleBtn.textContent = "Light Mode";
	} else {
      toggleBtn.textContent = "Dark Mode"  
	}
});