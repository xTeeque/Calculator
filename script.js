const screen = document.querySelector(".screen");

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
    }
    return Number(result.toFixed(2));
}

function erase(){
    screen.innerText = '';
    currentInput = '';
    storedValue = '';
    operator = '';
}

function displayOnScreen(num){
        currentInput += num;
        if (storedValue != ''){
            screen.innerText += num;
        }
        else
            screen.innerText += num;
}

function operandClicked(operand){
    if (currentInput != ''){
        screen.innerText += ` ${operand} `;
        if (operator != ''){
            storedValue = calc(storedValue, currentInput, operator);
            operator = operand;
            screen.innerText = `${storedValue} ${operator} `;
        }
        else {
            operator = operand;
            storedValue = currentInput;
        }
        currentInput = '';
    }
    else {
        erase();
        screen.innerText = "Error!";
    }
}

function equal(){
    if (currentInput != '')
        storedValue = calc(storedValue, currentInput, operator);

    screen.innerText = storedValue;
    currentInput = storedValue;
    storedValue = '';
    operator = '';
}