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
		if (opperand.char == "") {
			butOne.getNumb();
		} else if (opperand.char != "") {
			butOne.getNumbTwo();
		}
	});
	calcTwo.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butTwo.displayValue();
		if (opperand.char == "") {
			butTwo.getNumb();
		} else if (opperand.char != "") {
			butTwo.getNumbTwo();
		}
	});
	calcThree.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butThree.displayValue();
		if (opperand.char == "") {
			butThree.getNumb();
		} else if (opperand.char != "") {
			butThree.getNumbTwo();
		}
	});
	calcFour.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butFour.displayValue();
		if (opperand.char == "") {
			butFour.getNumb();
		} else if (opperand.char != "") {
			butFour.getNumbTwo();
		}
	});
	calcFive.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butFive.displayValue();
		if (opperand.char == "") {
			butFive.getNumb();
		} else if (opperand.char != "") {
			butFive.getNumbTwo();
		}
	});
	calcSix.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butSix.displayValue();
		if (opperand.char == "") {
			butSix.getNumb();
		} else if (opperand.char != "") {
			butSix.getNumbTwo();
		}
	});
	calcSeven.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butSeven.displayValue();
		if (opperand.char == "") {
			butSeven.getNumb();
		} else if (opperand.char != "") {
			butSeven.getNumbTwo();
		}
	});
	calcEight.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butEight.displayValue();
		if (opperand.char == "") {
			butEight.getNumb();
		} else if (opperand.char != "") {
			butEight.getNumbTwo();
		}
	});
	calcNine.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butNine.displayValue();
		if (opperand.char == "") {
			butNine.getNumb();
		} else if (opperand.char != "") {
			butNine.getNumbTwo();
		}
	});
	calcZero.addEventListener("click", () => {
		hideZeroValue();
		resultNumbHandler();
		butZero.displayValue();
	});

	calcAdd.addEventListener("click", () => {
		showZeroValue();
		butAdd.displayFunction();
		butAdd.setOpperand();
	});
	calcSubstract.addEventListener("click", () => {
		showZeroValue();
		butSubstract.displayFunction();
		butSubstract.setOpperand();
	});
	calcMultiply.addEventListener("click", () => {
		showZeroValue();
		butMultiply.displayFunction();
		butMultiply.setOpperand();
	});
	calcDivide.addEventListener("click", () => {
		showZeroValue();
		butDivide.displayFunction();
		butDivide.setOpperand();
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
let opperand = new buttonFunction("");

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
	if (butNumbOne.display > 0) {
		valueDisplay.textContent = this.char;
		valueString.textContent = "";
	}
};
buttonFunction.prototype.setOpperand = function () {
	if (butNumbOne.display > 0) {
		opperand.char = this.char;
		console.log(opperand.char);
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
	opperand.char = "";
}

function resultFunction() {
	if (resultNumb.display === "") {
		if (opperand.char == "+") {
			resultNumb.display = butNumbOne.display + butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "-") {
			resultNumb.display = butNumbOne.display - butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "x") {
			resultNumb.display = butNumbOne.display * butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "/") {
			resultNumb.display = butNumbOne.display / butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		}
	} else if (resultNumb.display != "") {
		if (opperand.char == "+") {
			resultNumb.display += butNumbOne.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "-") {
			resultNumb.display = butNumbOne.display - butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "x") {
			resultNumb.display = butNumbOne.display * butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		} else if (opperand.char == "/") {
			resultNumb.display = butNumbOne.display / butNumbTwo.display;
			valueNumbResult.textContent = resultNumb.display;
			console.log(resultNumb.display);
		}
	}
	valueString.textContent = "";
	valueDisplay.textContent = "";
	opperand.char = "";
}

function resultNumbHandler() {
	if (valueNumbResult.textContent != "") {
		valueNumbResult.textContent = "";
		butNumbOne.display = "";
		butNumbTwo.display = "";
		opperand.char = "";
	}
}
document.addEventListener("DOMContentLoaded", main);
