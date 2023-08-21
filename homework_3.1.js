let a = parseFloat(prompt("Tape first number:"));
let b = parseFloat(prompt("Tape second number:"));

let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;

let resultMessage = `Results:
Add: ${add}
Sub: ${sub}
Mult: ${mult}
Div: ${div}`;

alert(resultMessage);