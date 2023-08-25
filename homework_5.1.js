// Task_1: Створити масив, довжину та елементи якого задає користувач.
// console.log("Task 1: Створити масив, довжину та елементи якого задає користувач.")
// let length = +prompt("Enter the length of array:", 0);
// if (!isNaN(length) && length > 0) {
//     let userArray = [];
//     for (let i = 0; i < length; i++) {
//         let element = +prompt("Enter the element: ", i);
//         userArray.push(element);
//     }
//     console.log("User array:", userArray);
//   } else {
//     console.log("Invalid input! Please, enter the number!");
// }

// Task_2: Відсортувати масив за зростанням.
// console.log("Task 2: Відсортувати масив за зростанням.")
// let arr = [12,4,6,78,24,45,65,98,14,77];
// arr.sort((a,b) => a - b);
// console.log(arr);

// console.log("Task 2: Відсортувати масив за зростанням.")
// let arrLen = +prompt("Enter the length of array:", 0);
// if (!isNaN(arrLen) && arrLen > 0) {
//     let array = [];
//     for (let i = 0; i < arrLen; i++) {
//         let el = +prompt("Enter the element: ", i);
//         array.push(el);
//     }
//     console.log("User array:" , array);
//     array.sort((a,b) => a - b);
//     console.log("Sorted array:" , array);
//     }
// else {
//     console.log("Invalid input! Please, enter the number!");
// }

// Task_3: Видалити елементи з масиву з 2 по 4 (включно!).
// console.log("Task 3: Видалити елементи з масиву з 2 по 4 (включно!).");
// let arr1 = [12,545,678,543,213,8976,32,12];
// console.log("User array:" , arr1);
// if (arr1.length >= 5) {
//     arr1.splice(1, 4);
//     console.log("Updated array:", arr1);
// }

// Task_4: У міру змін виводити вміст масиву на сторінку.


console.log("Task 1: Створити масив, довжину та елементи якого задає користувач.")
let length = +prompt("Enter the length of array:", 0);
if (!isNaN(length) && length > 0) {
    let userArray = [];
    for (let i = 0; i < length; i++) {
        let element = +prompt("Enter the element:${i + 1}");
        userArray.push(element);
    }
    console.log("User array:", userArray);
    console.log("Task 2: Відсортувати масив за зростанням.");
    console.log("Current User array:", userArray);
    userArray.sort((a, b) => a - b);
    console.log("Sorted array:", userArray)
    console.log("Task 3: Видалити елементи з масиву з 2 по 4 (включно!).");
    if (userArray.length >= 5) {
        userArray.splice(1, 4);
        console.log("Updated array:", userArray);
    } else {
        console.log("Array length is less than 5. Can't remove elements.");
    }
} else {
    console.log("Invalid input! Please enter a valid positive number.");
}

