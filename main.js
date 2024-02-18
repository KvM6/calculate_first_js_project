let valueDisplay;
let valueString;
let valueNumbResult;
let calcOne;
let calcTwo;
let calcThree;
let calcFour;
let calcFive;
let calcSix;
let calcSeven;
let calcEight;
let calcNine;
let calcZero;
let calcReset;
let calcPosNeg;
let calcPercentage;
let calcDivide;
let calcMultiply;
let calcSubstract;
let calcAdd;
let calcComma;
let calcEqual;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	valueDisplay.textContent = "0";
};

const prepareDOMElements = () => {
	valueDisplay = document.querySelector("#valueDisplay");
	valueString = document.querySelector("#valueString");
	valueNumbResult = document.querySelector("#numbResult");
	calcReset = document.querySelector("#calcReset");
	calcPosNeg = document.querySelector("#calcPosNeg");
	calcPercentage = document.querySelector("#calcPercentage");
	calcDivide = document.querySelector("#calcDivide");
	calcSeven = document.querySelector("#calcSeven");
	calcEight = document.querySelector("#calcEight");
	calcNine = document.querySelector("#calcNine");
	calcMultiply = document.querySelector("#calcMultiply");
	calcFour = document.querySelector("#calcFour");
	calcFive = document.querySelector("#calcFive");
	calcSix = document.querySelector("#calcSix");
	calcSubstract = document.querySelector("#calcSubstract");
	calcOne = document.querySelector("#calcOne");
	calcTwo = document.querySelector("#calcTwo");
	calcThree = document.querySelector("#calcThree");
	calcAdd = document.querySelector("#calcAdd");
	calcZero = document.querySelector("#calcZero");
	calcComma = document.querySelector("#calcComma");
	calcEqual = document.querySelector("#calcEqual");
};

const prepareDOMEvents = () => {
	calcOne.addEventListener("click", () => {
		resultNumbHandler();
		butOne.displayValue();
		if (operand.char == "") {
			butOne.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butOne.getNumbTwo();
		}
	});
	// calcOne.addEventListener("keyup", () => {
	// 	resultNumbHandler();
	// 	butOne.displayValue();
	// 	if (operand.char == "") {
	// 		butOne.getNumb();
	// 	} else if (operand.char != "" || resultNumb.display != "") {
	// 		butOne.getNumbTwo();
	// 	}
	// });
	calcTwo.addEventListener("click", () => {
		resultNumbHandler();
		butTwo.displayValue();
		if (operand.char == "") {
			butTwo.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butTwo.getNumbTwo();
		}
	});
	calcThree.addEventListener("click", () => {
		resultNumbHandler();
		butThree.displayValue();
		if (operand.char == "") {
			butThree.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butThree.getNumbTwo();
		}
	});
	calcFour.addEventListener("click", () => {
		resultNumbHandler();
		butFour.displayValue();
		if (operand.char == "") {
			butFour.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butFour.getNumbTwo();
		}
	});
	calcFive.addEventListener("click", () => {
		resultNumbHandler();
		butFive.displayValue();
		if (operand.char == "") {
			butFive.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butFive.getNumbTwo();
		}
	});
	calcSix.addEventListener("click", () => {
		resultNumbHandler();
		butSix.displayValue();
		if (operand.char == "") {
			butSix.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butSix.getNumbTwo();
		}
	});
	calcSeven.addEventListener("click", () => {
		resultNumbHandler();
		butSeven.displayValue();
		if (operand.char == "") {
			butSeven.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butSeven.getNumbTwo();
		}
	});
	calcEight.addEventListener("click", () => {
		resultNumbHandler();
		butEight.displayValue();
		if (operand.char == "") {
			butEight.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butEight.getNumbTwo();
		}
	});
	calcNine.addEventListener("click", () => {
		resultNumbHandler();
		butNine.displayValue();
		if (operand.char == "") {
			butNine.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butNine.getNumbTwo();
		}
	});
	calcZero.addEventListener("click", () => {
		resultNumbHandler();
		butZero.displayValue();
		if (operand.char == "") {
			butZero.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butZero.getNumbTwo();
		}
	});

	calcAdd.addEventListener("click", () => {
		if (operand.char != "" && butNumbOne.display != "") {
			resultFunction();
		}
		butAdd.setoperand();
		butAdd.displayFunction();
	});
	calcSubstract.addEventListener("click", () => {
		if (operand.char != "" && butNumbOne.display != "") {
			resultFunction();
		}
		butSubstract.setoperand();
		butSubstract.displayFunction();
	});
	calcMultiply.addEventListener("click", () => {
		if (operand.char != "" && butNumbOne.display != "") {
			resultFunction();
		}
		butMultiply.setoperand();
		butMultiply.displayFunction();
	});
	calcDivide.addEventListener("click", () => {
		if (operand.char != "" && butNumbOne.display != "") {
			resultFunction();
		}
		butDivide.setoperand();
		butDivide.displayFunction();
	});
	calcComma.addEventListener("click", () => {
		if (valueString.textContent.includes(".")) {
			console.log("no comma");
		} else intToFloat();
	});
	calcPosNeg.addEventListener("click", () => {
		posNegConvert();
	});
	calcPercentage.addEventListener("click", () => {
		percentageConverter();
	});
	calcEqual.addEventListener("click", () => {
		// if (butNumbOne.display > "" || butNumbTwo.display > "") {
		resultFunction();
		// }
	});
	calcReset.addEventListener("click", () => {
		resetValue();
	});
};

