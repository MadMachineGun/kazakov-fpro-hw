// Task_14.1
console.log("Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.");
function calculateAverage(numbers) {
    const filteredNumbers = numbers.filter(item => typeof item === 'number');

    if (filteredNumbers.length === 0) {
        return 0;
    }

    const sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum / filteredNumbers.length;
}

const length = parseInt(prompt("Введіть довжину масиву:"));
const inputArray = [];

if (!isNaN(length) && length > 0) {
    for (let i = 0; i < length; i++) {
        const userInput = parseFloat(prompt(`Введіть значення для елемента ${i + 1}:`));
        if (!isNaN(userInput)) {
            inputArray.push(userInput);
        } else {
            console.log(`Неправильне значення для елемента ${i + 1}.`);
            i--;
        }
    }

    const average = calculateAverage(inputArray);
    console.log("Ваш масив:", inputArray);
    console.log("Середнє арифметичне числових елементів:", average);
} else {
    console.log("Неправильне значення довжини масиву.");
}

