const numbers = document.querySelectorAll(".calculator__key--blue");
const operators = document.querySelectorAll(".calculator__key--pink");
const equal = document.querySelector("#calculator__key--yellow");
const clear = document.querySelector("#clear");
let screen = document.querySelector("#screen");

let firstInputArr = [];
let secondInputArr = [];
let sum = [];

const addKey = (event) => {
  firstInputArr.push(event.target.innerText);
  screen.innerText = firstInputArr.join("");
};

numbers.forEach((number) => {
  number.addEventListener("click", addKey);
});

const handleOperators = (event) => {
  let firstVar = parseFloat(firstInputArr.join(""));
  screen.innerText += event.target.innerText;
};

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperators);
});

const handleEqual = (event) => {
  screen.innerText = `${parseInt(firstInputArr.join(""))} ${
    event.target.innerText
  } `;
};

const clearScreen = () => {
  firstInputArr = [];
  secondInputArr = [];
  screen.innerText = "";
};

clear.addEventListener("click", clearScreen);
