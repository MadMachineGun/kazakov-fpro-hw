'use strict';

// Створюємо студентів
const student1 = new Student("Микола", "Конотопенко", 2000);
const student2 = new Student("Марія", "Железняк", 1999);
const student3 = new Student("Олег", "Василенко", 2001);
const student4 = new Student("Жанна", "Бондаренко", 2001);

// Конструктор студентів
function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
    this.summary = "Summary: "; // Початкове значення "Summary"

    this.updateSummary = function() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRatio = this.attendance.filter((value) => value === true).length / 25;
        if (averageGrade > 90 && attendanceRatio > 0.9) {
            this.summary = "Summary: Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            this.summary = "Summary: Добре, але можна краще";
        } else {
            this.summary = "Summary: Редиска!";
        }
    };

    this.calculateAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.calculateAverageGrade = function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    };
}

// Функція для відображення інформації про студента
function showStudentDetails(student) {
    const studentDetails = document.getElementById("student-details");

    // Рахуємо кількість "присутствовал" і "відсутствовал"
    const presentCount = student.attendance.filter((value) => value === true).length;
    const absentCount = student.attendance.filter((value) => value === false).length;

    studentDetails.innerHTML = `
    <p>Ім'я: ${student.firstName}</p>
    <p>Прізвище: ${student.lastName}</p>
    <p>Рік народження: ${student.birthYear}</p>
    <p>Вік: ${student.calculateAge()}</p>
    <p>Середній бал: ${student.calculateAverageGrade()}</p>
    <p>Присутній: ${presentCount} занять</p>
    <p>Відсутній: ${absentCount} занять</p>
    <p>${student.summary}</p> <!-- Відображення Summary -->
  `;
}

// Оновлений код для створення класного журналу та відображення інформації
const journalContainer = document.getElementById("attendance-journal");
const saveJournalButton = document.getElementById("save-journal");
let currentStudent = null;

function createJournalTable(student) {
    let table = "<table>";
    for (let i = 0; i < 2; i++) {
        table += "<tr>";
        for (let j = 0; j < 25; j++) {
            if (i === 0) {
                const attendanceCell = student.attendance[j] ? "checked" : "";
                table += `<th><input type='checkbox' ${attendanceCell}></th>`;
            } else {
                if (student.attendance[j]) {
                    table += `<th><input type='number' min='0' max='100'></th>`;
                } else {
                    table += "<th><input type='number' min='0' max='100' disabled></th>";
                }
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}

function createJournal(student) {
    currentStudent = student;
    const journalHTML = `
    <h3>Журнал: ${student.firstName} ${student.lastName}</h3>
    ${createJournalTable(student)}
  `;
    journalContainer.innerHTML = journalHTML;

    // Оновлення стану поля оцінки при зміні стану флажка посещення
    const attendanceInputs = document.querySelectorAll("table input[type='checkbox']");
    const gradeInputs = document.querySelectorAll("table input[type='number']");

    attendanceInputs.forEach((input, index) => {
        input.addEventListener("change", () => {
            if (input.checked) {
                gradeInputs[index].removeAttribute("disabled");
            } else {
                gradeInputs[index].setAttribute("disabled", "true");
                gradeInputs[index].value = ""; // Скидання значення при забороні
            }
        });
    });
}

function saveJournal() {
    if (currentStudent) {
        const attendanceInputs = document.querySelectorAll("table input[type='checkbox']");
        const gradeInputs = document.querySelectorAll("table input[type='number']");

        const attendance = Array.from(attendanceInputs).map(input => input.checked);
        const grades = Array.from(gradeInputs).map((input, index) => {
            return attendance[index] ? (parseFloat(input.value) || 0) : 0;
        });

        currentStudent.attendance = attendance;
        currentStudent.grades = grades;
        currentStudent.updateSummary();

        showStudentDetails(currentStudent);
    }
}

saveJournalButton.addEventListener('click', saveJournal);

// Відображення списку студентів при завантаженні сторінки
const studentList = document.getElementById("student-list");

function createStudentElement(student) {
    const li = document.createElement("li");
    li.textContent = `${student.firstName} ${student.lastName}`;
    li.addEventListener("click", () => {
        showStudentDetails(student);
        createJournal(student);
    });
    studentList.appendChild(li);
}

const students = [student1, student2, student3, student4];
students.forEach(createStudentElement);

