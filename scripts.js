let display = document.querySelector("#calc-display");

let leftNum = "";
let rightNum = "";
let operator = "";

function handleInputDigit(digit) {
    if (operator) {
        rightNum += digit;
        display.value = rightNum;
    } else {
        leftNum += digit;
        display.value = leftNum;
    }
}

function setOperator(input) {
    calculate();
    operator = input;
}

function calculate() {
    if (leftNum && rightNum && operator) {
        let result = operate(leftNum, rightNum, operator);
        display.value = result;
        leftNum = String(result);
        rightNum = "";
        operator = "";
    }
}

function clearCalculator() {
    display.value = "";
    leftNum = "";
    rightNum = "";
    operator = "";
}

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
