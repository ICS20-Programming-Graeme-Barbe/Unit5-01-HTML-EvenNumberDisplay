// Created by Graeme Barbe
// Created on: May 18
// JS functions for index.html


// This function tells the user the cost of getting into the museum
'use strict';
function submit() {
	//Declares variables
	let max = parseInt(document.getElementById('max').value)
	let counter = parseInt(document.getElementById('min').value)
	let numbers = ""

	//If statement to make sure max > min
	if (max >= counter) {
		//While loop for counter
		while (counter <= max) {
			numbers = numbers + counter + "<br>"
			counter = counter + 1
		}
	} else {
		numbers = "Please make sure your min is smaller than your max"
	}

	//Displays answer
	document.getElementById('numbers').innerHTML = numbers
}