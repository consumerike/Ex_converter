// // Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// Subtract 32 from the Fahrenheit temperature
// Divide the answer by 9
// Multiply that answer by 5

// Multiply the Celsius temperature by 9
// Divide the answer by 5
// Add 32

//TOOLS: 
//
// Method	Description
// element.attribute = new value	Change the attribute value of an HTML element
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element

// document.write(text)	Write into the HTML output stream
//document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

// In the HTML, have one input field where someone can enter in a temperature.

// function toCelsius(input) {
// 	var temperature =  (input - 32) / ((9) * 5);
// 	return "the temperature in Celsius is "+temperature;

// };

// function toFahrenheit(input) {
// 	var temperature = (input * 9) / (5) + 32;
// 	console.log("the temperature in Fahrenheit is "+temperature);
// }



// var input = document.createElement("INPUT");
// var inputFieldText = document.createTextNode("input temperature");
// input.appendChild(inputFieldText);
// input.value = "input Temperature";
// document.getElementById("radio_group;").appendChild(input);


// // Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.



	// var radioButtons = document.getElementById("radio_button");

	//WHY DOES THIS CODE NOT EXECUTE. I GET "[object HTMLInputElement]" in the window instead
	// function makeRadioButtons(name, value, text) {
	// 	var label = document.createElement("label");
	// 	var radio = document.createElement("input");
	// 	radio.type = "radio";
	// 	radio.name = name;
	// 	radio.value = value;
		

	// 	label.appendChild(radio);
	// 	label.appendChild(document.createTextNode(text));
	// 	return radio;
	// }

	// var celsiusButton = makeRadioButtons("CelsiusButton", "Celsius", "Degrees Celsius");

	// var fahrenheitButton= makeRadioButtons("FahrenheitButton", "Celsius", "Degrees Fahrenheit");

	// document.getElementById('radio_button').innerHTML = '<label for="celsius">Fahrenheit</label>' + '<form>' + '<input type="radio"' + 'name="unit"' + 'value="Fahrenheit" Fahrenheit>'+'<br>' + '<label for="celsius">Celsius</label>' + '<input type="radio"'+ 'name="unit'+'value="celsius">'+ '</form>';

	// document.body.appendChild(tempType);
	// var tempType2 = document.createElement("radio");
	// tempType2.value = "Fahrenheit";
	// tempType.appendChild(input);
	// tempType2.appendChild(tempType);
//place those elements in the document
// document.getElementById("radio_button").innerHTML = celsiusButton;


// Create a block level element that will hold the text of the converted temperature.
// document.getElementById('convertedTemp').innerHTML = "The temperature is " + EVENTHANDLER;
// Create a button that.
// var input = document.getElementById("input");
// console.log(input)
// document.getElementById('easyButton').addEventListener("click", function() {
// 	console.log(document.getElementById('F').checked);
// 	if (document.getElementById('F').checked === true) {
// 		toFahrenheit(input)
// 	}
// })

// document.getElementsByName("unit").addEventListener("change", function(event) {
// 	console.log(event.target.checked);

// })

//when clicked, displays the converted temperature.easyButton.innerHTML = click event if C do x, if F, do 
// var convertButton = document.createElement("button");
// var convertButtonText = document.createTextNode("convert");
// convertButton.appendChild(convertButtonText);
// document.body.appendChild
// document.getElementbyId("convertedTemp").innerHTML = // Create another button that, when clicked, clears any text in the input field.
// document.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
// var button = document.getElementbyId("easyButton");
var input = document.getElementById('input');
var tempF = document.getElementById('F');
var tempC = document.getElementById('C');
var conversionButton = document.getElementById('conversionButton');
var reset = document.getElementById('reset');

input.addEventListener("keyup", checkKey);
conversionButton.addEventListener("click", checkConversion);
reset.addEventListener("click", clearData);

function clearData() {
	input.value = "";
	tempF.checked = false;
	tempC.checked = false;
}


function checkKey(event) {
	if(event.keyCode === 13) {
		checkConversion();	
	}

}

function checkConversion() {
	var value = input.value;
	if (tempF.checked) {
		toFahrenheit(value);
	}
	else if (tempC.checked) {
		toCelsius(value);
	} 
	else {
		alert("You have to pick a temperature type");
	}
	
}


function toFahrenheit(input) {
	var temperature = (input * 9) / (5) + 32;
	console.log("the temperature in Fahrenheit is "+temperature);
}

function toCelsius(input) {
	console.log("working", input);
	var temperature =  Math.floor((input - 32) * .5556);
	console.log("the temperature in Celsius is "+temperature);

}







