// Task_14.1
console.log("Task 14.1: Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.");

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

// Task_14.2
console.log("Task 14.2: Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.");

function doMath(x, znak, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    if (isNaN(x) || isNaN(y)) {
        console.log("Введіть коректні числа.");
        return;
    }

    function calculate(x, znak, y) {
        switch (znak) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                if (y !== 0) {
                    return x / y;
                } else {
                    console.log("Ділення на нуль неможливе.");
                    return null;
                }
            case '%':
                if (y !== 0) {
                    return x % y;
                } else {
                    console.log("Ділення за модулем на нуль неможливе.");
                    return null;
                }
            case '^':
                return Math.pow(x, y);
            default:
                console.log("Непідтримувана операція.");
                return null;
        }
    }

    const result = calculate(x, znak, y);

    if (result !== null) {
        console.log(`${x} ${znak} ${y} = ${result}`);
    }
}

const x = prompt("Введіть перше число:");
const znak = prompt("Введіть операцію (+, -, *, /, %, ^):");
const y = prompt("Введіть друге число:");

doMath(x, znak, y);

// Task_14.3
console.log("Task_14.3: Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.");

function fill2DArray() {
    const numRows = +prompt("Введіть кількість рядків:");
    const numCols = +prompt("Введіть кількість стовпців:");

    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        console.log("Некоректні параметри. Введіть додатні цілі числа.");
        return;
    }

    const resultArray = new Array(numRows).fill(null).map(() => new Array(numCols).fill(null));

    resultArray.forEach((row, rowIndex) => row.forEach((_, colIndex) => {
        row[colIndex] = prompt(`Введіть значення для елементу (${rowIndex}, ${colIndex}):`);
    }));

    return resultArray;
}

const twoDArray = fill2DArray();

if (twoDArray) {
    console.log("Заповнений двовимірний масив:", twoDArray);
}


// Task_14.4
console.log("Task_14.4: Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(\" hello world\", ['l', 'd'])' поверне нам \"heo wor\". Вихідний рядок та символи для видалення задає користувач.");

const inputString = prompt("Введіть два слова через пробіл:");

if (inputString === null) {
    console.error("Ви відмінили ввід. Будь ласка, введіть два слова.");
} else if (inputString.trim() === "") {
    console.error("Помилка: Ви не ввели слова.");
} else {
    const words = inputString.split(' ');

    if (words.length < 2) {
        console.error("Помилка: Має бути не менше двох слів.");
    } else {
        const [firstWord, secondWord] = words;

        const removeCharsFromWord = (word, charsToRemove) =>
            word.split('').filter(char => !charsToRemove.includes(char)).join('');

        const charsToRemoveInput = prompt("Введіть символи для видалення (через кому або пробіл):");

        if (charsToRemoveInput === null) {
            console.error("Ви відмінили ввід символів для видалення.");
        } else {
            const charsToRemove = charsToRemoveInput.split(/[,\s]+/);
            const result = [firstWord, secondWord].map(word =>
                removeCharsFromWord(word, charsToRemove)).join(' ');

            console.log("Оригінальні слова:", firstWord, secondWord);
            console.log("Результат:", result);
        }
    }
}


