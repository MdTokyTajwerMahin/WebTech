let display = document.getElementById("display");
let container = document.getElementById("buttons");

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