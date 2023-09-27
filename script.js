"use strict";

const tableContainer = document.querySelector(".table-container");

const table = document.createElement("table");
tableContainer.appendChild(table);

let cellValue = 1;
for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement("td");

        cell.textContent = cellValue.toString();
        row.appendChild(cell);

        cellValue++;
    }

    table.appendChild(row);
}
