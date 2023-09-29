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
                generateNestedList(ul, array); // Вызываем функцию для генерации элементов списка
                resultDiv.appendChild(ul);
            } else {
                throw new Error("Введите корректный массив.");
            }
        } catch (error) {
            alert("Произошла ошибка: " + error.message);
        }
    }

    // Рекурсивная функция для генерации элементов списка и случайных вложенных массивов
    function generateNestedList(parent, data) {
        data.forEach((item) => {
            const li = document.createElement("li");
            parent.appendChild(li);

            if (Array.isArray(item)) {
                const ul = document.createElement("ul");
                ul.classList.add("nested-list");
                li.appendChild(ul);
                generateNestedList(ul, item); // Рекурсивный вызов для вложенных массивов
            } else {
                li.textContent = item;
            }
        });
    }

    function generateRandomArray() {
        const randomArray = generateRandomNestedArray();
        inputArray.value = JSON.stringify(randomArray);
    }

    // Рекурсивная функция для генерации случайных вложенных массивов
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
        inputArray.placeholder = "Например: [1, 2, 3, [4, 5], 7]";
        resultDiv.innerHTML = "";
    }
});


// // Дожидаемся загрузки DOM, чтобы убедиться, что все элементы доступны
// document.addEventListener("DOMContentLoaded", function () {
//     // Получаем ссылки на необходимые элементы страницы
//     const inputArray = document.getElementById("inputArray"); // Поле ввода массива
//     const resultDiv = document.getElementById("result"); // Див для вывода результата
//     const showListButton = document.getElementById("showListButton"); // Кнопка для генерации списка
//     const generateRandomButton = document.getElementById("generateRandomButton"); // Кнопка для генерации случайного массива
//     const enterArrayButton = document.getElementById("enterArrayButton"); // Кнопка для изменения placeholder
//     const clearFieldButton = document.getElementById("clearFieldButton"); // Кнопка для очистки поля ввода
//
//     // Назначаем обработчики событий на кнопки
//     showListButton.addEventListener("click", generateList); // При клике на кнопку вызывается функция generateList
//     generateRandomButton.addEventListener("click", generateRandomArray); // При клике на кнопку вызывается функция generateRandomArray
//     enterArrayButton.addEventListener("click", toggleInputPlaceholder); // При клике на кнопку вызывается функция toggleInputPlaceholder
//     clearFieldButton.addEventListener("click", clearField); // При клике на кнопку вызывается функция clearField
//
//     // Функция для генерации списка из введенного массива
//     function generateList() {
//         // Получаем значение из поля ввода и удаляем начальные и конечные пробелы
//         const inputValue = inputArray.value.trim();
//
//         try {
//             // Пытаемся распарсить введенное значение как JSON
//             const array = JSON.parse(inputValue);
//             resultDiv.innerHTML = ""; // Очищаем результат
//
//             if (Array.isArray(array)) {
//                 // Если это массив, создаем элемент <ul> для списка
//                 const ul = document.createElement("ul");
//                 ul.classList.add("nested-list");
//                 generateListItems(ul, array); // Генерируем элементы списка
//                 resultDiv.appendChild(ul); // Добавляем список в результат
//             } else {
//                 throw new Error("Введите корректный массив.");
//             }
//         } catch (error) {
//             alert("Произошла ошибка: " + error.message);
//         }
//     }
//
//     // Рекурсивная функция для генерации элементов списка
//     function generateListItems(parent, array) {
//         array.forEach((item) => {
//             const li = document.createElement("li");
//             parent.appendChild(li);
//
//             if (Array.isArray(item)) {
//                 // Если элемент массив, создаем новый <ul> и вызываем функцию для генерации его элементов
//                 const ul = document.createElement("ul");
//                 ul.classList.add("nested-list");
//                 li.appendChild(ul);
//                 generateListItems(ul, item);
//             } else {
//                 li.textContent = item; // Если элемент не массив, устанавливаем текст элемента
//             }
//         });
//     }
//
//     // Функция для генерации случайного массива и его вывода в поле ввода
//     function generateRandomArray() {
//         const randomArray = generateRandomNestedArray();
//         inputArray.value = JSON.stringify(randomArray);
//     }
//
//     // Рекурсивная функция для генерации случайного вложенного массива
//     function generateRandomNestedArray() {
//         const depth = Math.floor(Math.random() * 3) + 1; // Случайная глубина массива (от 1 до 3)
//         const array = [];
//
//         for (let i = 0; i < depth; i++) {
//             if (Math.random() < 0.5) {
//                 array.push(Math.floor(Math.random() * 10) + 1); // Случайное число от 1 до 10
//             } else {
//                 array.push(generateRandomNestedArray()); // Рекурсивно вызываем функцию для создания вложенного массива
//             }
//         }
//
//         return array;
//     }
//
//     // Функция для изменения placeholder и фокуса на поле ввода
//     function toggleInputPlaceholder() {
//         inputArray.placeholder = "";
//         inputArray.focus();
//     }
//
//     // Функция для очистки поля ввода и результатов
//     function clearField() {
//         inputArray.value = "";
//         inputArray.placeholder = "Например: [1, 2, 3, [4, 5], 7]";
//         resultDiv.innerHTML = "";
//     }
// });


