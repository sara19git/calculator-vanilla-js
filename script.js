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

let mathExpression = [];

function evaluate(arr){

    let temp = [...arr];

    /** high priority */
    for(let i = 0 ; i<temp.length ; i++){
        if(temp[i] === '*' || temp[i] === '/'){
            let result;

            if(temp[i] === '*'){
                result = temp[i-1] * temp[i+1];
            }else {
                if(temp[i+1] === 0) {
                    return 'Error';
                }
                result = temp[i-1] / temp[i+1];
            }

            temp.splice(i-1 , 3 , result);
            i--;
        }

    }

    /** low priority */

    for(let i = 0; i < temp.length; i++){
        if(temp[i] === '+' || temp[i] === '-'){
            let result;

            if(temp[i] === '+'){
                result = temp[i-1] + temp[i+1];
            }else {
                result = temp[i-1] - temp[i+1];
            }

            temp.splice(i-1 , 3 , result);
            i--;
        }
    }

    return temp[0];
}

equal.addEventListener('click', function(){

    if(currentValue === '') return;

    mathExpression.push(Number(currentValue));

    let finalResult = evaluate(mathExpression);

    result.textContent = finalResult;
    console.log('result: ' +finalResult);
    currentValue = finalResult.toString();
    displayValue = finalResult.toString();
    mathExpression = [];
    isResultDisplay = true;

   
})

// loop over each button number
currentNum.forEach(btn => {
    btn.addEventListener('click', function(event){
        // prevent double "." click 
       if ( event.target.textContent === '.' && currentValue.includes('.')) return;
       //check if the result is diplayed on the screen 
       // if isResultDisplay = true enter a new number then turn isResultDisplay = false
       if (isResultDisplay) {
            currentValue = event.target.textContent;
            displayValue = currentValue;   
            isResultDisplay = false;
            // else is the ordinary state means enter numbers normally
        } else {
            currentValue = currentValue + event.target.textContent;
            displayValue = displayValue + event.target.textContent;
        }
        // show the result on the screen
        result.textContent = displayValue;

    });
})


function operations(op){
    if (currentValue === '') return;
    mathExpression.push(Number(currentValue));
    mathExpression.push(op);
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
    mathExpression = [];
    result.textContent = '';
});


delelte.addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    result.textContent = displayValue;
});