// Created by Graeme Barbe
// Created on: May 18
// JS functions for index.html


// This function tells the user the cost of getting into the museum
'use strict';
function submit() {
	//
	let max = parseInt(document.getElementById('max').value)
	let counter = parseInt(document.getElementById('min').value)
	let numbers = ""

	while (counter <= max) {
		numbers = numbers + counter + "<br>"
		counter = counter + 1
	}

	document.getElementById('numbers').innerHTML = numbers
}