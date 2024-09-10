let display = document.querySelector("#calc-display");

let focusNum = "0";
let storedNum = "";
let operator = "";
const DISPLAY_DIGITS = 10;

let focusNumNeedsReset = false;

function handleInputDigit(digit) {
    if (focusNumNeedsReset) {
        focusNum = digit;
        focusNumNeedsReset = false;
    } else {
        focusNum === "0" ? focusNum = digit : focusNum += digit;
    }
    updateDisplay();
}

function setOperator(input) {
    calculate();
    focusNumNeedsReset = true;
    storedNum = focusNum;
    operator = input;
}  

function toggleSign() {
    if (focusNum === "0") return;
    focusNum.includes("-") ? focusNum = focusNum.replace("-", "") : focusNum = "-" + focusNum;
    updateDisplay();
}

function makePercentage() {
    if (storedNum) {
        storedNum = operate(storedNum, 100, "/");
        updateDisplay(storedNum);
    } else if (focusNum) {
        focusNum = operate(focusNum, 100, "/");
        updateDisplay(focusNum);
    }
}

function backspace() {
    if (operator && focusNum) {
        storedNum = storedNum.slice(0, -1);
        updateDisplay(storedNum);
    } else {
        focusNum = focusNum.slice(0, -1);
        updateDisplay(focusNum);
    }
}

function setDecimal() {
    if (operator && focusNum && !storedNum.includes(".")) {
        storedNum ? storedNum += "." : storedNum = "0.";
        updateDisplay(storedNum);
    } else if (!focusNum.includes(".")) {
        if (focusNumNeedsReset) clearCalculator();
        focusNum ? focusNum += "." : focusNum = "0.";
        updateDisplay(focusNum);
    }
}

function calculate() {
    if (focusNum && storedNum && operator) {
        let result = operate(storedNum, focusNum, operator);
        focusNum = result;
        focusNumNeedsReset = true;
        storedNum = "";
        operator = "";
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = focusNum.substring(0, DISPLAY_DIGITS);
}

function clearCalculator() {
    focusNum = "0";
    storedNum = "";
    operator = "";
    focusNumNeedsReset = false;
    updateDisplay();
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