'use strict';

class Hamburger {
    constructor() {
        this.size = {
            small: { price: 50, calories: 120 },
            large: { price: 100, calories: 180 }
        };
        this.stuffings = {
            cheese: { price: 15, calories: 40 },
            salad: { price: 20, calories: 5 },
            potato: { price: 15, calories: 50 }
        };
        this.toppings = {
            mayo: { price: 10, calories: 75 },
            spice: { price: 10, calories: 0 }
        };
        this.quantity = {
            small: 0,
            large: 0,
            cheese: 0,
            salad: 0,
            potato: 0,
            mayo: 0,
            spice: 0
        };
    }

    addTopping(target) {
        this.quantity[target]++;
        updateResult();
    }

    removeTopping(target) {
        if (this.quantity[target] > 0) {
            this.quantity[target]--;
            updateResult();
        }
    }

    calculatePrice() {
        let basePrice = 0;

        // Calculate price for size and stuffing
        for (const key of Object.keys(this.size)) {
            basePrice += this.size[key].price * this.quantity[key];
        }
        for (const key of Object.keys(this.stuffings)) {
            basePrice += this.stuffings[key].price * this.quantity[key];
        }

        const toppingsPrice = Object.keys(this.toppings).reduce((total, topping) => {
            return total + this.toppings[topping].price * this.quantity[topping];
        }, 0);
        return basePrice + toppingsPrice;
    }

    calculateCalories() {
        let baseCalories = 0;

        // Calculate calories for size and stuffing
        for (const key of Object.keys(this.size)) {
            baseCalories += this.size[key].calories * this.quantity[key];
        }
        for (const key of Object.keys(this.stuffings)) {
            baseCalories += this.stuffings[key].calories * this.quantity[key];
        }

        const toppingsCalories = Object.keys(this.toppings).reduce((total, topping) => {
            return total + this.toppings[topping].calories * this.quantity[topping];
        }, 0);
        return baseCalories + toppingsCalories;
    }
}

// Обработчик события для кнопки "Clear"
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    for (const key of Object.keys(hamburger.quantity)) {
        hamburger.quantity[key] = 0;
        const inputElement = document.getElementById(key);
        inputElement.value = hamburger.quantity[key];
    }
    updateResult();
});

// Обработчики событий для кнопок размера и начинки
const sizeButtons = document.querySelectorAll('.counter-button[data-target]');
sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;
        const action = button.classList.contains('plus') ? 'addTopping' : 'removeTopping';
        hamburger[action](target);
        document.getElementById(target).value = hamburger.quantity[target];
        updateResult();
    });
});

const caloriesElement = document.getElementById('calories');
const priceElement = document.getElementById('price');

function updateResult() {
    // const quantity = hamburger.quantity;
    const calories = hamburger.calculateCalories();
    const price = hamburger.calculatePrice();
    caloriesElement.textContent = calories;
    priceElement.textContent = price;
}

const hamburger = new Hamburger();
updateResult();
