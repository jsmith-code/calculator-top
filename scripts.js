let display = document.querySelector("#calc-display");

let leftNum = "";
let rightNum = "";
let operator;

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

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
    if (!operator) {
        leftNum += input;
        display.value = leftNum;
    } else {
        rightNum += input;
        display.value = rightNum;
    }
}

function clearDisplay() {
    display.value = "";
    leftNum = "";
    rightNum = "";
    operator = "";
}

function setOperator(input) {
    operator = input;
}

function calculate() {
    if (leftNum && rightNum && operator) {
        let result = operate(leftNum, rightNum, operator);
        display.value = result;
        leftNum = result;
        rightNum = "";
        operator = "";
    }
}