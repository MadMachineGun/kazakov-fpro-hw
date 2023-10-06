
'use strict';
class Human {
    constructor(name, gender) {
        this.name = name; // Властивість "ім'я" об'єкта Human
        this.gender = gender; // Властивість "стать" об'єкта Human
    }
}

class Apartment {
    constructor() {
        this.residents = []; // Масив мешканців квартири
    }

    addResident(human) {
        this.residents.push(human); // Додає мешканця до квартири
    }

    getResidents() {
        return this.residents.map(resident => `${resident.name} (${resident.gender})`); // Повертає список мешканців квартири
    }
}

class Building {
    constructor(maxApartments) {
        this.apartments = Array.from({ length: maxApartments }, () => new Apartment()); // Масив квартир у будинку
    }

    getVacantApartments() {
        return this.apartments.filter(apartment => apartment.residents.length === 0); // Повертає вільні квартири
    }
}

const apartmentsContainer = document.getElementById("apartments-container"); // Отримуємо контейнер для квартир з HTML
const reserveButton = document.getElementById("reserveButton"); // Отримуємо кнопку "Зарезервувати" з HTML
const messageBox = document.getElementById("messageBox"); // Отримуємо коробку для повідомлень з HTML
const modal = document.getElementById("maxApartmentsModal"); // Отримуємо модальне вікно з HTML
const modalClose = document.getElementById("modalClose"); // Отримуємо кнопку закриття модального вікна з HTML

const building = new Building(6); // Створюємо будинок з 6 квартирами

const person1 = new Human("Tom Araya", "male"); // Створюємо об'єкт Human (людина) з ім'ям і статтю
const person2 = new Human("Joey Belladonna", "male");
const person3 = new Human("Sabina Klaasen", "female");
const person4 = new Human("Alissa White-Gluz", "female");

building.apartments[0].addResident(person1); // Додаємо мешканця до першої квартири
building.apartments[1].addResident(person2); // Додаємо мешканця до другої квартири
building.apartments[2].addResident(person3); // Додаємо мешканця до третьої квартири
building.apartments[3].addResident(person4); // Додаємо мешканця до четвертої квартири

function updateApartmentsList() {
    apartmentsContainer.innerHTML = ""; // Очищаємо контейнер для квартир
    building.apartments.forEach((apartment, index) => {
        const apartmentElement = document.createElement("div"); // Створюємо новий елемент для квартири
        apartmentElement.classList.add("apartment"); // Додаємо клас для стилізації
        apartmentElement.innerHTML = `
            <h3>Apartment ${index + 1}</h3>
            <div class="resident">${apartment.getResidents().join(', ') || 'No Resident'}</div>`; // Додаємо вміст для квартири (номер і мешканці)
        apartmentsContainer.appendChild(apartmentElement); // Додаємо елемент квартири до контейнера
    });
}

function updateModalText(text) {
    const modalBody = document.querySelector(".modal-body"); // Отримуємо модальне вікно
    modalBody.textContent = text; // Встановлюємо текст повідомлення в модальному вікні
}

reserveButton.addEventListener("click", () => { // Встановлюємо обробник події для кнопки "Зарезервувати"
    const vacantApartments = building.getVacantApartments(); // Отримуємо вільні квартири

    if (vacantApartments.length > 0) { // Якщо є вільні квартири
        const name = prompt("Enter name (in English):"); // Запитуємо ім'я мешканця

        if (!isValidName(name)) { // Перевіряємо, чи ім'я є правильним
            alert("Invalid name. Please enter a valid name using only English letters."); // Виводимо повідомлення про помилку
            return; // Припиняємо виконання функції
        }

        const gender = prompt("Enter gender (in English):"); // Запитуємо стать мешканця

        if (!isValidGender(gender)) { // Перевіряємо, чи стать є правильною
            alert("Invalid gender. Please enter 'male' or 'female' for gender."); // Виводимо повідомлення про помилку
            return; // Припиняємо виконання функції
        }

        const newPerson = new Human(name, gender); // Створюємо нового мешканця
        const vacantApartment = vacantApartments.shift(); // Отримуємо першу вільну квартиру
        vacantApartment.addResident(newPerson); // Додаємо мешканця до вільної квартири

        const message = `${name} has been added as a resident.`; // Формуємо повідомлення
        showMessage(message); // Виводимо повідомлення на сторінці
        updateModalText(message); // Оновлюємо текст модального вікна

        updateApartmentsList(); // Оновлюємо список квартир
    } else { // Якщо всі квартири зайняті
        const message = "The maximum number of apartments in the building has already been reached."; // Формуємо повідомлення про досягнення максимальної кількості квартир
        updateModalText(message); // Оновлюємо текст модального вікна
        modal.style.display = "block"; // Відображаємо модальне вікно
        modalClose.addEventListener("click", () => { // Встановлюємо обробник події для кнопки закриття модального вікна
            modal.style.display = "none"; // Сховати модальне вікно
        });
    }
});

