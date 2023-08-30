
console.log("Task 11: Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.");

function getUserInput(message) {
    return prompt(message);
}

function displayArray(array) {
    console.log("Ваш масив:", array.join(", "));
}

function main() {
    const length = parseInt(getUserInput("Введіть довжину масиву:"));

    if (isNaN(length) || length <= 0) {
        console.log("Неправильне значення довжини масиву.");
        return;
    }

    const array = [];

    const getArrayValue = (i) => {
        const value = parseFloat(getUserInput(`Введіть значення для елемента ${i + 1}:`));

        if (!isNaN(value)) {
            array.push(value);
        } else {
            console.log(`Неправильне значення для елемента ${i + 1}.`);
        }
    };

    Array.from({ length }, (_, i) => i).forEach(getArrayValue);

    displayArray(array);

    const itemToDelete = parseFloat(getUserInput("Введіть значення елемента для видалення:"));

    if (!isNaN(itemToDelete)) {
        const indexToDelete = array.indexOf(itemToDelete);

        if (indexToDelete !== -1) {
            array.splice(indexToDelete, 1);
            displayArray(array);
        } else {
            console.log("Елемент для видалення не знайдений.");
        }
    } else {
        console.log("Неправильне значення для елемента для видалення.");
    }
}

main();
