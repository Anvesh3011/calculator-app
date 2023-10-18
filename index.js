const buttonsEl = document.querySelectorAll("button");
const inputField = document.getElementById("result");
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    // console.log(buttonsEl[i].textContent);
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputField.value = "";
}
function calculateResult() {
  inputField.value = eval(inputField.value);
  //eval function  is  a string that contains valid js code like if 2*5 is a string then it will process it and gives the answer which is 10
}
function appendValue(buttonValue) {
  inputField.value += buttonValue;
}