function buttonValue(display) {
	this.display = display;
}

const butZero = new buttonValue("0");
const butOne = new buttonValue("1");
const butTwo = new buttonValue("2");
const butThree = new buttonValue("3");
const butFour = new buttonValue("4");
const butFive = new buttonValue("5");
const butSix = new buttonValue("6");
const butSeven = new buttonValue("7");
const butEight = new buttonValue("8");
const butNine = new buttonValue("9");
let butNumbOne = new buttonValue("");
let butNumbTwo = new buttonValue("");
let resultNumb = new buttonValue("");
let floatNumbOne = new buttonValue("");

function buttonFunction(char) {
	this.char = char;
}

const butComma = new buttonFunction(",");
const butEqual = new buttonFunction("=");
const butAdd = new buttonFunction("+");
const butSubstract = new buttonFunction("-");
const butMultiply = new buttonFunction("x");
const butDivide = new buttonFunction("/");
const butPercentage = new buttonFunction("%");
const butPosNeg = new buttonFunction("+/-");
const butReset = new buttonFunction("0");
let operand = new buttonFunction("");

buttonValue.prototype.displayValue = function () {
	if (this.display == "0" && valueString.textContent == "") {
		valueDisplay.textContent = "0";
		console.log("ejej");
	} else if (
		// butNumbOne.display.length < 10 ||
		// butNumbTwo.display.length < 10
		valueString.textContent.length < 10
	) {
		valueString.textContent += this.display;
		valueDisplay.classList.add("opacity-0");
		console.log("length work");
	}
	console.log("else");
};
buttonValue.prototype.getNumb = function () {
	if (this.display == "0" && butNumbOne.display == 0) {
	} else if (butNumbOne.display.length < 10) {
		butNumbOne.display += this.display;
	}
	if (valueDisplay.textContent == "-0") {
		valueString.textContent = "-" + valueString.textContent;
		butNumbOne.display = "-" + butNumbOne.display;
		valueDisplay.textContent = "";
	}
	console.log(butNumbOne.display);
	console.log("numb1");
};
buttonValue.prototype.getNumbTwo = function () {
	// == 0 earlier
	if (this.display == "0" && butNumbTwo.display == "") {
	} else if (butNumbTwo.display.length < 10) {
		butNumbTwo.display += this.display;
	}
	console.log(butNumbTwo.display);
	console.log("numb2");
};

buttonFunction.prototype.displayFunction = function () {
	if (butNumbOne.display != "" || resultNumb.display != "") {
		valueDisplay.classList.remove("opacity-0");
		valueDisplay.textContent = this.char;
		valueNumbResult.textContent = "";
		valueString.textContent = "";
	}
};
buttonFunction.prototype.setoperand = function () {
	if (butNumbOne.display != "" || resultNumb.display != "") {
		operand.char = this.char;
		console.log(operand.char);
	}
};

function displayValidation() {}

function resultFunction() {
	if (butNumbOne.display.includes(".")) {
		if (butNumbOne.display == 0) {
			console.log(butNumbOne.display);
		} else butNumbOne.display = parseFloat(butNumbOne.display);
		console.log("float");
	} else if (butNumbOne.display == "") {
	} else butNumbOne.display = parseInt(butNumbOne.display);

	if (butNumbTwo.display.includes(".")) {
		if (butNumbTwo.display == 0) {
			console.log(butNumbTwo.display);
		} else butNumbTwo.display = parseFloat(butNumbTwo.display);
		console.log("float2");
	} else if (butNumbTwo.display > "") {
		butNumbTwo.display = parseInt(butNumbTwo.display);
	}

	if (butNumbOne.display != "" && butNumbTwo.display != "") {
		if (operand.char == "+") {
			resultNumb.display = butNumbOne.display + butNumbTwo.display;
		} else if (operand.char == "-") {
			resultNumb.display = butNumbOne.display - butNumbTwo.display;
		} else if (operand.char == "x") {
			resultNumb.display = butNumbOne.display * butNumbTwo.display;
		} else if (operand.char == "/") {
			resultNumb.display = butNumbOne.display / butNumbTwo.display;
		}
		console.log("result1");
	} else if (
		resultNumb.display != "" &&
		butNumbOne.display == "" &&
		butNumbTwo.display != ""
	) {
		if (operand.char == "+") {
			resultNumb.display += butNumbTwo.display;
		} else if (operand.char == "-") {
			resultNumb.display -= butNumbTwo.display;
		} else if (operand.char == "x") {
			resultNumb.display *= butNumbTwo.display;
		} else if (operand.char == "/") {
			resultNumb.display /= butNumbTwo.display;
		} else if (operand.char == "") {
			resultNumb.display = butNumbTwo.display;
		}
		console.log("result2");
	} else if (butNumbOne.display != "" && butNumbTwo.display == "") {
		resultNumb.display = butNumbOne.display;
		console.log("result3");
	}
	valueNumbResult.textContent = resultNumb.display;
	console.log(resultNumb.display);

	if (valueNumbResult.textContent.includes(".")) {
		floatPrecisionOne();
	}

	valueString.textContent = "";
	butNumbOne.display = "";
	butNumbTwo.display = "";
	operand.char = "";
}

function resultNumbHandler() {
	if (valueNumbResult.textContent != "") {
		valueNumbResult.textContent = "";
		butNumbOne.display = "";
		butNumbTwo.display = "";
		operand.char = "";
	}
}

function intToFloat() {
	if (
		operand.char == "" &&
		butNumbTwo.display == "" &&
		resultNumb.display == ""
	) {
		valueDisplay.classList.add("opacity-0");
		if (butNumbOne.display != "") {
			valueString.textContent += ".";
			console.log("dot");
		} else if (valueDisplay.textContent.includes("-")) {
			valueDisplay.textContent = "";
			valueString.textContent += "-0.";
		} else {
			valueString.textContent += "0.";
			console.log("0dot");
		}
		butNumbOne.display += ".";
		console.log("displaydot");
	} else if (operand.char != "" && butNumbOne.display != "") {
		valueDisplay.classList.add("opacity-0");
		if (butNumbTwo.display != "") {
			valueString.textContent += ".";
		} else {
			valueString.textContent += "0.";
			console.log("0dot2");
		}
		butNumbTwo.display += ".";
		console.log("displaydot2");
	} else if (resultNumb.display != "" && butNumbOne.display == "") {
		valueDisplay.classList.add("opacity-0");
		valueNumbResult.textContent = "";
		valueString.textContnent = "";
		resultNumb.display = "";
		if (butNumbOne.display != "") {
			valueString.textContent += ".";
			console.log("dot");
		} else {
			valueString.textContent += "0.";
			console.log("0dot");
		}
		butNumbOne.display += ".";
		console.log("displaydot3");
	}
}

