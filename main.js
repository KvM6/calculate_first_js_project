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
		hideZeroValue();
		resultNumbHandler();
		butOne.displayValue();
		if (operand.char == "") {
			butOne.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butOne.getNumbTwo();
		}
	});
	calcTwo.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butTwo.displayValue();
		if (operand.char == "") {
			butTwo.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butTwo.getNumbTwo();
		}
	});
	calcThree.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butThree.displayValue();
		if (operand.char == "") {
			butThree.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butThree.getNumbTwo();
		}
	});
	calcFour.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butFour.displayValue();
		if (operand.char == "") {
			butFour.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butFour.getNumbTwo();
		}
	});
	calcFive.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butFive.displayValue();
		if (operand.char == "") {
			butFive.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butFive.getNumbTwo();
		}
	});
	calcSix.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butSix.displayValue();
		if (operand.char == "") {
			butSix.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butSix.getNumbTwo();
		}
	});
	calcSeven.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butSeven.displayValue();
		if (operand.char == "") {
			butSeven.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butSeven.getNumbTwo();
		}
	});
	calcEight.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butEight.displayValue();
		if (operand.char == "") {
			butEight.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butEight.getNumbTwo();
		}
	});
	calcNine.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butNine.displayValue();
		if (operand.char == "") {
			butNine.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butNine.getNumbTwo();
		}
	});
	calcZero.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butZero.displayValue();
		if (operand.char == "") {
			butZero.getNumb();
		} else if (operand.char != "" || resultNumb.display != "") {
			butZero.getNumbTwo();
		}
	});

	calcAdd.addEventListener("click", () => {
		if (operand.char != "") {
			resultFunction();
		}
		showZeroValue();
		butAdd.setoperand();
		butAdd.displayFunction();
	});
	calcSubstract.addEventListener("click", () => {
		if (operand.char != "") {
			resultFunction();
		}
		showZeroValue();
		butSubstract.setoperand();
		butSubstract.displayFunction();
	});
	calcMultiply.addEventListener("click", () => {
		if (operand.char != "") {
			resultFunction();
		}
		showZeroValue();
		butMultiply.setoperand();
		butMultiply.displayFunction();
	});
	calcDivide.addEventListener("click", () => {
		if (operand.char != "") {
			resultFunction();
		}
		showZeroValue();
		butDivide.setoperand();
		butDivide.displayFunction();
	});
	calcReset.addEventListener("click", () => {
		showZeroValue();
		resetValue();
	});
	calcEqual.addEventListener("click", () => {
		resultFunction();
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
	valueString.textContent += this.display;
};
buttonValue.prototype.getNumb = function () {
	butNumbOne.display += this.display;
	butNumbOne.display = parseInt(butNumbOne.display);
	console.log(butNumbOne.display);
	console.log("1");
};
buttonValue.prototype.getNumbTwo = function () {
	butNumbTwo.display += this.display;
	butNumbTwo.display = parseInt(butNumbTwo.display);
	console.log(butNumbTwo.display);
	console.log("2");
};

buttonFunction.prototype.displayFunction = function () {
	if (butNumbOne.display >= 0 && valueNumbResult.textContent == "") {
		valueDisplay.textContent = this.char;
		valueString.textContent = "";
	}
};
buttonFunction.prototype.setoperand = function () {
	if (butNumbOne.display >= 0 && valueNumbResult.textContent == "") {
		operand.char = this.char;
		console.log(operand.char);
	}
};

function hideZeroValue() {
	valueDisplay.classList.add("opacity-0");
}

function showZeroValue() {
	valueDisplay.classList.remove("opacity-0");
}

function resetValue() {
	valueDisplay.textContent = "0";
	valueString.textContent = "";
	valueNumbResult.textContent = "";
	butNumbOne.display = "";
	butNumbTwo.display = "";
	resultNumb.display = "";
	operand.char = "";
}

function resultFunction() {
	if (resultNumb.display === "") {
		if (operand.char == "+") {
			resultNumb.display = butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "-") {
			resultNumb.display = butNumbOne.display - butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "x") {
			resultNumb.display = butNumbOne.display * butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "/") {
			resultNumb.display = butNumbOne.display / butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		}
	} else if (resultNumb.display != "" && butNumbTwo.display === "") {
		if (operand.char == "+") {
			resultNumb.display += butNumbOne.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "-") {
			resultNumb.display -= butNumbOne.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "x") {
			resultNumb.display *= butNumbOne.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "/") {
			resultNumb.display /= butNumbOne.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		}
	} else if (resultNumb.display != "" && butNumbTwo.display != "") {
		if (operand.char == "+") {
			resultNumb.display += butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "-") {
			resultNumb.display -= butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "x") {
			resultNumb.display *= butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (operand.char == "/") {
			resultNumb.display /= butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		}
	}
	valueString.textContent = "";
	butNumbTwo.display = "";
	valueDisplay.textContent = "";
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
document.addEventListener("DOMContentLoaded", main);
