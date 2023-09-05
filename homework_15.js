console.log("Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями.")
function createSum() {
    let total = 0;
    function add(x) {
        if (!isNaN(x)) {
            total += x;
            console.log("Проміжна сума:", total);
        } else {
            console.log("Неправильне значення. Введіть число.");
        }
        return total;
    }
    return add;
}
const sum = createSum();
while (true) {
    const userInput = prompt("Введіть число для додавання або натисніть Cancel, щоб завершити програму:");
    if (userInput === null) {
        break;
    }
    sum(parseFloat(userInput));
}
console.log("Загальна сума:", sum());
