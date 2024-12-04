// ui.js

export function updateDisplay(value) {
    document.getElementById('result').value = value;
}

export function getCurrentInput() {
    return document.getElementById('result').value;
}
