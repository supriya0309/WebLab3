function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}


function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}


function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function checkInput(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

function compute(form) {
    form.display.value = eval(form.display.value);
}

