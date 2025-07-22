//const calcScreen = document.querySelector(".lastCalcScreen");
const screen = document.querySelector(".screen");

function operate(num1, operator, num2) {
    [num1, num2] = [num1, num2].map(i => parseFloat(i));
    if (operator === '*') return num1 * num2;
    if (operator === '/' && num2 != '0') return num1 / num2;
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '%') return num1 % num2;
    alert("Can't divide by 0!");
    erase();
}

