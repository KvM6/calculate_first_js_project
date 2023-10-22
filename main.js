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

const prepareDOMEvents = () => {};

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

document.addEventListener("DOMContentLoaded", main);
