// Task_1: Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let numbers = [];
// for (let i = 10; i <= 20; i++) {
//     numbers.push(i);
// }
// console.log('Task 1:\n',numbers.join(", "));
console.log('Task 1: Вивести на сторінку в один рядок через кому числа від 10 до 20.\n', Array.from({length: 11}, (_, i) => i + 10).join(', '));

// Task_2: Вивести квадрати чисел від 10 до 20.
// let squares = [];
// for (let i = 10; i <= 20; i++) {
//     squares.push(i * i);
// }
// console.log('Task 2:\n',squares.join(", "));
console.log('Task 2: Вивести квадрати чисел від 10 до 20.\n', Array.from({length: 11}, (_, i) => (i + 10) ** 2).join(', '));

// Task_3:Вивести таблицю множення на 7.
console.log('Task 3:Вивести таблицю множення на 7.');
for (let i = 1; i < 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//Task_4: Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Task 4: Знайти суму всіх цілих чисел від 1 до 15.\n', sum);

//Task_5: Знайти добуток усіх цілих чисел від 15 до 35.

let seq = 1;
for (let i = 15; i <= 35; i++) {
    seq *= i;
}
console.log('Task 5: Знайти добуток усіх цілих чисел від 15 до 35.\n', seq);

//Task_6: Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let totalSum = 0;
for (let i = 1; i <= 500; i++) {
    totalSum += i;
}
console.log("Task 6:Знайти середнє арифметичне всіх цілих чисел від 1 до 500.\n", totalSum / 500);

//Task_7: Вивести суму лише парних чисел в діапазоні від 30 до 80.
let number = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        number += i;
    }
}
console.log("Task 7: Вивести суму лише парних чисел в діапазоні від 30 до 80.\n", number);

//Task_8: Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log("Task 8: Вивести всі числа в діапазоні від 100 до 200 кратні 3.")
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Task_9: Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
console.log("Task 9: Дано натуральне число. Знайти та вивести на сторінку всі його дільники.")
let a = prompt("Enter a natural number:");
a = +a;
if (!isNaN(a) && a > 0) {
    console.log("Divisors of a number", a);
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Invalid input!");
}

//Task_10: Визначити кількість його парних дільників.
console.log("Task 10: Визначити кількість його парних дільників.");
let num = prompt("Enter a natural number:");
num = +num;
let evenDivisorsCount = 0;
if (!isNaN(num) && num > 0) {
    // console.log(`Divisors of ${num}:`);
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            // console.log(i);
            if (i % 2 === 0) {
                evenDivisorsCount++;
            }
        }
    }
    console.log("Number of even divisors a number", num,":\n", evenDivisorsCount);
} else {
    console.log("Invalid input!");
}

//Task_11:



//Task_12:



