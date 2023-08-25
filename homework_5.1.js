// Task_1: Створити масив, довжину та елементи якого задає користувач.
console.log("Task 1: Створити масив, довжину та елементи якого задає користувач.")
let length = +prompt("Enter the length of array:", 0);
if (!isNaN(length) && length > 0) {
    let userArray = [];
    for (let i = 0; i < length; i++) {
        let element = +prompt("Enter the element: ", i);
        userArray.push(element);
    }
console.log("User array:" , userArray);
} else {
    console.log("Invalid input! Please, enter the number!");
}
