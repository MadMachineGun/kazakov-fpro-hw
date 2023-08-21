let operation = prompt("Choose an operation (add, sub, mult, div):");

if (operation !== "add" && operation !== "sub" && operation !== "mult" && operation !== "div") {
    alert("Invalid operation chosen");
} else {
    let firstNumber = parseFloat(prompt("Enter the first number:"));

    if (isNaN(firstNumber)) {
        alert("Invalid number entered");
    } else {
        let secondNumber = parseFloat(prompt("Enter the second number:"));

        if (isNaN(secondNumber)) {
            alert("Invalid number entered");
        } else {
            let result;

            if (operation === "add") {
                result = firstNumber + secondNumber;
            } else if (operation === "sub") {
                result = firstNumber - secondNumber;
            } else if (operation === "mult") {
                result = firstNumber * secondNumber;
            } else if (operation === "div") {
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    alert("Division by zero is not allowed");
                }
            }

            if (result !== undefined) {
                alert(`Result: ${result}`);
            }
        }
    }
}
