let display = document.querySelector("#calc-display");

let leftNum = "0";
let rightNum = "";
let operator = "";

let leftNumFromOperation = false;

function handleInputDigit(digit) {
    if (operator && leftNum) {
        rightNum === "0" ? rightNum = digit : rightNum += digit;
        updateDisplay(rightNum);
    } else {
        // If leftNum comes from previous calculation, ignore
        // the previous number and allow for a new number to be input
        if (leftNumFromOperation) clearCalculator();
        leftNum === "0" ? leftNum = digit : leftNum += digit;
        updateDisplay(leftNum);
    }
}

function setOperator(input) {
    calculate();
    operator = input;
}    

function toggleSign() {
    if (operator && leftNum && rightNum) {
        rightNum.includes("-") ? 
        rightNum = rightNum.replace("-", "") : rightNum = "-" + rightNum;

        updateDisplay(rightNum);

    } else if (leftNum) {
        leftNum.includes("-") ? 
        leftNum = leftNum.replace("-", "") : leftNum = "-" + leftNum;

        updateDisplay(leftNum);
    }
}

function makePercentage() {
    if (rightNum) {
        rightNum = operate(rightNum, 100, "/");
        updateDisplay(rightNum);
    } else if (leftNum) {
        leftNum = operate(leftNum, 100, "/");
        updateDisplay(leftNum);
    }
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
    if (operator && leftNum && !rightNum.includes(".")) {
        rightNum ? rightNum += "." : rightNum = "0.";
        updateDisplay(rightNum);
    } else if (!leftNum.includes(".")) {
        if (leftNumFromOperation) clearCalculator();
        leftNum ? leftNum += "." : leftNum = "0.";
        updateDisplay(leftNum);
    }
}

function calculate() {
    if (leftNum && rightNum && operator) {
        let result = operate(leftNum, rightNum, operator);
        updateDisplay(result);
        leftNumFromOperation = true;
        rightNum = "";
        operator = "";
    }
}

function updateDisplay(value) {
    display.textContent = value.substring(0, 10);
}

function clearCalculator() {
    updateDisplay("0");
    leftNum = "0";
    rightNum = "";
    operator = "";
    leftNumFromOperation = false;
}

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    let result = getOperationResult(a, b, operator);
    return String(result);
}

function getOperationResult(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
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

            case "%":
                makePercentage();
                break;

            case "i":
                toggleSign();
                break;
        }
    }
});