// function calculateAverage(numbers) {
//     const filteredNumbers = numbers.filter(item => typeof item === 'number');
//
//     if (filteredNumbers.length === 0) {
//         return 0;
//     }
//
//     const sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//
//     return sum / filteredNumbers.length;
// }
//
// function doMath(x, znak, y) {
//     x = parseFloat(x);
//     y = parseFloat(y);
//
//     if (isNaN(x) || isNaN(y)) {
//         console.log("Введіть коректні числа.");
//         return;
//     }
//
//     function calculate(x, znak, y) {
//         switch (znak) {
//             case '+':
//                 return x + y;
//             case '-':
//                 return x - y;
//             case '*':
//                 return x * y;
//             case '/':
//                 if (y !== 0) {
//                     return x / y;
//                 } else {
//                     console.log("Ділення на нуль неможливе.");
//                     return null;
//                 }
//             case '%':
//                 if (y !== 0) {
//                     return x % y;
//                 } else {
//                     console.log("Ділення за модулем на нуль неможливе.");
//                     return null;
//                 }
//             case '^':
//                 return Math.pow(x, y);
//             default:
//                 console.log("Непідтримувана операція.");
//                 return null;
//         }
//     }
//
//     const result = calculate(x, znak, y);
//
//     if (result !== null) {
//         console.log(`${x} ${znak} ${y} = ${result}`);
//     }
// }
//
// function fill2DArray() {
//     const numRows = +prompt("Введіть кількість рядків:");
//     const numCols = +prompt("Введіть кількість стовпців:");
//
//     if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
//         console.log("Некоректні параметри. Введіть додатні цілі числа.");
//         return;
//     }
//
//     const resultArray = new Array(numRows).fill(null).map(() => new Array(numCols).fill(null));
//
//     resultArray.forEach((row, rowIndex) => row.forEach((_, colIndex) => {
//         row[colIndex] = prompt(`Введіть значення для елементу (${rowIndex}, ${colIndex}):`);
//     }));
//
//     return resultArray;
// }
//
// function removeCharsFromWords(inputString) {
//     if (inputString === null) {
//         console.error("Ви відмінили ввід. Будь ласка, введіть два слова.");
//         return;
//     } else if (inputString.trim() === "") {
//         console.error("Помилка: Ви не ввели слова.");
//         return;
//     } else {
//         const words = inputString.split(' ');
//
//         if (words.length < 2) {
//             console.error("Помилка: Має бути не менше двох слів.");
//             return;
//         } else {
//             const [firstWord, secondWord] = words;
//
//             const charsToRemoveInput = prompt("Введіть символи для видалення (через кому або пробіл):");
//
//             if (charsToRemoveInput === null) {
//                 console.error("Ви відмінили ввід символів для видалення.");
//                 return;
//             } else {
//                 const charsToRemove = charsToRemoveInput.split(/[,\s]+/);
//                 const result = [firstWord, secondWord].map(word =>
//                     word.split('').filter(char => !charsToRemove.includes(char)).join(' '));
//
//                 console.log("Оригінальні слова:", firstWord, secondWord);
//                 console.log("Результат:", result.join(' '));
//             }
//         }
//     }
// }
//
// function main() {
//     const choice = prompt("Оберіть завдання (1, 2, 3, 4):");
//
//     switch (choice) {
//         case '1':
//             alert("Завдання 1: Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.");
//             const length = parseInt(prompt("Введіть довжину масиву:"));
//             const inputArray = [];
//
//             if (!isNaN(length) && length > 0) {
//                 for (let i = 0; i < length; i++) {
//                     const userInput = parseFloat(prompt(`Введіть значення для елемента ${i + 1}:`));
//                     if (!isNaN(userInput)) {
//                         inputArray.push(userInput);
//                     } else {
//                         console.log(`Неправильне значення для елемента ${i + 1}.`);
//                         i--;
//                     }
//                 }
//
//                 const average = calculateAverage(inputArray);
//                 console.log("Ваш масив:", inputArray);
//                 console.log("Середнє арифметичне числових елементів:", average);
//             } else {
//                 console.log("Неправильне значення довжини масиву.");
//             }
//             break;
//         case '2':
//             alert("Завдання 2: Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.");
//             const x = prompt("Введіть перше число:");
//             const znak = prompt("Введіть операцію (+, -, *, /, %, ^):");
//             const y = prompt("Введіть друге число:");
//
//             doMath(x, znak, y);
//             break;
//         case '3':
//             alert("Завдання 3: Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.");
//             const twoDArray = fill2DArray();
//
//             if (twoDArray) {
//                 console.log("Заповнений двовимірний масив:", twoDArray);
//             }
//             break;
//         case '4':
//             alert("Завдання 4: Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(\" hello world\", ['l', 'd'])' поверне нам \"heo wor\". Вихідний рядок та символи для видалення задає користувач.");
//             const inputString = prompt("Введіть два слова через пробіл:");
//             removeCharsFromWords(inputString);
//             break;
//         default:
//             console.log("Некоректний вибір завдання.");
//             break;
//     }
// }
//
// main();


