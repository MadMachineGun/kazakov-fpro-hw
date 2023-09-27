`use strict`

document.addEventListener("DOMContentLoaded", function () {
    const inputArray = document.getElementById("inputArray");
    const resultDiv = document.getElementById("result");
    const showListButton = document.getElementById("showListButton");
    const generateRandomButton = document.getElementById("generateRandomButton");
    const enterArrayButton = document.getElementById("enterArrayButton");
    const clearFieldButton = document.getElementById("clearFieldButton");

    showListButton.addEventListener("click", generateList);
    generateRandomButton.addEventListener("click", generateRandomArray);
    enterArrayButton.addEventListener("click", toggleInputPlaceholder);
    clearFieldButton.addEventListener("click", clearField);

    function generateList() {
        const inputValue = inputArray.value.trim();

        try {
            const array = JSON.parse(inputValue);
            resultDiv.innerHTML = "";

            if (Array.isArray(array)) {
                const ul = document.createElement("ul");
                ul.classList.add("nested-list");
                generateListItems(ul, array);
                resultDiv.appendChild(ul);
            } else {
                throw new Error("Enter a valid array.");
            }
        } catch (error) {
            alert("An error has occurred: " + error.message);
        }
    }

    function generateListItems(parent, array) {
        array.forEach((item) => {
            const li = document.createElement("li");
            parent.appendChild(li);

            if (Array.isArray(item)) {
                const ul = document.createElement("ul");
                ul.classList.add("nested-list");
                li.appendChild(ul);
                generateListItems(ul, item);
            } else {
                li.textContent = item;
            }
        });
    }

    function generateRandomArray() {
        const randomArray = generateRandomNestedArray();
        inputArray.value = JSON.stringify(randomArray);
    }

    function generateRandomNestedArray() {
        const depth = Math.floor(Math.random() * 3) + 1;
        const array = [];

        for (let i = 0; i < depth; i++) {
            if (Math.random() < 0.5) {
                array.push(Math.floor(Math.random() * 10) + 1);
            } else {
                array.push(generateRandomNestedArray());
            }
        }

        return array;
    }

    function toggleInputPlaceholder() {
        inputArray.placeholder = "";
        inputArray.focus();
    }

    function clearField() {
        inputArray.value = "";
        inputArray.placeholder = "For example: [1, 2, 3, [4, 5], 7]";
        resultDiv.innerHTML = "";
    }
});
console.log()
