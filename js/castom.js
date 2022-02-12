"use strict";

let input = document.getElementById('InputText');
let lengthCount = document.getElementById('LengthCount');

input.addEventListener("input", function() {
	let inputValue = input.value;
	let inputLength = inputValue.length;
	lengthCount.innerHTML = inputLength;
})