let a = parseFloat(prompt("Tape first number:"));
let b = parseFloat(prompt("Tape second number:"));

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;

let resultMessage = `Results:
Sum: ${sum}
Sub: ${sub}
Mult: ${mult}
Div: ${div}`;

alert(resultMessage);