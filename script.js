
// find all buttons

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

let addButton = document.querySelector('#add');

let equalButton = document.querySelector('#equal');



// let the user input numbers

let firstNum = ;
let secondNum = 3;
let operator = '-';


operate(firstNum, secondNum, operator);




// called after all three variables are assigned and performs operation according to the operator chosen
function operate(a,b, operator) {
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


// functions used to add, subtract, multiply and divide firstNum and secondNum
function add(a,b) {
    console.log(a + b)
}

function subtract(a,b) {
    console.log(a - b)
}

function multiply(a,b) {
    console.log(a * b)
}

function divide(a,b) {
    console.log(a / b)
}