function showMessage(message) { // Функція для відображення повідомлення
    const messageElement = document.createElement("div"); // Створюємо новий елемент для повідомлення
    messageElement.textContent = message; // Встановлюємо текст повідомлення
    messageBox.appendChild(messageElement); // Додаємо елемент до коробки для повідомлень
}

updateApartmentsList(); // Викликаємо функцію для оновлення списку квартир на початку

function isValidName(name) { // Функція для перевірки правильності імені
    const nameRegex = /^[A-Za-z\s]+$/; // Регулярний вираз для перевірки імені (тільки літери та пробіли)
    return nameRegex.test(name); // Перевіряємо, чи відповідає ім'я регулярному виразу
}

function isValidGender(gender) { // Функція для перевірки правильності статі
    return gender === "male" || gender === "female"; // Перевіряємо, чи стать є "male" або "female"
}






// 'use strict'
//
// class Human {
//     constructor(name, gender) {
//         this.name = name;
//         this.gender = gender;
//     }
// }
//
// class Apartment {
//     constructor() {
//         this.residents = [];
//     }
//
//     addResident(human) {
//         this.residents.push(human);
//     }
//
//     getResidents() {
//         return this.residents.map(resident => `${resident.name} (${resident.gender})`);
//     }
// }
//
// class Building {
//     constructor(maxApartments) {
//         this.apartments = Array.from({length: maxApartments}, () => new Apartment());
//     }
//
//     getVacantApartments() {
//         return this.apartments.filter(apartment => apartment.residents.length === 0);
//     }
// }
//
// const apartmentsContainer = document.getElementById("apartments-container");
// const reserveButton = document.getElementById("reserveButton");
// const messageBox = document.getElementById("messageBox");
// const modal = document.getElementById("maxApartmentsModal");
// const modalClose = document.getElementById("modalClose");
//
// const building = new Building(6);
//
// const person1 = new Human("Tom Araya", "male");
// const person2 = new Human("Joey Belladonna", "male");
// const person3 = new Human("Sabina Klaasen", "female");
// const person4 = new Human("Alissa White-Gluz", "female");
//
// building.apartments[0].addResident(person1);
// building.apartments[1].addResident(person2);
// building.apartments[2].addResident(person3);
// building.apartments[3].addResident(person4);
//
// function updateApartmentsList() {
//     apartmentsContainer.innerHTML = "";
//     building.apartments.forEach((apartment, index) => {
//         const apartmentElement = document.createElement("div");
//         apartmentElement.classList.add("apartment");
//         apartmentElement.innerHTML = `
//             <h3>Apartment ${index + 1}</h3>
//             <div class="resident">${apartment.getResidents().join(', ') || 'No Resident'}</div>
//         `;
//         apartmentsContainer.appendChild(apartmentElement);
//     });
// }
//
// function updateModalText(text) {
//     const modalBody = document.querySelector(".modal-body");
//     modalBody.textContent = text;
// }
//
// reserveButton.addEventListener("click", () => {
//     const vacantApartments = building.getVacantApartments();
//
//     if (vacantApartments.length > 0) {
//         const name = prompt("Enter name (in English):");
//
//         if (!isValidName(name)) {
//             alert("Invalid name. Please enter a valid name using only English letters.");
//             return;
//         }
//
//         const gender = prompt("Enter gender (in English):");
//
//         if (!isValidGender(gender)) {
//             alert("Invalid gender. Please enter 'male' or 'female' for gender.");
//             return;
//         }
//
//         const newPerson = new Human(name, gender);
//         const vacantApartment = vacantApartments.shift();
//         vacantApartment.addResident(newPerson);
//
//         const message = `${name} has been added as a resident.`;
//         showMessage(message);
//         updateModalText(message);
//
//         updateApartmentsList();
//     } else {
//         const message = "The maximum number of apartments in the building has already been reached.";
//         updateModalText(message);
//         modal.style.display = "block";
//         modalClose.addEventListener("click", () => {
//             modal.style.display = "none";
//         });
//     }
// });
//
// function showMessage(message) {
//     const messageElement = document.createElement("div");
//     messageElement.textContent = message;
//     messageBox.appendChild(messageElement);
// }
//
// updateApartmentsList();
//
// function isValidName(name) {
//     const nameRegex = /^[A-Za-z\s]+$/;
//     return nameRegex.test(name);
// }
//
// function isValidGender(gender) {
//     return gender === "male" || gender === "female";
// }

