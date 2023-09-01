
console.log("Task 13: Реалізувати рекурсивну функцію, яка зводить число n в ступінь x.")
function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree < 0) {
        return 1 / (num * pow(num, -degree - 1));
    } else {
        return num * pow(num, degree - 1);
    }
}

const base = parseFloat(prompt("Введіть число:"));
const exponent = parseInt(prompt("Введіть ступінь:"));

if (!isNaN(base) && !isNaN(exponent)) {
    const result = pow(base, exponent);
    console.log(`${base} в ступені ${exponent} дорівнює ${result}`);
} else {
    console.log("Некоректні вхідні дані. Будь ласка, введіть число та ступінь.");
}
