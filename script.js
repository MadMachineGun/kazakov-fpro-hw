// Завдання 1
console.log("Завдання 1: Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5.");

let output = "";
for (let i = 20; i <= 30; i += 0.5) {
    output += i + " ";
}
console.log(output + "\n");

// Завдання 2
console.log("Завдання 2: Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.");
const usdToUah = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * usdToUah;
    console.log(`${dollars} доларів = ${uah} грн`);
}
console.log("\n");

// Завдання 3
console.log("Завдання 3: Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.");
const n = parseInt(prompt("Введіть число N:"));

console.log(`Ваше число:`, n);

for (let i = 1; i <= 100; i++) {
    const square = i ** 2;
    if (square <= n) {
        console.log(square);
    }
}

console.log("\n");

// Завдання 4
console.log("Завдання 4: Дане ціле число. З'ясувати, чи є воно простим " +
    "(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).");

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numberToCheck = parseInt(prompt("Введіть ціле число:"));
console.log(`Ваше число:`, numberToCheck);

if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} є простим числом`);
} else {
    console.log(`${numberToCheck} не є простим числом`);
}

console.log("\n");

// Завдання 5
console.log("Завдання 5:Дане деяке число. Визначити, чи можна одержати це число" +
    " шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).");

function canGetByPowerOfThree(number) {
    if (number === 1) {
        return true;
    }
    for (let base = 2; base <= Math.sqrt(number); base++) {
        let x = base;
        while (x <= number) {
            x *= 3;
            if (x === number) {
                return true;
            }
        }
    }
    return false;
}

const numberToCheckPowerOfThree = parseInt(prompt("Введіть ціле число:"));
console.log(`Ваше число:`, numberToCheckPowerOfThree);

if (canGetByPowerOfThree(numberToCheckPowerOfThree)) {
    console.log(`Можна отримати число ${numberToCheckPowerOfThree} зведенням числа 3 у деякий ступінь`);
} else {
    console.log(`Не можна отримати число ${numberToCheckPowerOfThree} зведенням числа 3 у деякий ступінь`);
}
