let currentInput = '';
let input = document.querySelector('#age-input');

function addToInput(char) {
    currentInput += char;
    input.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toFixed(2);
        input.value = currentInput;
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
    input.value = '';
});

document.querySelector('#backspace').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
});

document.querySelector('#decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        addToInput('.');
    }
});

document.querySelector('#sqrt').addEventListener('click', () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = Math.sqrt(num).toFixed(2);
        input.value = currentInput;
    } else {
        currentInput = 'Error';
        input.value = currentInput;
    }
});

document.querySelector('#power').addEventListener('click', () => {
    currentInput += '**';
    input.value = currentInput;
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
    addToInput('*');
});

document.querySelector('#divide').addEventListener('click', () => {
    addToInput('/');
});

document.querySelector('#add').addEventListener('click', () => {
    addToInput('+');
});

document.querySelector('#subtract').addEventListener('click', () => {
    addToInput('-');
});
