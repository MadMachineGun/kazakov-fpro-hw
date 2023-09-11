console.log(`Task 16: This chain.`)
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        console.log(`Ви піднялися на сходинку. Поточна сходинка: ${this.step}`);
        return this;
    },
    down: function () {
        this.step--;
        console.log(`Ви спустилися на сходинку. Поточна сходинка: ${this.step}`);
        return this;
    },
    showStep: function () {
        console.log(`Поточна сходинка: ${this.step}`);
        return this;
    }
};

function interactiveLadderControl() {
    while (true) {
        const command = prompt(
            'Введіть команду ("up" - вгору, "down" - вниз, "show" - показати поточну сходинку, "exit" - завершити):'
        );

        if (command === 'up') {
            ladder.up();
        } else if (command === 'down') {
            ladder.down();
        } else if (command === 'show') {
            ladder.showStep();
        } else if (command === 'exit') {
            console.log('Ви завершили виконання програми.');
            break;
        } else {
            alert('Невірна команда. Спробуйте ще раз.');
        }
    }
}

interactiveLadderControl();
