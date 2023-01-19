const keys = document.querySelectorAll(".calculator__key");

let screen = document.querySelector("#screen");

let inputArr = [];
const addKey = (event) => {
  if (event.target.innerText === "C") {
    inputArr = [];
  } else if (Number(event.target.innerText)) {
    inputArr.push(event.target.innerText);
  } else {
    console.log(event.target.innerText);
  }
};

keys.forEach((key) => {
  key.addEventListener("click", addKey);
});

inputArr.join("");
