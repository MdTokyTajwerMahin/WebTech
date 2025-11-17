let display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}
