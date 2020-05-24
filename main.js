
window.addEventListener('keydown', function (e) {
	let firstTime = true;
	let firstInstruction = document.querySelector(".first-instruction");
	let keycodeDisplay = document.querySelector(".keycode-display");
	let showKey = document.querySelector(".show-key");
	let keycodeDisplayText = document.querySelector(".keycode-display h1");
	let showKeyText = document.querySelector(".show-key h2");

	if (firstTime) {
		firstInstruction.style.visibility = "hidden";
		keycodeDisplay.style.visibility = "visible";
		showKey.style.visibility = "visible";
		firstTime = false;
	}

	keycodeDisplayText.innerHTML = e.keyCode;
	if (keycodeDisplayText.innerHTML === "32") {
		showKeyText.innerHTML = "SPACE";
	} else {
		showKeyText.innerHTML = e.key.toUpperCase();
	}
});
