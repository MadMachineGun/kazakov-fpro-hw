
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));

let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;

let resultMessage = `Results:
${a} + ${b} = ${add}
${a} - ${b} = ${sub}
${a} * ${b} = ${mult}
${a} / ${b} = ${div}`;

alert(resultMessage);
