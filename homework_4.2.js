// Task_1: Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let numbers = [];
// for (let i = 10; i <= 20; i++) {
//     numbers.push(i);
// }
// console.log('Task 1:\n',numbers.join(", "));
console.log('Task 1:\n',Array.from({ length: 11 }, (_, i) => i + 10).join(', '));

// Task_2: Вивести квадрати чисел від 10 до 20.
// let squares = [];
// for (let i = 10; i <= 20; i++) {
//     squares.push(i * i);
// }
// console.log('Task 2:\n',squares.join(", "));
console.log('Task 2:\n',Array.from({ length: 11 }, (_, i) => (i + 10) ** 2).join(', '));

// Task_3:Вивести таблицю множення на 7.
console.log('Task 3:');
for (let i = 1; i < 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//Task_4: Знайти суму всіх цілих чисел від 1 до 15.
console.log('Task 4:');
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
    console.log(`${i} + ${sum - i} = ${sum}`);
}

//Task_5: Знайти добуток усіх цілих чисел від 15 до 35.
// let div = 1;
// for (let i = 15; i <= 35; i++) div *= i;
// console.log('Task 5:\n','Result:', div);

console.log('Task 5:');
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
    console.log(`${i} * ${mult / i} = ${mult}`);
}

//Task_6:


//Task_7:

//Solution_of_the_task_8:

//Task_9:

//Solution_of_the_task_9:

//Task_10:

//Solution_of_the_task_10:

//Task_11:

//Solution_of_the_task_11:

//Task_12:

// Solution_of_the_task_12:

