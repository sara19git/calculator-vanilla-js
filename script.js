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
let operation;

let isResultDisplay = false;
let displayValue = '';

let firstNum;
let secondNum;

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
    if (!operation || currentValue === '') return;
    secondNum = Number(currentValue);
    console.log("secondNum: " + secondNum);
    if(operation === '+'){
        result.textContent = sum(firstNum, secondNum);
    }else if(operation === '-'){
        result.textContent = sub(firstNum, secondNum);
    }else if(operation === '*'){
        result.textContent = mult(firstNum, secondNum);
    }else if (operation === '/') {
        if (secondNum === 0) {
            result.textContent = 'Error';
            currentValue = '';
            return;
        }
        result.textContent = div(firstNum, secondNum);
    }
    currentValue = result.textContent;
    displayValue = result.textContent;
    isResultDisplay = true;
    operation = null;
    console.log('displayValue : ' + displayValue );
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
        console.log('displayValue : ' + displayValue );

    });
})


addition.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "+";
    displayValue = displayValue + ' + ';
    result.textContent = displayValue;
    currentValue = '';
    console.log("displayValue: " + displayValue);
})

substraction.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "-";
    displayValue = displayValue + ' - ';
    result.textContent = displayValue;
    currentValue = '';
    console.log("displayValue: " + displayValue);
})

multiplication.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "*";
    displayValue = displayValue + ' * ';
    result.textContent = displayValue;
    currentValue = '';
    console.log("displayValue: " + displayValue);
})

division.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "/";
    displayValue = displayValue + ' / ';
    result.textContent = displayValue;
    currentValue = '';
    console.log("displayValue: " + displayValue);
})

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
    result.textContent = currentValue;
});
