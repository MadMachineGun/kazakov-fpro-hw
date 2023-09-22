`use strict`
console.log(`Task 24.1: Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація).`);

const input1 = prompt("Введіть перший рядок:");
const input2 = prompt("Введіть другий рядок:");
const input3 = prompt("Введіть третій рядок:");

if (input1 !== null && input2 !== null && input3 !== null) {
    const inputs = [input1, input2, input3];
    const shuffledInputs = shuffleArray(inputs);
    const result = shuffledInputs.join('');
    console.log("Результат конкатенації:", result);
} else {
    console.log("Скасовано або не введено всі значення.");
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


console.log(`Task 24.2: Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.`);

const inputNumber = prompt('Введіть п\'ятизначне число:');
const number = Number(inputNumber);

if (inputNumber.length !== 5 || isNaN(number)) {
    console.log('Введене значення не є п\'ятизначним числом.');
} else {
    const digits = inputNumber.split('');
    const result = digits.join(' ');
    console.log('Результат розбиття:', result);
}



