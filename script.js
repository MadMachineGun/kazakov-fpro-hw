'use strict'

console.log(`Task 25: Напишіть скрипт, який переводить години в секунди та виводить відповідь в алерт.`);

const hoursInput = prompt('Введіть кількість годин:');
const hours = parseFloat(hoursInput);

if (!isNaN(hours)) {
    const seconds = hours * 3600;
    alert(`Кількість секунд у ${hours} годинах: ${seconds} секунд`);
    console.log(`Кількість секунд у ${hours} годинах: ${seconds} секунд`);
} else {
    alert('Ви ввели недійсне значення для годин. Будь ласка, введіть числове значення.');
    console.log('Ви ввели недійсне значення для годин. Будь ласка, введіть числове значення.');
}
