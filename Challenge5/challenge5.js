// Here, you will be using HTML, CSS, and JS, where you will build a calculator that can take in two values and, based on the button click, you would be able to display the results below.

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calcKeys');
const display = document.querySelector('.calcDisplay');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        e.preventDefault();
        const key = e.target;
        const action = key.dataset.action;
        const keyText = key.textContent;
        const displayNum = display.textContent;
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed')); 
        
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyText;
            }   else {
                display.textContent = displayNum + keyText;
            }
            console.log('number key');
        }
        
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'percentage') {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action;
            console.log('operator key');
        }
        
        if (action === 'decimal') {
            display.textContent = displayNum +  '.';
            console.log('decimal key');
        }
        
        if (action === 'clear') {
            display.textContent = '';
            console.log('clear key');
        }
        
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;
            display.textContent = (firstValue, operator, secondValue)
            calculate = (num1, operator, num2) => {
                let result = '';
                if (operator === 'add') {
                    result = parseFloat(num1) + parseFloat(num2);
                } else if (operator === 'subtract') {
                    result = parseFloat(num1) - parseFloat(num2);
                } else if (operator  === 'multiply') {
                    result = parseFloat(num1) * parseFloat(num2);
                } else if (operator === 'divide') {
                    result = parseFloat(num1) / parseFloat(num2);
                } else if (operator === 'percentage') {
                    result = parseFloat(num1) % parseFloat(num2);
                }
                return result;
            }
        }
    }
})