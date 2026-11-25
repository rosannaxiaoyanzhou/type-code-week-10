console.log("hello world!")

function changeLetter(letter) {
	tester.textContent = letter;
}


let currentSize = 15
function changeFontSize(delta) {
	currentSize = currentSize + delta;

	if (currentSize < 5) {
		currentSize = 5;
	}

	tester.style.fontSize = `${currentSize}px`;

	console.log(currentSize);
}


function changeWeight(weight) {
	tester.style.fontWeight = weight;

	console.log(`font weight: ${weight}`);
}


function changeStyle(style) {
	tester.style.fontStyle = style;

	console.log(`font style: ${style}`);
}