function floatPrecisionOne() {
	butNumbOne.display += "";
	butNumbTwo.display += "";
	const detectDot = ".";
	let indexOfDot = valueString.textContent.indexOf(detectDot);
	valueString.textContent = valueString.textContent.slice(indexOfDot);

	if (butNumbOne.display.length > butNumbTwo.display.length) {
		if (butNumbOne.display.length == 3) {
			console.log("precision11");
			resultNumb.display = resultNumb.display.toFixed(1);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 4) {
			console.log("precision22");
			resultNumb.display = resultNumb.display.toFixed(2);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 5) {
			console.log("precision33");
			resultNumb.display = resultNumb.display.toFixed(3);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 6) {
			console.log("precision44");
			resultNumb.display = resultNumb.display.toFixed(4);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 7) {
			console.log("precision55");
			resultNumb.display = resultNumb.display.toFixed(5);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 8) {
			console.log("precision66");
			resultNumb.display = resultNumb.display.toFixed(6);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 9) {
			console.log("precision77");
			resultNumb.display = resultNumb.display.toFixed(7);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 10) {
			console.log("precision88");
			resultNumb.display = resultNumb.display.toFixed(8);
			valueNumbResult.textContent = resultNumb.display;
		} else if (butNumbOne.display.length == 11) {
			console.log("precision9");
			resultNumb.display = resultNumb.display.toFixed(9);
			valueNumbResult.textContent = resultNumb.display;
		}
	} else if (
		butNumbOne.display.includes("." || butNumbTwo.display.includes("."))
	) {
		if (valueString.textContent.length <= 2) {
			console.log("precision1");
			resultNumb.display = resultNumb.display.toFixed(1);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 3) {
			console.log("precision2");
			resultNumb.display = resultNumb.display.toFixed(2);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 4) {
			console.log("precision3");
			resultNumb.display = resultNumb.display.toFixed(3);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 5) {
			console.log("precision4");
			resultNumb.display = resultNumb.display.toFixed(4);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 6) {
			console.log("precision5");
			resultNumb.display = resultNumb.display.toFixed(5);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 7) {
			console.log("precision6");
			resultNumb.display = resultNumb.display.toFixed(6);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 8) {
			console.log("precision7");
			resultNumb.display = resultNumb.display.toFixed(7);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 9) {
			console.log("precision8");
			resultNumb.display = resultNumb.display.toFixed(8);
			valueNumbResult.textContent = resultNumb.display;
		} else if (valueString.textContent.length == 10) {
			console.log("precision9");
			resultNumb.display = resultNumb.display.toFixed(9);
			valueNumbResult.textContent = resultNumb.display;
		}
	}
}

function posNegConvert() {
	if (
		valueString.textContent.includes("-") ||
		valueDisplay.textContent.includes("-")
	) {
		valueString.textContent = valueString.textContent.replace("-", "");
		valueDisplay.textContent = valueDisplay.textContent.replace("-", "");
		if (butNumbOne.display != "" && butNumbTwo.display == "") {
			butNumbOne.display = butNumbOne.display.replace("-", "");
		} else if (butNumbOne.display != "" && butNumbTwo.display != "") {
			butNumbTwo.display = butNumbTwo.display.replace("-", "");
		}
		console.log("+");
	} else {
		if (valueDisplay.textContent == "0" && butNumbOne.display == "") {
			valueDisplay.textContent = "-" + valueDisplay.textContent;
		} else valueString.textContent = "-" + valueString.textContent;

		if (butNumbOne.display != "" && butNumbTwo.display == "") {
			butNumbOne.display = "-" + butNumbOne.display;
		} else if (butNumbOne.display != "" && butNumbTwo.display != "") {
			butNumbTwo.display = "-" + butNumbTwo.display;
		}
		console.log("-");
	}
}

function percentageConverter() {
	const percentageValue = "100";
	if (
		butNumbOne.dispaly != "" &&
		(butNumbTwo.display == "") & (resultNumb.display == "")
	) {
		butNumbOne.display /= percentageValue;
		butNumbOne.display += "";
		valueString.textContent = butNumbOne.display;
		console.log("%1");
	} else if (
		butNumbOne.display != "" &&
		butNumbTwo.display != "" &&
		resultNumb.display == ""
	) {
		butNumbTwo.display *= butNumbOne.display;
		butNumbTwo.display /= percentageValue;
		butNumbTwo.display += "";
		valueString.textContent = butNumbTwo.display;
		console.log("%2");
	} else if (
		butNumbOne.display == "" &&
		butNumbTwo.display == "" &&
		resultNumb.display != ""
	) {
		resultNumb.display /= percentageValue;
		valueNumbResult.textContent = resultNumb.display;
		console.log("%3");
	}
}

function resetValue() {
	valueDisplay.classList.remove("opacity-0");
	valueDisplay.textContent = "0";
	valueString.textContent = "";
	valueNumbResult.textContent = "";
	butNumbOne.display = "";
	butNumbTwo.display = "";
	resultNumb.display = "";
	operand.char = "";
}

document.addEventListener("DOMContentLoaded", main);
