'use strict'

class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(human) {
        this.residents.push(human);
    }

    getResidents() {
        return this.residents.map(resident => `${resident.name} (${resident.gender})`);
    }
}

class Building {
    constructor(maxApartments) {
        this.apartments = Array.from({length: maxApartments}, () => new Apartment());
    }

    getVacantApartments() {
        return this.apartments.filter(apartment => apartment.residents.length === 0);
    }
}

const apartmentsContainer = document.getElementById("apartments-container");
const reserveButton = document.getElementById("reserveButton");
const messageBox = document.getElementById("messageBox");
const modal = document.getElementById("maxApartmentsModal");
const modalClose = document.getElementById("modalClose");

const building = new Building(6);

const person1 = new Human("Tom Araya", "male");
const person2 = new Human("Joey Belladonna", "male");
const person3 = new Human("Sabina Klaasen", "female");
const person4 = new Human("Alissa White-Gluz", "female");

building.apartments[0].addResident(person1);
building.apartments[1].addResident(person2);
building.apartments[2].addResident(person3);
building.apartments[3].addResident(person4);

function updateApartmentsList() {
    apartmentsContainer.innerHTML = "";
    building.apartments.forEach((apartment, index) => {
        const apartmentElement = document.createElement("div");
        apartmentElement.classList.add("apartment");
        apartmentElement.innerHTML = `
            <h3>Apartment ${index + 1}</h3>
            <div class="resident">${apartment.getResidents().join(', ') || 'No Resident'}</div>
        `;
        apartmentsContainer.appendChild(apartmentElement);
    });
}

function updateModalText(text) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.textContent = text;
}

reserveButton.addEventListener("click", () => {
    const vacantApartments = building.getVacantApartments();

    if (vacantApartments.length > 0) {
        const name = prompt("Enter name (in English):");

        if (!isValidName(name)) {
            alert("Invalid name. Please enter a valid name using only English letters.");
            return;
        }

        const gender = prompt("Enter gender (in English):");

        if (!isValidGender(gender)) {
            alert("Invalid gender. Please enter 'male' or 'female' for gender.");
            return;
        }

        const newPerson = new Human(name, gender);
        const vacantApartment = vacantApartments.shift();
        vacantApartment.addResident(newPerson);

        const message = `${name} has been added as a resident.`;
        showMessage(message);
        updateModalText(message);

        updateApartmentsList();
    } else {
        const message = "The maximum number of apartments in the building has already been reached.";
        updateModalText(message);
        modal.style.display = "block";
        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});

function showMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageBox.appendChild(messageElement);
}

updateApartmentsList();

function isValidName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function isValidGender(gender) {
    return gender === "male" || gender === "female";
}




