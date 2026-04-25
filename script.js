let result = document.getElementById('result');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let currentNum = document.querySelectorAll('.btn');
let addition = document.getElementById('addition');
let substraction =  document.getElementById('substraction');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');
let delet = document.getElementById('delet');

let openParen = document.getElementById('open-paren');
let closeParen = document.getElementById('close-paren');

let currentValue = '';
let isResultDisplay = false;
let displayValue = '';

let mathExpression = [];



function evaluate(arr){

    
    let temp = [...arr];
    console.log(temp);
    /** paretntheses  */
    while(temp.includes('(')){  // temp = mathExpression = [2, "+", "(", 2 , "+", 2, ")"]

        let start = temp.lastIndexOf('(');
        let end = temp.indexOf(')', start);

        // to prevent non closed parentheses
        if(end === -1){
            alert("you can't close parenthese")
            return;
        }
        // extract the nested array
        let nestedArray = temp.slice(start + 1, end);

        // the function evaluate calls itsef (that's called recursive call)
        let nestedArrayResult = evaluate(nestedArray);

        temp.splice(start, end - start + 1, nestedArrayResult );
    }

    let count = 0;
    for(let i = 0; i<temp.length; i++){
        if(temp[i] === '('){
            count--;
        }else if(temp[i] === ')'){
            count++;
        }
    }

    for(let i = 0 ; i < temp.length -1; i++){
        if(temp[i] === 'op' && temp[i+1] === 'op'){
            alert("Syntax Error");
        }
    }

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

    /*if(!mathExpression.includes(")")){
        alert("close your parentheses");
        return;
    }*/

   /* if (currentValue === '' || !mathExpression.includes(")") ) {
       alert("add a second number or close your parentheses");
       return;
     }; */

    //console.log(mathExpression);
    if(currentValue !== '') {
        mathExpression.push(Number(currentValue));
    }

    console.log("second number:" +currentValue);

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

    // to prevent the invalid input + 3 or (+ 3) for example
    if (currentValue === '') 
        {alert("you can't add operation: add a number or parentheses");
       return;
     }; 
    console.log("first number: " +currentValue);

    mathExpression.push(Number(currentValue));
    //console.log(mathExpression);
    console.log("My math expression: mathExpression= " +mathExpression); // ['(', 2]
    mathExpression.push(op);
    //console.log(mathExpression);
    console.log("My math expression: mathExpression= " +mathExpression); // ['(', 2, '+']
    displayValue = displayValue + ' ' + op + ' ';
    //console.log(displayValue)
    result.textContent = displayValue;
    currentValue = '';
    isResultDisplay = false;
}

addition.addEventListener('click', ()=> operations("+"));
substraction.addEventListener('click', ()=> operations("-"));
multiplication.addEventListener('click', ()=> operations("*"));
division.addEventListener('click', ()=> operations("/"));

openParen.addEventListener('click', function(){

    /*let lastToken = mathExpression[mathExpression.length -1];
    let operations = ["+", "-", "/", "*"];
    if(operations.includes(lastToken)) {
            return "you can't add operations after parentheses";
        }*/

    mathExpression.push('('); // mathExpression = ['(']
    console.log("My math expression: mathExpression= " +mathExpression);

    
    displayValue = displayValue + '(';
    result.textContent = displayValue;
});

closeParen.addEventListener('click', function(){

    /*if (currentValue === '') {
       alert("you can't close parentheses: add a number or parentheses")
       return; 
     }; */

  if(currentValue !== ''){ // to prevent the invalid input (2 + '')
        mathExpression.push(Number(currentValue));
        console.log("My math expression: mathExpression= " +mathExpression); // ['(', 2, '+', 2, ')']

        currentValue = '';
   }
    mathExpression.push(')');
    console.log(mathExpression);
    displayValue = displayValue + ')';
    result.textContent = displayValue;
});

clear.addEventListener('click', function () {
    currentValue = '';
    displayValue = '';
    mathExpression = [];
    result.textContent = '';
});


delet.addEventListener('click', function () {
    currentValue = currentValue.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    result.textContent = displayValue;
});