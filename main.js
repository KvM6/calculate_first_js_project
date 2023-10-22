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
		butTwo.displayValue();
	});
	calcThree.addEventListener("click", () => {
		butThree.displayValue();
	});
	calcFour.addEventListener("click", () => {
		butFour.displayValue();
	});
	calcFive.addEventListener("click", () => {
		butFive.displayValue();
	});
	calcSix.addEventListener("click", () => {
		butSix.displayValue();
	});
	calcSeven.addEventListener("click", () => {
		butSeven.displayValue();
	});
	calcEight.addEventListener("click", () => {
		butEight.displayValue();
	});
	calcNine.addEventListener("click", () => {
		butNine.displayValue();
	});
	calcZero.addEventListener("click", () => {
		butZero.displayValue();
	});

	calcAdd.addEventListener("click", () => {
		showZeroValue();
		butAdd.displayFunction();
		butAdd.setOpperand();
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
	valueDisplay.textContent = this.char;
	valueString.textContent = "";
};
buttonFunction.prototype.setOpperand = function () {
	opperand.char = this.char;
	console.log(opperand.char);
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
	opperand.char = "";
}

function resultFunction() {
	resultNumb.display = butNumbOne.display + butNumbTwo.display;
	valueString.textContent = "";
	opperand.char = "";
	valueNumbResult.textContent = resultNumb.display;
	console.log(resultNumb.display);
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
