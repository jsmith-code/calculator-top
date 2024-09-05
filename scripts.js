let display = document.querySelector("#calc-display");

let leftNum = "";
let rightNum = "";
let operator = "";

function handleInputDigit(digit) {
    if (operator && leftNum) {
        rightNum === "0" ? rightNum = digit : rightNum += digit;
        updateDisplay(rightNum);
    } else {
        leftNum === "0" ? leftNum = digit : leftNum += digit;
        updateDisplay(leftNum);
    }
}

function setOperator(input) {
    calculate();
    operator = input;
}    

function backspace() {
    if (operator && leftNum) {
        rightNum = rightNum.slice(0, -1);
        updateDisplay(rightNum);
    } else {
        leftNum = leftNum.slice(0, -1);
        updateDisplay(leftNum);
    }
}

function setDecimal() {
    if (operator && leftNum) {
        if (!rightNum.includes(".")) {
            rightNum ? rightNum += "." : rightNum = "0.";
            updateDisplay(rightNum);
        }
    } else {
        if (!leftNum.includes(".")) {
            leftNum ? leftNum += "." : leftNum = "0.";
            updateDisplay(leftNum);
        }
    }
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

const digits = "0123456789";
const operators = "/*-+";

document.addEventListener("keydown", (e) => {
    if (digits.includes(e.key)) {
        handleInputDigit(e.key);
    } else if (operators.includes(e.key)) {
        setOperator(e.key);
    } else {
        switch (e.key) {
            case "Enter":
                calculate();
                break;

            case "Backspace":
                backspace();
                break;

            case "c":
            case "Delete":
                clearCalculator();
                break;

            case ".":
                setDecimal();
                break;
        }
    }
});