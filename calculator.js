// calculator.js

import { add, subtract } from './mathOperations.js';
import { updateDisplay, getCurrentInput } from './ui.js';

let currentInput = '';
let previousInput = '';
let operator = null;

function addNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('');
}

function calculate(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        getResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function getResult() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    }

    updateDisplay(result);
    previousInput = result.toString();
    currentInput = '';
}

// Exposing functions to be called from the HTML
window.addNumber = addNumber;
window.clearResult = clearResult;
window.calculate = calculate;
window.getResult = getResult;
