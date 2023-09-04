// document.getElementById("runButton").addEventListener("click", function () {
//     let length = +prompt("Enter the length of the array:", 0);
//
//     if (!isNaN(length) && length > 0) {
//         let userArray = [];
//
//         for (let i = 0; i < length; i++) {
//             let element = +prompt(`Enter element ${i + 1}:`);
//             userArray.push(element);
//         }
//
//         const arrayContentElement = document.getElementById("arrayContent");
//         arrayContentElement.innerHTML = "";
//
//         const task1Output = document.createElement("p");
//         task1Output.textContent = "Task 1: Create an array, its length and elements specified by the user.";
//         arrayContentElement.appendChild(task1Output);
//
//         const consoleOutput = document.createElement("p");
//         consoleOutput.textContent = "User array: " + userArray;
//         arrayContentElement.appendChild(consoleOutput);
//
//         const task2Output = document.createElement("p");
//         task2Output.textContent = "Task 2: Sort the array in ascending order.";
//         arrayContentElement.appendChild(task2Output);
//
//         userArray.sort((a, b) => a - b);
//
//         const sortedOutput = document.createElement("p");
//         sortedOutput.textContent = "Sorted array: " + userArray;
//         arrayContentElement.appendChild(sortedOutput);
//
//         const task3Output = document.createElement("p");
//         task3Output.textContent = "Task 3: Remove elements from the array from 2 to 4 (inclusive).";
//         arrayContentElement.appendChild(task3Output);
//
//         if (userArray.length >= 5) {
//             userArray.splice(1, 4);
//
//             const updatedOutput = document.createElement("p");
//             updatedOutput.textContent = "Updated array: " + userArray;
//             arrayContentElement.appendChild(updatedOutput);
//         } else {
//             const errorOutput = document.createElement("p");
//             errorOutput.textContent = "Array length is less than 5. Can't remove elements.";
//             arrayContentElement.appendChild(errorOutput);
//         }
//     } else {
//         alert("Invalid input! Please enter a valid positive number.");
//     }
// });

document.getElement = document.getElementById(("arrayContent");
arrayContentElement.innerHTML = "";

let output = text => {
    const pOutput = document.createElement('p');
    pOutput.textContent = text;
    arrayContentElement.appendChild(pOutput);
}

if (!isNaN(length) && length > 0) {
    let userArray = [];

    for (let i = 0; i < length; i++) {
        let element = +prompt(`Enter element ${i + 1}:`);
        userArray.push(element);
    }

document.getElementById("runButton").addEventListener("click", function () {
    let length = +prompt()
}

    const task1Output = document.createElement("p");
    task1Output.textContent = "Task 1: Create an array, its length and elements specified by the user.";
    arrayContentElement.appendChild(task1Output);

    const consoleOutput = document.createElement("p");
    consoleOutput.textContent = "User array: " + userArray;
    arrayContentElement.appendChild(consoleOutput);

    const task2Output = document.createElement("p");
    task2Output.textContent = "Task 2: Sort the array in ascending order.";
    arrayContentElement.appendChild(task2Output);

    userArray.sort((a, b) => a - b);

    const sortedOutput = document.createElement("p");
    sortedOutput.textContent = "Sorted array: " + userArray;
    arrayContentElement.appendChild(sortedOutput);

    const task3Output = document.createElement("p");
    task3Output.textContent = "Task 3: Remove elements from the array from 2 to 4 (inclusive).";
    arrayContentElement.appendChild(task3Output);

    if (userArray.length >= 5) {
        userArray.splice(1, 4);

        const updatedOutput = document.createElement("p");
        updatedOutput.textContent = "Updated array: " + userArray;
        arrayContentElement.appendChild(updatedOutput);
    } else {
        const errorOutput = document.createElement("p");
        errorOutput.textContent = "Array length is less than 5. Can't remove elements.";
        arrayContentElement.appendChild(errorOutput);
    }
} else {
    alert("Invalid input! Please enter a valid positive number.");
}
})
;
