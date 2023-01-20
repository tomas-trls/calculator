const numbers = document.querySelectorAll(".calculator__key");
const operators = document.querySelectorAll(".calculator__key--pink");
const equal = document.querySelector(".calculator__key--yellow");
const clear = document.querySelector("#clear");
const percentage = document.querySelector("#percentage");
const negative = document.querySelector("#plus-minus-symbol");

let screenResult = document.querySelector(".calculator__result");
let screenOperation = document.querySelector(".calculator__operation");

let inputArr = [];
let operation = [];
let result = 0;
let resultArr = [];
let operator;
let sumOper;

operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    operator = event.target.innerText;
  });
});

const handleEqual = () => {
  let inputString = inputArr.join("");
  if (operator == "+") {
    if (resultArr.length > 0) {
      let extraResult = inputArr.join("").split("+");
      resultArr.forEach((element) => {
        result = element + parseFloat(extraResult[extraResult.length - 1]);
      });
      console.log(result);
      resultArr[0] = result;
    } else {
      operation = inputString.split("+");
      operation.forEach((element) => {
        result += parseFloat(element);
      });
      resultArr.push(result);
    }
  } else if (operator == "-") {
    operation = inputString.split("-");
    operation.reduce((total, element) => {
      result = total - parseFloat(element);
    });
    resultArr.push(result);
    operators.forEach((op) => {
      op.addEventListener("click", (event) => {
        operator = event.target.innerText;
      });
    });
  } else if (operator == "x") {
    operation = inputString.split("x");
    operation.reduce((total, element) => {
      result = total * parseFloat(element);
    });
  } else if (operator == "÷") {
    operation = inputString.split("÷");
    operation.reduce((total, element) => {
      result = total / parseFloat(element);
    });
  }
  screenOperation.innerText = `${inputString}`;
  screenResult.innerText = `${parseFloat(result.toFixed(7))}`;
};

let inputBeforeNegative;
const handleNegative = () => {
  inputBeforeNegative = inputArr.join("");
  if (parseFloat(inputBeforeNegative) > 0) {
    inputBeforeNegative = -Math.abs(inputBeforeNegative);
    screenResult.innerText = `${inputBeforeNegative}`;
  } else {
    inputBeforeNegative = Math.abs(inputBeforeNegative);
    screenResult.innerText = `${inputBeforeNegative}`;
  }
};

const handlePercentage = () => {
  let inputBeforePercentage = inputArr.join("");
  result = parseFloat(inputBeforePercentage) / 100;
  screenOperation.innerText = `${inputBeforePercentage}`;
  screenResult.innerText = `${result}`;
};

const clearScreenResult = () => {
  inputArr = [];
  operation = [];
  result = 0;
  resultArr = [];
  inputBeforeNegative = [];
  screenOperation.innerText = "";
  screenResult.innerText = "";
};

const addKey = (event) => {
  if (event.target.innerText == "=") {
    handleEqual();
  } else if (event.target.innerText == "C") {
    clearScreenResult();
  } else if (event.target.innerText == "%") {
    handlePercentage();
  } else if (event.target.innerText == "±") {
    handleNegative();
  } else {
    inputArr.push(event.target.innerText);
    screenResult.innerText = inputArr.join("");
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", addKey);
});
