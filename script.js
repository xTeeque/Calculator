const calcScreen = document.querySelector(".lastCalcScreen");
const screen = document.querySelector(".screen");

let lastCalc = '';
let currentInput = '';
let storedValue = '';
let operator = '';

function calc(num1, num2, op){
    let result = 0;
    switch(op){
        case '*':{
            result = (parseFloat(num1) * parseFloat(num2));
            break;
        }
        case '/':{
            if (num2 != '0')
                result = parseFloat(num1) / parseFloat(num2);
            else {
                alert("Can't divide by 0!");
                erase();
            } 
            break;
        }
        case '+':{
            result = parseFloat(num1) + parseFloat(num2);
            break;
        }
        case '-':{
            result = parseFloat(num1) - parseFloat(num2);
            break;
        }
        case '%':
            result = num1 - (parseInt(num1 / num2) * num2);
            break;
    }
    return Number(result.toFixed(2));
}

function erase(){
    screen.innerText = '';
    calcScreen.innerText = '';
    lastCalc = '';
    currentInput = '';
    storedValue = '';
    operator = '';
}

function del(){
    currentInput = currentInput.substring(0, currentInput.length - 1);
    screen.innerText = currentInput;
    lastCalc = lastCalc.substring(0, lastCalc.length - 1);
}

function addDecimal(){
    if (!currentInput.includes('.')){
        currentInput += '.';
        screen.innerText += '.';
        lastCalc += '.';
    }
}

function calcHistory() {
    calcScreen.innerText = lastCalc;
    lastCalc = '';
}

function displayOnScreen(num){
    currentInput += num;
    screen.innerText += num;
    lastCalc += num;
}

function operandClicked(operand){
    if (operand === '-' && currentInput === '' && storedValue === '') {
        currentInput = '-';
        screen.innerText += '-';
        lastCalc += '-';
        return;
    }
    if (currentInput === '' && storedValue === '') return;
    screen.innerText += operand;
    lastCalc += operand;
    if (storedValue != '' && currentInput != '')
        storedValue = calc(storedValue, currentInput, operator);
    else 
        storedValue = currentInput;
    currentInput = '';
    operator = operand;
}

function equal() {
    if (currentInput === '' || operator === '') return; 
    
    const result = calc(storedValue, currentInput, operator);

    if (result !== undefined) {
        screen.innerText = result;
        calcScreen.innerText = lastCalc;
        currentInput = result.toString();
        storedValue = '';
        operator = '';
        lastCalc = currentInput;
    }
}