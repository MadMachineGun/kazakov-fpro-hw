`use strict`

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    displayInfo() {
        return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;

        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            this.owner = null;
            this.errorMessage = `Owner ${owner.firstName} ${owner.lastName}, Age: 17, ${owner.firstName} ${owner.lastName} can't drive the car due to being underage!`;
        }
    }

    displayInfo() {
        const ownerInfo = this.owner ? `Owner Information:<br>${this.owner.displayInfo()}` : '';
        const errorMessage = this.errorMessage ? `<p class="error-message">${this.errorMessage}</p>` : '';
        return `Brand: ${this.brand}, Model: ${this.model}<br>Year of Registration: ${this.year}, License Plate: ${this.licensePlate}<br>${ownerInfo}${errorMessage}`;
    }
}

const person1 = new Person("John", "Doe", 25);
const person2 = new Person("Maria", "Smith", 17);
const person3 = new Person("Peter", "Johnson", 30);


const car1 = new Car("Toyota", "Camry", 2020, "AB1234CD", person1);
const car2 = new Car("Honda", "Civic", 2019, "CD5678EF", person2);  // Underage owner
const car3 = new Car("Ford", "Focus", 2022, "EF4321GH", person3);

const carInfoContainer = document.getElementById("car-info");

function addCarInfoToPage(car) {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car");
    carDiv.innerHTML = `<h3>${car.brand} ${car.model}</h3><p>${car.displayInfo()}</p>`;
    carInfoContainer.appendChild(carDiv);
}

addCarInfoToPage(car1);
addCarInfoToPage(car2);
addCarInfoToPage(car3);
