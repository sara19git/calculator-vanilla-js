let result = document.getElementById('result');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let currentNum = document.querySelectorAll('.btn');
let addition = document.getElementById('addition');
let substraction =  document.getElementById('substraction');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');
let delelte = document.getElementById('delelte');
let currentValue = '';
let isResultDisplay = false;
let displayValue = '';

let inputs = [];
let operationsArray = [];

function sum(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

equal.addEventListener('click', function(){
    if (currentValue === '') return;
    inputs.push(Number(currentValue));
    console.log("second number: ", inputs);
    let firstNum = inputs[0];
    for(let i = 0 ; i < operationsArray.length; i++){
        let secondNum = inputs[i + 1];
        if(operationsArray[i] === '+'){
        firstNum = sum(firstNum, secondNum);
        }else if(operationsArray[i] === '-'){
            firstNum = sub(firstNum, secondNum);
        }else if(operationsArray[i] === '*'){
            firstNum = mult(firstNum, secondNum);
        }else if (operationsArray[i] === '/') {
            if (inputs[i+1] === 0) {
                result.textContent = 'Error';
                currentValue = '';
                return;
            }
            firstNum = div(firstNum, secondNum);
        }
    }
    console.log(firstNum);
    result.textContent = firstNum;
    
    currentValue = result.textContent.toString();
    displayValue = result.textContent.toString();
    inputs = [];
    operationsArray = [];
    isResultDisplay = true;
})


currentNum.forEach(btn => {
    btn.addEventListener('click', function(event){
       if ( event.target.textContent === '.' && currentValue.includes('.')) return;
       if (isResultDisplay) {
            currentValue = event.target.textContent;
            displayValue = currentValue;   
            isResultDisplay = false;
        } else {
            currentValue = currentValue + event.target.textContent;
            displayValue = displayValue + event.target.textContent;
        }
        result.textContent = displayValue;

    });
})


function operations(op){
    if (currentValue === '') return;
    inputs.push(Number(currentValue));
    console.log("first number: ", inputs);
    operationsArray.push(op);
    console.log(operationsArray);
    displayValue = displayValue + ' ' + op + ' ';
    result.textContent = displayValue;
    currentValue = '';
    isResultDisplay = false;
}

addition.addEventListener('click', ()=> operations("+"));
substraction.addEventListener('click', ()=> operations("-"));
multiplication.addEventListener('click', ()=> operations("*"));
division.addEventListener('click', ()=> operations("/"));


clear.addEventListener('click', function () {
    currentValue = '';
    displayValue = '';
    firstNum = null;
    secondNum = null;
    operation = null;
    result.textContent = '';
});


delelte.addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    result.textContent = displayValue;
});
