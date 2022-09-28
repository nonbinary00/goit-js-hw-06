const input = document.querySelector("#validation-input");

input.addEventListener("blur" , event => {
    if (event.target.value.length === Number(event.target.dataset.length)) {
		addGreenBorder();
	} else {
		addRedBorder();
	}
	console.log(event.target.value.length);
	console.log(event.target.dataset.length);
});

function addGreenBorder() {
	input.classList.remove("invalid");
	input.classList.add("valid");
}

function addRedBorder() {
	input.classList.remove("valid");
	input.classList.add("invalid");
}