//
// document.addEventListener("DOMContentLoaded", function () {
//     const inputArray = document.getElementById("inputArray");
//     const resultDiv = document.getElementById("result");
//     const showListButton = document.getElementById("showListButton");
//     const generateRandomButton = document.getElementById("generateRandomButton");
//     const enterArrayButton = document.getElementById("enterArrayButton");
//     const clearFieldButton = document.getElementById("clearFieldButton");
//
//     showListButton.addEventListener("click", generateList);
//     generateRandomButton.addEventListener("click", generateRandomArray);
//     enterArrayButton.addEventListener("click", toggleInputPlaceholder);
//     clearFieldButton.addEventListener("click", clearField);
//
//     function generateList() {
//         const inputValue = inputArray.value.trim();
//
//         try {
//             const array = JSON.parse(inputValue);
//             resultDiv.innerHTML = "";
//
//             if (Array.isArray(array)) {
//                 const ul = document.createElement("ul");
//                 ul.classList.add("nested-list");
//                 generateListItems(ul, array);
//                 resultDiv.appendChild(ul);
//             } else {
//                 throw new Error("Enter a valid array.");
//             }
//         } catch (error) {
//             alert("An error has occurred: " + error.message);
//         }
//     }
//
//     function generateListItems(parent, array) {
//         array.forEach((item) => {
//             const li = document.createElement("li");
//             parent.appendChild(li);
//
//             if (Array.isArray(item)) {
//                 const ul = document.createElement("ul");
//                 ul.classList.add("nested-list");
//                 li.appendChild(ul);
//                 generateListItems(ul, item);
//             } else {
//                 li.textContent = item;
//             }
//         });
//     }
//
//     function generateRandomArray() {
//         const randomArray = generateRandomNestedArray();
//         inputArray.value = JSON.stringify(randomArray);
//     }
//
//     function generateRandomNestedArray() {
//         const depth = Math.floor(Math.random() * 3) + 1;
//         const array = [];
//
//         for (let i = 0; i < depth; i++) {
//             if (Math.random() < 0.5) {
//                 array.push(Math.floor(Math.random() * 10) + 1);
//             } else {
//                 array.push(generateRandomNestedArray());
//             }
//         }
//
//         return array;
//     }
//
//     function toggleInputPlaceholder() {
//         inputArray.placeholder = "";
//         inputArray.focus();
//     }
//
//     function clearField() {
//         inputArray.value = "";
//         inputArray.placeholder = "For example: [1, 2, 3, [4, 5], 7]";
//         resultDiv.innerHTML = "";
//     }
// });
// console.log()
