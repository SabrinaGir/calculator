'use strict'

// find all buttons

let buttons = document.querySelectorAll('button');

let screen = document.querySelector('#screen');

let equalButton = document.querySelector('#equal');



// let the user input numbers

let firstNum = ''
let secondNum = ''
let operator = ''
let answer = ''


buttons.forEach(button => {
    button.addEventListener('click', event => {
        screen.textContent = updateScreen(button);
    })
})

equalButton.addEventListener('click', event => {
    operate(firstNum, secondNum, operator);
})




function updateScreen(input) {
    if (answer != '') {
        firstNum = ''
        secondNum = ''
        operator = ''
        answer = ''
    }


    if (input.className == 'num' && operator == '') {
        firstNum = firstNum + input.textContent;
    }
    else if (input.className == 'op' && firstNum != '') {
        operator = input.textContent;
    }
    else if (input.className == 'num' && operator != '') {
        secondNum = secondNum + input.textContent;
    }

    return firstNum + ' ' + operator + ' ' + secondNum;
}

// called after all three variables are assigned and performs operation according to the operator chosen
function operate(a,b, operator) {
    if (firstNum != '' && operator != '' && secondNum != '') {
        // change them into numbers so that calculations can be performed
        a = Number(a);
        b = Number(b);
        if (operator == '+') {
            add(a,b);
        }
        else if (operator == '-') {
            subtract(a,b)
        }
        else if (operator == '*') {
            multiply(a,b)
        }
        else if (operator == '/') {
            divide(a,b)
        }
    }

}


// functions used to add, subtract, multiply and divide firstNum and secondNum
function add(a,b) {
    answer = a + b
    screen.textContent = answer
}

function subtract(a,b) {
    answer = a - b
    screen.textContent = answer
}

function multiply(a,b) {
    answer = a * b
    screen.textContent = answer
}

function divide(a,b) {
    answer = a / b
    screen.textContent = answer
}

