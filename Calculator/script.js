let display = document.getElementById("display");
let container = document.getElementById("buttons");

// Number buttons 0-9
for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", function() {
        display.value += i;
    });
    container.appendChild(btn);
}

// 0 button (span 2 columns)
let zero = document.createElement("button");
zero.textContent = "0";
zero.className = "zero";
zero.addEventListener("click", function() {
    display.value += "0";
});
container.appendChild(zero);

// Decimal point
let dot = document.createElement("button");
dot.textContent = ".";
dot.addEventListener("click", function() {
    display.value += ".";
});
container.appendChild(dot);

// + button
let plus = document.createElement("button");
plus.textContent = "+";
plus.addEventListener("click", function() {
    display.value += "+";
});
container.appendChild(plus);

// - button
let minus = document.createElement("button");
minus.textContent = "-";
minus.addEventListener("click", function() {
    display.value += "-";
});
container.appendChild(minus);

// × button
let multiply = document.createElement("button");
multiply.textContent = "×";
multiply.addEventListener("click", function() {
    display.value += "*";
});
container.appendChild(multiply);

// ÷ button
let divide = document.createElement("button");
divide.textContent = "÷";
divide.addEventListener("click", function() {
    display.value += "/";
});
container.appendChild(divide);

// Clear button
let clear = document.createElement("button");
clear.textContent = "C";
clear.addEventListener("click", function() {
    display.value = "";
});
container.appendChild(clear);

// Equal button
let equal = document.createElement("button");
equal.textContent = "=";
equal.className = "equal";
equal.addEventListener("click", function() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});
container.appendChild(equal);
