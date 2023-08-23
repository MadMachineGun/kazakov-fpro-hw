// Task_1: Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let numbers = [];
// for (let i = 10; i <= 20; i++) {
//     numbers.push(i);
// }
// console.log('Task 1:\n',numbers.join(", "));
console.log('Task 1:\n', Array.from({length: 11}, (_, i) => i + 10).join(', '));

// Task_2: Вивести квадрати чисел від 10 до 20.
// let squares = [];
// for (let i = 10; i <= 20; i++) {
//     squares.push(i * i);
// }
// console.log('Task 2:\n',squares.join(", "));
console.log('Task 2:\n', Array.from({length: 11}, (_, i) => (i + 10) ** 2).join(', '));

// Task_3:Вивести таблицю множення на 7.
console.log('Task 3:');
for (let i = 1; i < 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//Task_4: Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Task 4:\n', sum);

//Task_5: Знайти добуток усіх цілих чисел від 15 до 35.

let seq = 1;
for (let i = 15; i <= 35; i++) {
    seq *= i;
}
console.log('Task 5:\n', seq);

//Task_6: Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let totalSum = 0;
for (let i = 1; i <= 500; i++) {
    totalSum += i;
}
console.log("Task 6:\n", totalSum / 500);

//Task_7: Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log("Task 7:")
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Task_8: Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
console.log("Task 8:")
let a = prompt("Enter a natural number:");
a = +a;
if (!isNaN(a) && a > 0) {
    console.log(`Divisors of ${a}:`);
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Invalid input!");
}

//Task_9: Визначити кількість його парних дільників.
console.log("Task 9:");

let num = prompt("Enter a natural number:");
num = +num;
let evenDivisorsCount = 0;

if (!isNaN(num) && num > 0) {
    console.log(`Divisors of ${num}:`);
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
            if (i % 2 === 0) {
                evenDivisorsCount++;
            }
        }
    }
    console.log(`Number of even divisors: ${evenDivisorsCount}`);
} else {
    console.log("Invalid input!");
}


//Task_11:

//Solution_of_the_task_11:

//Task_12:

// Solution_of_the_task_12:

