
const num1 = parseFloat(prompt('Введіть перше число:'));
const num2 = parseFloat(prompt('Введіть друге число:'));
const num3 = parseFloat(prompt('Введіть третє число:'));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert('Ви ввели некоректне значення. Будь ласка, введіть числа.');
} else {

    const average = (num1 + num2 + num3) / 3;


    alert(`Середнє арифметичне введених чисел: ${average}`);
}
