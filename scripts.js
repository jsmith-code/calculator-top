let display = document.querySelector("#calc-display");

let leftNum = "";
let rightNum = "";
let operator = "";

function handleInputDigit(digit) {
    if (operator && leftNum) {
        rightNum += digit;
        updateDisplay(rightNum);
    } else {
        leftNum += digit;
        updateDisplay(leftNum);
    }
}

function setOperator(input) {
    calculate();
    operator = input;
}    

function calculate() {
    if (leftNum && rightNum && operator) {
        let result = operate(leftNum, rightNum, operator);
        updateDisplay(result);
        leftNum = String(result);
        rightNum = "";
        operator = "";
    }
}

function updateDisplay(value) {
    display.value = String(value).substring(0, 11);
}

function clearCalculator() {
    updateDisplay("");
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
