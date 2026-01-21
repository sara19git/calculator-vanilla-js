let result = document.getElementById('result');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let currentNum = document.querySelectorAll('.btn');
let addition = document.getElementById('addition');
let substraction =  document.getElementById('substraction');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');
let delelte = document.getElementById('')
let currentValue = '';
let operation;

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
    operation = null;
})


currentNum.forEach(btn => {
    btn.addEventListener('click', function(event){
        if (event.target.textContent === '.' && currentValue.includes('.')) return;
        currentValue = currentValue + event.target.textContent ;
        result.textContent = currentValue;
    })
})


addition.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "+";
    currentValue = '';
    result.textContent = '';
})

substraction.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "-";
    currentValue = '';
    result.textContent = '';
})

multiplication.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "*";
    currentValue = '';
    result.textContent = '';
})

division.addEventListener('click', function(){
    if (currentValue === '') return;
    firstNum = Number(currentValue);
    operation = "/";
    currentValue = '';
    result.textContent = '';
})

clear.addEventListener('click', function () {
    currentValue = '';
    firstNum = null;
    secondNum = null;
    operation = null;
    result.textContent = '';
});


delelte.addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    result.textContent = currentValue;
});
