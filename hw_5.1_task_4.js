document.getElementById("runButton").addEventListener("click", function () {
    let length = +prompt("Enter the length of the array:", 0);

    if (!isNaN(length) && length > 0) {
        let userArray = [];

        for (let i = 0; i < length; i++) {
            let element = +prompt(`Enter element ${i + 1}:`);
            userArray.push(element);
        }

        const arrayContentElement = document.getElementById("arrayContent");
        arrayContentElement.innerHTML = "";

        const consoleOutput = document.createElement("p");
        consoleOutput.textContent = "User array: " + userArray;
        arrayContentElement.appendChild(consoleOutput);

        userArray.sort((a, b) => a - b);

        const sortedOutput = document.createElement("p");
        sortedOutput.textContent = "Sorted array: " + userArray;
        arrayContentElement.appendChild(sortedOutput);

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
});
