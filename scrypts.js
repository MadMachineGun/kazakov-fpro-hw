
let currentInput = '';
let currentNumber = '';
let operator = '';
let input = document.querySelector('#age-input');

function addToInput(char) {
    if (operator === '') {
        currentNumber += char;
    }
    currentInput += char;
    input.value = currentInput;
}

function calculate() {
    try {
        currentNumber = eval(currentInput).toFixed(2);
        input.value = currentNumber;
        currentInput = currentNumber;
    } catch (error) {
        currentInput = 'Error';
        input.value = currentInput;
    }
}

document.querySelector('#calculate').addEventListener('click', () => {
    calculate();
});

document.querySelector('#clear').addEventListener('click', () => {
    currentInput = '';
    currentNumber = '';
    operator = '';
    input.value = '';
});

document.querySelector('#backspace').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    currentNumber = currentNumber.slice(0, -1);
    input.value = currentInput;
});

document.querySelector('#decimal').addEventListener('click', () => {
    if (!currentNumber.includes('.') || operator !== '') {
        addToInput('.');
    }
});

document.querySelector('#sqrt').addEventListener('click', () => {
    const num = parseFloat(currentNumber);
    if (!isNaN(num)) {
        currentNumber = Math.sqrt(num).toFixed(2);
        input.value = currentNumber;
        currentInput = currentNumber;
    } else {
        currentInput = 'Error';
        input.value = currentInput;
    }
});

document.querySelector('#power').addEventListener('click', () => {
    addToInput('**');
});

document.querySelector('#percent').addEventListener('click', () => {
    addToInput('/100*');
});

for (let i = 0; i < 10; i++) {
    document.querySelector(`#btn-${i}`).addEventListener('click', () => {
        addToInput(i);
    });
}

document.querySelector('#multiply').addEventListener('click', () => {
    if (operator !== '') {
        calculate();
    }
    operator = '*';
    addToInput('*');
});

document.querySelector('#divide').addEventListener('click', () => {
    if (operator !== '') {
        calculate();
    }
    operator = '/';
    addToInput('/');
});

document.querySelector('#add').addEventListener('click', () => {
    if (operator !== '') {
        calculate();
    }
    operator = '+';
    addToInput('+');
});

document.querySelector('#subtract').addEventListener('click', () => {
    if (operator !== '') {
        calculate();
    }
    operator = '-';
    addToInput('-');
});
