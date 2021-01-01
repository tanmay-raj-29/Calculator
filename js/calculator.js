let currTotal = 0;
let buffer = "0"; // number visible on screen
let prevOperator = "";
const screen = document.querySelector(".screen");

document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function handleSymbol(value) {
  console.log(value);
  switch (value) {
    case "←":
      buffer = buffer.slice(0, -1);
      break;
    case "C":
      buffer = "0";
      currTotal = 0;
      prevOperator = "";
      break;
    case "=":
      computeResult();
      break;
    default:
        currTotal = parseInt(buffer);
        prevOperator = value;
        buffer = "0";
      break;
  }
  rerenderScreen();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  rerenderScreen();
}

function rerenderScreen() {
  console.log(buffer);
  if (buffer.length === 0) buffer = "0";
  screen.innerText = buffer;
}

function computeResult() {
  switch (prevOperator) {
    case "+":
      buffer = (currTotal + parseInt(buffer)).toString();
      break;
    case "-":
      buffer = (currTotal - parseInt(buffer)).toString();
      break;
    case "×":
      buffer = (currTotal * parseInt(buffer)).toString();
      break;
    case "÷":
      buffer = (currTotal / parseInt(buffer)).toString();
      break;
    default:
      break;
  }
}