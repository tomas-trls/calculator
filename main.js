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

const addition = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) + parseFloat(element));
  });
  return result;
};

const substraction = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) - parseFloat(element));
  });
  return result;
};

const multiplication = (array) => {
  array.reduce((total, element) => {
    return (result = parseFloat(total) * parseFloat(element));
  });
  return result;
};

const division = (array) => {
  array.reduce = (total, element) => {
    return (result = parseFloat(total) / parseFloat(element));
  };
  return result;
};

let inputString;
let extraResult;
let inputArr = [];
let maxInputArr = [];
let operation = [];
let result = 0;
let resultArr = [];
let extraInput;

const calculate = () => {
  inputString = inputArr.join("");
  console.log(resultArr);
  maxInputArr.push(...inputString.split(operator));
  extraInput = parseFloat(inputArr[inputArr.length - 1]);
  switch (operator) {
    case "+":
      if (maxInputArr.length == 2) {
        resultArr.push(addition(maxInputArr));
      } else if (maxInputArr.length > 2) {
        maxInputArr = [];
        maxInputArr.push(result);
        maxInputArr.push(extraInput);
        resultArr[0] = addition(maxInputArr);
        console.log(resultArr);
      }
      break;
    case "-":
      resultArr.push(substraction(maxInputArr));
      maxInputArr = [];
      break;
    case "x":
      resultArr.push(multiplication(maxInputArr));
      maxInputArr = [];
      break;
    case "÷":
      resultArr.push(division(maxInputArr));
      maxInputArr = [];
      break;
  }
};

const handleEqual = () => {
  // if (operator == "+") {
  //   if (resultArr.length > 0) {
  //     extraResult = inputArr.join("").split("+");
  //     let finalResult = extraResult.slice(operation.length);
  //     finalResult.forEach((number) => {
  //       resultArr[0] += parseFloat(number);
  //     });
  //     result = resultArr[0];
  //   } else {
  //     operation = inputString.split("+");
  //     operation.reduce((total, element) => {
  //       return (result = parseFloat(total) + parseFloat(element));
  //     });
  //     resultArr.push(result);
  //   }
  // } else if (operator == "-") {
  //   if (resultArr.length > 0) {
  //     extraResult = inputArr.join("").split("-");
  //     let finalResult = extraResult.slice(operation.length);
  //     finalResult.forEach((number) => {
  //       resultArr[0] -= parseFloat(number);
  //     });
  //     result = resultArr[0];
  //   } else {
  //     operation = inputString.split("-");
  //     operation.reduce((total, element) => {
  //       return (result = parseFloat(total) - parseFloat(element));
  //     });
  //     resultArr.push(result);
  //   }
  // } else if (operator == "x") {
  //   operation = inputString.split("x");
  //   operation.reduce((total, element) => {
  //     return (result = parseFloat(total) * parseFloat(element));
  //   });
  //   resultArr.push(result);
  // } else if (operator == "÷") {
  //   operation = inputString.split("÷");
  //   operation.reduce((total, element) => {
  //     return (result = parseFloat(total) / parseFloat(element));
  //   });
  //   resultArr.push(result);
  // }
  screenOperation.innerText = `${inputString}`;
  //screenResult.innerText = `${parseFloat(result.toFixed(7))}`;
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
    calculate();
    screenResult.innerText = `${parseFloat(resultArr[0].toFixed(7))}`;
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
