const numbers = document.querySelectorAll(".calculator__key");
const operators = document.querySelectorAll(".calculator__key--pink");
const equal = document.querySelector(".calculator__key--yellow");
const clear = document.querySelector("#clear");
const percentage = document.querySelector("#percentage");
const negative = document.querySelector("#plus-minus-symbol");

let screenResult = document.querySelector(".calculator__result");
let screenOperation = document.querySelector(".calculator__operation");

let operator;

operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    operator = event.target.innerText;
  });
});

const add = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) + parseFloat(element));
  });
  return result;
};

const substract = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) - parseFloat(element));
  });
  return result;
};

const multiply = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) * parseFloat(element));
  });
  return result;
};

const divide = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) / parseFloat(element));
  });
  return result;
};

let inputString;
let inputArr = [];
let maxInputArr = [];
let operation = [];
let result = 0;
let resultArr = [];
let extraInputs;

// const calculate = () => {
//   inputString = inputArr.join("");
//   maxInputArr.push(...inputString.split(operator));
//   switch (operator) {
//     case "+":
//       if (maxInputArr.length == 2) {
//         resultArr.push(addition(maxInputArr));
//       } else if (resultArr.length > 0) {
//         maxInputArr = [];
//         maxInputArr.push(result);
//         extraInputs = parseFloat(inputArr[inputArr.length - 1]);
//         maxInputArr.push(extraInputs);
//         result = add(maxInputArr);
//       }
//       break;
//     case "-":
//       resultArr.push(substract(maxInputArr));
//       maxInputArr = [];
//       break;
//     case "x":
//       resultArr.push(multiply(maxInputArr));
//       maxInputArr = [];
//       break;
//     case "÷":
//       resultArr.push(divide(maxInputArr));
//       maxInputArr = [];
//       break;
//   }
// };

const handleEqual = () => {
  inputString = inputArr.join("");
  if (operator == "+") {
    if (resultArr.length > 0) {
      extraResult = inputArr.join("").split("+");
      let finalResult = extraResult.slice(operation.length);
      finalResult.forEach((number) => {
        resultArr[0] += parseFloat(number);
      });
      result = resultArr[0];
    } else {
      operation = inputString.split("+");
      addition(operation);
      resultArr.push(result);
    }
  } else if (operator == "-") {
    if (resultArr.length > 0) {
      extraResult = inputArr.join("").split("-");
      let finalResult = extraResult.slice(operation.length);
      finalResult.forEach((number) => {
        resultArr[0] -= parseFloat(number);
      });
      result = resultArr[0];
    } else {
      operation = inputString.split("-");
      substract(operation);
      resultArr.push(result);
    }
  } else if (operator == "x") {
    if (resultArr.length > 0) {
      extraResult = inputArr.join("").split("x");
      let finalResult = extraResult.slice(operation.length);
      finalResult.forEach((number) => {
        resultArr[0] *= parseFloat(number);
      });
      result = resultArr[0];
    }
    operation = inputString.split("x");
    multiply(operation);
    resultArr.push(result);
  } else if (operator == "÷") {
    if (resultArr.length > 0) {
      extraResult = inputArr.join("").split("÷");
      let finalResult = extraResult.slice(operation.length);
      finalResult.forEach((number) => {
        resultArr[0] /= parseFloat(number);
      });
      result = resultArr[0];
    }
    operation = inputString.split("÷");
    divide(operation);
    resultArr.push(result);
  }
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
  inputString = [];
  inputArr = [];
  maxInputArr = [];
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
    //calculate();
    screenResult.innerText = `${parseFloat(result.toFixed(7))}`;
    screenOperation.innerText = `${inputString}`;
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
