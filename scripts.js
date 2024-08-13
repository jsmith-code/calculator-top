let display = document.querySelector("#calc-display");

let leftNum = "";
let rightNum = "";
let operator;

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function updateDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function setOperator(input) {
    operator = input;
}