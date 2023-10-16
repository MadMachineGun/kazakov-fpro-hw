
"use strict";

// Когда весь документ будет загружен, выполнится функция, содержащая весь скрипт.
document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылки на HTML-элементы, которые будут использоваться в скрипте.
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list');
    const productsList = document.querySelector('.products-list');
    const productDetails = document.querySelector('.product-details');
    const startScreen = document.querySelector('.start-screen');
    const myOrdersButton = document.getElementById('my-orders-button');
    const myOrdersSection = document.getElementById('my-orders');
    const orderList = document.getElementById('order-list');
    const returnButton = document.getElementById('return-button');
    const totalAmountDisplay = document.getElementById('total-amount');

    // Функция для получения заказов из локального хранилища, либо возвращает пустой массив.
    function getOrders() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    // Функция для сохранения заказов в локальное хранилище.
    function saveOrders(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    // Функция для отображения заказов в списке заказов.
    function displayOrders() {
        orderList.innerHTML = '';

        // Получаем список заказов из локального хранилища.
        const orders = getOrders();

        // Если список заказов пуст, выводим сообщение об этом.
        if (orders.length === 0) {
            orderList.innerHTML = '<p>You have no orders yet.</p>';
        } else {
            let totalAmount = 0;
            orders.forEach((order, index) => {
                // Создаем элемент списка для каждого заказа.
                const orderItem = document.createElement('li');
                orderItem.innerHTML = `
                    <p>Order #${index + 1}</p>
                    <p>Product: ${order.name}</p>
                    <p>Date: ${order.date}</p>
                    <p>${order.price}</p>
                    <label for="quantity-${index}">Quantity:</label>
                    <input type="number" id="quantity-${index}" class="quantity-input" value="${order.quantity || 1}" min="1">
                    <p>Total: <span class="total-price">${(parseFloat(order.price) * (order?.quantity || 1)).toFixed(2)}</span></p>
                    <img src="${order.image}" alt="${order.name}" class="product-image"> 
                    <button class="delete-order-button" data-index="${index}">Remove</button>
                `;
                // Добавляем элемент заказа в список заказов.
                orderList.appendChild(orderItem);

                // Получаем ссылки на элементы для изменения количества и общей суммы заказа.
                const quantityInput = orderItem.querySelector(`#quantity-${index}`);
                const totalPriceDisplay = orderItem.querySelector('.total-price');

                // Обработчик события для изменения количества товара в заказе.
                quantityInput.addEventListener('input', () => {
                    const newQuantity = parseInt(quantityInput.value);
                    if (newQuantity >= 1) {
                        order.quantity = newQuantity;
                        totalPriceDisplay.textContent = (parseFloat(order.price) * newQuantity).toFixed(2);
                        saveOrders(orders);
                        updateTotalAmount();
                    } else {
                        alert('Quantity should be at least 1.');
                        quantityInput.value = order.quantity || 1;
                    }
                });

                // Вычисляем общую сумму всех заказов.
                totalAmount += parseFloat(order.price) * (order.quantity || 1);
            });

            // Выводим общую сумму заказов.
            totalAmountDisplay.textContent = totalAmount.toFixed(2);
        }
    }

    // Функция для обновления общей суммы заказов.
    function updateTotalAmount() {
        const orders = getOrders();
        let totalAmount = 0;
        orders.forEach(order => {
            if (!isNaN(order.quantity)) {
                totalAmount += parseFloat(order.price) * order.quantity;
            }
        });
        // Выводим обновленную общую сумму.
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    // Обработчик события для открытия раздела "My Orders" и отображения списка заказов.
    myOrdersButton.addEventListener('click', () => {
        categoriesList.classList.add('hidden');
        productsList.classList.add('hidden');
        productDetails.classList.add('hidden');
        startScreen.classList.add('hidden');
        returnButton.classList.remove('hidden');
        myOrdersSection.classList.remove('hidden');
        displayOrders();
    });

    // Обработчик события для возврата к списку продуктов.
    returnButton.addEventListener('click', () => {
        categoriesList.classList.remove('hidden');
        productsList.classList.remove('hidden');
        productDetails.classList.remove('hidden');
        startScreen.classList.remove('hidden');
        returnButton.classList.add('hidden');
        myOrdersSection.classList.add('hidden');
    });

    // Обработчик события для удаления заказа при нажатии кнопки "Remove".
    orderList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-order-button')) {
            const index = parseInt(event.target.getAttribute('data-index'), 10);
            const orders = getOrders();
            orders.splice(index, 1);
            saveOrders(orders);
            displayOrders();
        }
    });

    // Данные о продуктах.
    const productsData = [
        {
            category: 'B.C. Rich',
            items: [
                {
                    name: 'B.C. Rich Bass',
                    description: 'Electric Bass guitar - B.C. Rich "Bass"',
                    price: '$899.99',
                    image: 'img/B.C._Rich_Bass.png',
                },
                {
                    name: 'B.C. Rich KKV',
                    description: 'Electric guitar - B.C. Rich "KKV"',
                    price: '$799.99',
                    image: 'img/B.C._Rich_KKV.png',
                },
                {
                    name: 'B.C. Rich Warlock',
                    description: 'Electric guitar - B.C. Rich "Warlock"',
                    price: '$999.99',
                    image: 'img/B.C._Rich_Warlock.png',
                },
            ],
        },
        {
            category: 'Gibson',
            items: [
                {
                    name: 'Gibson Explorer',
                    description: 'Electric guitar - "Gibson Explorer"',
                    price: '$1249.99',
                    image: 'img/Gibson_Explorer.png',
                },
                {
                    name: 'Gibson Flying V',
                    description: 'Electric guitar - "Gibson Flying V"',
                    price: '$1149.99',
                    image: 'img/Gibson_Flying_V.png',
                },
                {
                    name: 'Gibson SG Special',
                    description: 'Electric guitar - Gibson "SG Special"',
                    price: '$1099.99',
                    image: 'img/Gibson_SG_Special.png',
                },
            ],
        },
        {
            category: 'Jackson',
            items: [
                {
                    name: 'Jackson DK2M',
                    description: 'Electric guitar - Jackson "DK2M"',
                    price: '$799.99',
                    image: 'img/Jackson_DK2M.png',
                },
                {
                    name: 'Jackson Kelly',
                    description: 'Electric guitar - Jackson "Kelly"',
                    price: '$849.99',
                    image: 'img/Jackson_Kelly.png',
                },
                {
                    name: 'Jackson Rhoads',
                    description: 'Electric guitar - Jackson "Rhoads"',
                    price: '$899.99',
                    image: 'img/Jackson_Rhoads.png',
                },
            ],
        },
    ];

    // Функция для отображения категорий продуктов.
    function displayCategories() {
        categoriesList.innerHTML = '';
        categoriesList.classList.remove('hidden');
        productsList.innerHTML = '';
        productDetails.innerHTML = '';
        startScreen.classList.add('hidden');

        // Для каждой категории создаем кнопку и добавляем ее в список категорий.
        productsData.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.classList.add('category-button');
            categoryButton.textContent = category.category;
            categoryButton.setAttribute('data-category', category.category);
            categoriesList.appendChild(categoryButton);
        });
    }

    // Функция для отображения продуктов выбранной категории.
    function displayProducts(category) {
        productsList.innerHTML = '';
        const selectedCategory = productsData.find(cat => cat.category === category);

        // Если выбранная категория найдена, отображаем ее продукты.
        if (selectedCategory) {
            selectedCategory.items.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src="${product.image}" alt="${product.name}" class="product-image"> <!-- Добавляем это изображение -->
                    <button class="add-to-orders-button">Add to Orders</button>
                `;
                productsList.appendChild(productItem);
            });
        }
    }

    // Обработчик события для отображения категорий при нажатии на кнопку "Categories".
    categoriesButton.addEventListener('click', () => {
        displayCategories();
    });

    // Обработчик события для отображения продуктов выбранной категории.
    categoriesList.addEventListener('click', event => {
        if (event.target.classList.contains('category-button')) {
            const selectedCategory = event.target.getAttribute('data-category');
            displayProducts(selectedCategory);
        }
    });

    // Обработчик события для добавления продукта в заказ при нажатии кнопки "Add to Orders".
    productsList.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-orders-button')) {
            const productItem = event.target.parentElement;
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p:nth-child(3)').textContent;
            const productImage = productItem.querySelector('.product-image').getAttribute('src');
            const date = new Date().toLocaleDateString();
            const order = {date, price: productPrice.replace(`Price: $`, ``), name: productName, image: productImage};
            const orders = getOrders();
            orders.push(order);
            saveOrders(orders);
        }
    });

    // Функция для отображения данных пользователя в таблице.
    function displayUserData(userData) {
        const table = document.querySelector('table');

        for (const key in userData) {
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell();
            cell1.textContent = key;
            const cell2 = newRow.insertCell();
            cell2.textContent = userData[key];
        }
    }

    // Обработчик события для сохранения данных пользователя и отображения их в таблице.
    document.getElementById('save-button').addEventListener('click', function () {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const city = document.getElementById('city').value;

        const languages = [];
        const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
        languageCheckboxes.forEach(checkbox => {
            languages.push(checkbox.value);
        });

        // Регулярные выражения для проверки формата даты и email.
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!dateRegex.test(birthdate)) {
            alert('Please enter a valid date of birth in the format DD.MM.YYYY');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Создаем объект с данными пользователя.
        const userData = {
            'First Name': firstName,
            'Last Name': lastName,
            'Email': email,
            'Date of Birth': birthdate,
            'Gender': gender,
            'City': city,
            'Languages': languages.join(', '),
        };

        // Отображаем данные пользователя в таблице и скрываем форму регистрации.
        displayUserData(userData);
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('user-table').style.display = 'block';
    });

    // Обработчик события для возврата к форме регистрации.
    document.getElementById('subscribe-button').addEventListener('click', function () {
        document.getElementById('user-table').style.display = 'none';
        document.getElementById('registration-form').style.display = 'block';
        document.getElementById('registration-form').reset();
    });
});













// "use strict";
//
// // Данные о продуктах.
// const productsData = [
//     {
//         category: "B.C. Rich",
//         items: [
//             {
//                 name: "B.C. Rich Bass",
//                 description: 'Electric Bass guitar - B.C. Rich "Bass"',
//                 price: "$899.99",
//                 image: "img/B.C._Rich_Bass.png",
//             },
//             {
//                 name: "B.C. Rich KKV",
//                 description: 'Electric guitar - B.C. Rich "KKV"',
//                 price: "$799.99",
//                 image: "img/B.C._Rich_KKV.png",
//             },
//             {
//                 name: "B.C. Rich Warlock",
//                 description: 'Electric guitar - B.C. Rich "Warlock"',
//                 price: "$999.99",
//                 image: "img/B.C._Rich_Warlock.png",
//             },
//         ],
//     },
//     {
//         category: "Gibson",
//         items: [
//             {
//                 name: "Gibson Explorer",
//                 description: 'Electric guitar - "Gibson Explorer"',
//                 price: "$1249.99",
//                 image: "img/Gibson_Explorer.png",
//             },
//             {
//                 name: "Gibson Flying V",
//                 description: 'Electric guitar - "Gibson Flying V"',
//                 price: "$1149.99",
//                 image: "img/Gibson_Flying_V.png",
//             },
//             {
//                 name: "Gibson SG Special",
//                 description: 'Electric guitar - Gibson "SG Special"',
//                 price: "$1099.99",
//                 image: "img/Gibson_SG_Special.png",
//             },
//         ],
//     },
//     {
//         category: "Jackson",
//         items: [
//             {
//                 name: "Jackson DK2M",
//                 description: 'Electric guitar - Jackson "DK2M"',
//                 price: "$799.99",
//                 image: "img/Jackson_DK2M.png",
//             },
//             {
//                 name: "Jackson Kelly",
//                 description: 'Electric guitar - Jackson "Kelly"',
//                 price: "$849.99",
//                 image: "img/Jackson_Kelly.png",
//             },
//             {
//                 name: "Jackson Rhoads",
//                 description: 'Electric guitar - Jackson "Rhoads"',
//                 price: "$899.99",
//                 image: "img/Jackson_Rhoads.png",
//             },
//         ],
//     },
// ];
// document.addEventListener("DOMContentLoaded", function () {
//     // Получаем ссылки на HTML-элементы, которые будут использоваться в скрипте.
//     const categoriesButton = document.querySelector(".categories-button");
//     const categoriesList = document.querySelector(".categories-list");
//     const productsList = document.querySelector(".products-list");
//     const productDetails = document.querySelector(".product-details");
//     const startScreen = document.querySelector(".start-screen");
//     const myOrdersButton = document.getElementById("my-orders-button");
//     const myOrdersSection = document.getElementById("my-orders");
//     const orderList = document.getElementById("order-list");
//     const returnButton = document.getElementById("return-button");
//     const totalAmountDisplay = document.getElementById("total-amount");
//
//     // Функция для получения заказов из локального хранилища, либо возвращает пустой массив.
//     function getOrders() {
//         return JSON.parse(localStorage.getItem("orders")) || [];
//     }
//
//     // Функция для сохранения заказов в локальное хранилище.
//     function saveOrders(orders) {
//         localStorage.setItem("orders", JSON.stringify(orders));
//     }
//
//     // Функция для отображения заказов в списке заказов.
//     function displayOrders() {
//         orderList.innerHTML = "";
//
//         // Получаем список заказов из локального хранилища.
//         const orders = getOrders();
//
//         // Если список заказов пуст, выводим сообщение об этом.
//         if (orders.length === 0) {
//             orderList.innerHTML = "<p>You have no orders yet.</p>";
//         } else {
//             let totalAmount = 0;
//             orders.forEach((order, index) => {
//                 // Создаем элемент списка для каждого заказа.
//                 const orderItem = document.createElement("li");
//                 orderItem.innerHTML = `
//                     <p>Order #${index + 1}</p>
//                     <p>Product: ${order.name}</p>
//                     <p>Date: ${order.date}</p>
//                     <p>${order.price}</p>
//                     <label for="quantity-${index}">Quantity:</label>
//                     <input type="number" id="quantity-${index}" class="quantity-input" value="${order.quantity || 1}" min="1">
//                     <p>Total: <span class="total-price">${(parseFloat(order.price) * (order?.quantity || 1)).toFixed(2)}</span></p>
//                     <img src="${order.image}" alt="${order.name}" class="product-image">
//                     <button class="delete-order-button" data-index="${index}">Remove</button>
//                 `;
//                 // Добавляем элемент заказа в список заказов.
//                 orderList.appendChild(orderItem);
//
//                 // Получаем ссылки на элементы для изменения количества и общей суммы заказа.
//                 const quantityInput = orderItem.querySelector(`#quantity-${index}`);
//                 const totalPriceDisplay = orderItem.querySelector(".total-price");
//
//                 // Обработчик события для изменения количества товара в заказе.
//                 quantityInput.addEventListener("input", () => {
//                     const newQuantity = parseInt(quantityInput.value);
//                     if (newQuantity >= 1) {
//                         order.quantity = newQuantity;
//                         totalPriceDisplay.textContent = (parseFloat(order.price) * newQuantity).toFixed(2);
//                         saveOrders(orders);
//                         updateTotalAmount();
//                     } else {
//                         quantityInput.value = order.quantity || 1;
//                     }
//                 });
//
//
//                 // Обработчик события для удаления заказа.
//                 const deleteOrderButton = orderItem.querySelector(".delete-order-button");
//                 deleteOrderButton.addEventListener("click", () => {
//                     orders.splice(deleteOrderButton.getAttribute("data-index"), 1);
//                     saveOrders(orders);
//                     displayOrders();
//                     updateTotalAmount();
//                 });
//
//                 // Вычисляем и обновляем общую сумму заказов.
//                 totalAmount += parseFloat(order.price) * (order.quantity || 1);
//             });
//
//             // Обновляем общую сумму в соответствующем элементе.
//             totalAmountDisplay.textContent = totalAmount.toFixed(2);
//         }
//     }
//
//     // Функция для обновления общей суммы заказов.
//     function updateTotalAmount() {
//         let totalAmount = 0;
//         const orders = getOrders();
//         orders.forEach(order => {
//             totalAmount += parseFloat(order.price) * (order.quantity || 1);
//         });
//         totalAmountDisplay.textContent = totalAmount.toFixed(2);
//     }
//
//     // Функция для отображения категорий и товаров.
//     function showCategories() {
//         categoriesList.innerHTML = "";
//
//         // Для каждой категории из productsData добавляем кнопку категории.
//         productsData.forEach(category => {
//             const categoryButton = document.createElement("button");
//             categoryButton.textContent = category.category;
//             categoryButton.addEventListener("click", () => {
//                 showProducts(category);
//             });
//             categoriesList.appendChild(categoryButton);
//         });
//
//         categoriesList.classList.remove("hidden");
//         startScreen.classList.add("hidden");
//         myOrdersButton.classList.remove("hidden");
//     }
//
//     // Функция для отображения товаров определенной категории.
//     function showProducts(category) {
//         productsList.innerHTML = "";
//
//         // Для каждого товара из выбранной категории добавляем информацию о товаре.
//         category.items.forEach(item => {
//             const product = document.createElement("div");
//             product.classList.add("product");
//             product.innerHTML = `
//                 <h2>${item.name}</h2>
//                 <p>${item.description}</p>
//                 <p>Price: ${item.price}</p>
//                 <img src="${item.image}" alt="${item.name}">
//                 <button class="buy-button">Add to cart</button>
//             `;
//             product.querySelector(".buy-button").addEventListener("click", () => {
//                 // Создаем копию товара и сохраняем ее в заказ.
//                 const order = { ...item, date: new Date().toLocaleString() };
//                 const orders = getOrders();
//                 orders.push(order);
//                 saveOrders(orders);
//                 updateTotalAmount();
//                 displayOrders();
//             });
//             productsList.appendChild(product);
//         });
//
//         productsList.classList.remove("hidden");
//         categoriesList.classList.add("hidden");
//     }
//
//     // Обработчик события для кнопки "Categories".
//     categoriesButton.addEventListener("click", showCategories);
//
//     // Обработчик события для кнопки "My Orders".
//     myOrdersButton.addEventListener("click", () => {
//         displayOrders();
//         myOrdersSection.classList.remove("hidden");
//         categoriesList.classList.add("hidden");
//         productsList.classList.add("hidden");
//         startScreen.classList.add("hidden");
//         myOrdersButton.classList.add("hidden");
//     });
//
//     // Обработчик события для кнопки "Return" в разделе "My Orders".
//     returnButton.addEventListener("click", () => {
//         myOrdersSection.classList.add("hidden");
//         showCategories();
//     });
//
//     // При загрузке страницы отображаем список категорий.
//     showCategories();
// });





//
// const productsData = [
//     {
//         category: 'B.C. Rich',
//         items: [
//             {
//                 name: 'B.C. Rich Bass',
//                 description: 'Electric Bass guitar - B.C. Rich "Bass"',
//                 price: '$899.99',
//                 image: 'img/B.C._Rich_Bass.png',
//             },
//             {
//                 name: 'B.C. Rich KKV',
//                 description: 'Electric guitar - B.C. Rich "KKV"',
//                 price: '$799.99',
//                 image: 'img/B.C._Rich_KKV.png',
//             },
//             {
//                 name: 'B.C. Rich Warlock',
//                 description: 'Electric guitar - B.C. Rich "Warlock"',
//                 price: '$999.99',
//                 image: 'img/B.C._Rich_Warlock.png',
//             },
//         ],
//     },
//     {
//         category: 'Gibson',
//         items: [
//             {
//                 name: 'Gibson Explorer',
//                 description: 'Electric guitar - "Gibson Explorer"',
//                 price: '$1249.99',
//                 image: 'img/Gibson_Explorer.png',
//             },
//             {
//                 name: 'Gibson Flying V',
//                 description: 'Electric guitar - "Gibson Flying V"',
//                 price: '$1149.99',
//                 image: 'img/Gibson_Flying_V.png',
//             },
//             {
//                 name: 'Gibson SG Special',
//                 description: 'Electric guitar - Gibson "SG Special"',
//                 price: '$1099.99',
//                 image: 'img/Gibson_SG_Special.png',
//             },
//         ],
//     },
//     {
//         category: 'Jackson',
//         items: [
//             {
//                 name: 'Jackson DK2M',
//                 description: 'Electric guitar - Jackson "DK2M"',
//                 price: '$799.99',
//                 image: 'img/Jackson_DK2M.png',
//             },
//             {
//                 name: 'Jackson Kelly',
//                 description: 'Electric guitar - Jackson "Kelly"',
//                 price: '$849.99',
//                 image: 'img/Jackson_Kelly.png',
//             },
//             {
//                 name: 'Jackson Rhoads',
//                 description: 'Electric guitar - Jackson "Rhoads"',
//                 price: '$899.99',
//                 image: 'img/Jackson_Rhoads.png',
//             },
//         ],
//     },
// ];
//
// // Когда весь документ будет загружен, выполнится функция, содержащая весь скрипт.
// document.addEventListener('DOMContentLoaded', function () {
//     // Получаем ссылки на HTML-элементы, которые будут использоваться в скрипте.
//     const categoriesButton = document.querySelector('.categories-button');
//     const categoriesList = document.querySelector('.categories-list');
//     const productsList = document.querySelector('.products-list');
//     const productDetails = document.querySelector('.product-details');
//     const startScreen = document.querySelector('.start-screen');
//     const myOrdersButton = document.getElementById('my-orders-button');
//     const myOrdersSection = document.getElementById('my-orders');
//     const orderList = document.getElementById('order-list');
//     const returnButton = document.getElementById('return-button');
//     const totalAmountDisplay = document.getElementById('total-amount');
//
//     // Функция для получения заказов из локального хранилища, либо возвращает пустой массив.
//     function getOrders() {
//         return JSON.parse(localStorage.getItem('orders')) || [];
//     }
//
//     // Функция для сохранения заказов в локальное хранилище.
//     function saveOrders(orders) {
//         localStorage.setItem('orders', JSON.stringify(orders));
//     }
//
//     // Функция для отображения заказов в списке заказов.
//     function displayOrders() {
//         orderList.innerHTML = '';
//
//         // Получаем список заказов из локального хранилища.
//         const orders = getOrders();
//
//         // Если список заказов пуст, выводим сообщение об этом.
//         if (orders.length === 0) {
//             orderList.innerHTML = '<p>You have no orders yet.</p>';
//         } else {
//             let totalAmount = 0;
//             orders.forEach((order, index) => {
//                 // Создаем элемент списка для каждого заказа.
//                 const orderItem = document.createElement('li');
//                 orderItem.innerHTML = `
//                     <p>Order #${index + 1}</p>
//                     <p>Product: ${order.name}</p>
//                     <p>Date: ${order.date}</p>
//                     <p>${order.price}</p>
//                     <label for="quantity-${index}">Quantity:</label>
//                     <input type="number" id="quantity-${index}" class="quantity-input" value="${order.quantity || 1}" min="1">
//                     <p>Total: <span class="total-price">${(parseFloat(order.price) * (order?.quantity || 1)).toFixed(2)}</span></p>
//                     <img src="${order.image}" alt="${order.name}" class="product-image">
//                     <button class="delete-order-button" data-index="${index}">Remove</button>
//                 `;
//                 // Добавляем элемент заказа в список заказов.
//                 orderList.appendChild(orderItem);
//
//                 // Получаем ссылки на элементы для изменения количества и общей суммы заказа.
//                 const quantityInput = orderItem.querySelector(`#quantity-${index}`);
//                 const totalPriceDisplay = orderItem.querySelector('.total-price');
//
//                 // Обработчик события для изменения количества товара в заказе.
//                 quantityInput.addEventListener('input', () => {
//                     const newQuantity = parseInt(quantityInput.value);
//                     if (newQuantity >= 1) {
//                         order.quantity = newQuantity;
//                         totalPriceDisplay.textContent = (parseFloat(order.price) * newQuantity).toFixed(2);
//                         saveOrders(orders);
//                         updateTotalAmount();
//                     } else {
//                         alert('Quantity should be at least 1.');
//                         quantityInput.value = order.quantity || 1;
//                     }
//                 });
//
//                 // Вычисляем общую сумму всех заказов.
//                 totalAmount += parseFloat(order.price) * (order.quantity || 1);
//             });
//
//             // Выводим общую сумму заказов.
//             totalAmountDisplay.textContent = totalAmount.toFixed(2);
//         }
//     }
//
//     // Функция для обновления общей суммы заказов.
//     function updateTotalAmount() {
//         const orders = getOrders();
//         let totalAmount = 0;
//         orders.forEach(order => {
//             if (!isNaN(order.quantity)) {
//                 totalAmount += parseFloat(order.price) * order.quantity;
//             }
//         });
//         // Выводим обновленную общую сумму.
//         totalAmountDisplay.textContent = totalAmount.toFixed(2);
//     }
//
//     // Обработчик события для открытия раздела "My Orders" и отображения списка заказов.
//     myOrdersButton.addEventListener('click', () => {
//         productsList.innerHTML = ``;
//         categoriesList.classList.add('hidden');
//         productsList.classList.add('hidden');
//         productDetails.classList.add('hidden');
//         startScreen.classList.add('hidden');
//         returnButton.classList.remove('hidden');
//         myOrdersSection.classList.remove('hidden');
//         displayOrders();
//     });
//
//     // Обработчик события для возврата к списку продуктов.
//     returnButton.addEventListener('click', () => {
//         categoriesList.classList.remove('hidden');
//         productsList.classList.remove('hidden');
//         productDetails.classList.remove('hidden');
//         startScreen.classList.remove('hidden');
//         returnButton.classList.add('hidden');
//         myOrdersSection.classList.add('hidden');
//     });
//
//     // Обработчик события для удаления заказа при нажатии кнопки "Remove".
//     orderList.addEventListener('click', (event) => {
//         if (event.target.classList.contains('delete-order-button')) {
//             const index = parseInt(event.target.getAttribute('data-index'), 10);
//             const orders = getOrders();
//             orders.splice(index, 1);
//             saveOrders(orders);
//             displayOrders();
//         }
//     });
//
//
//     // Функция для отображения категорий продуктов.
//     function displayCategories() {
//         categoriesList.innerHTML = '';
//         categoriesList.classList.remove('hidden');
//         productsList.innerHTML = '';
//         productDetails.innerHTML = '';
//         startScreen.classList.add('hidden');
//
//         // Для каждой категории создаем кнопку и добавляем ее в список категорий.
//         productsData.forEach(category => {
//             const categoryButton = document.createElement('button');
//             categoryButton.classList.add('category-button');
//             categoryButton.textContent = category.category;
//             categoryButton.setAttribute('data-category', category.category);
//             categoriesList.appendChild(categoryButton);
//         });
//     }
//
//     // Функция для отображения продуктов выбранной категории.
//     function displayProducts(category) {
//         productsList.innerHTML = '';
//         const selectedCategory = productsData.find(cat => cat.category === category);
//
//         // Если выбранная категория найдена, отображаем ее продукты.
//         if (selectedCategory) {
//             selectedCategory.items.forEach(product => {
//                 const productItem = document.createElement('div');
//                 productItem.classList.add('product-item');
//                 productItem.innerHTML = `
//                     <h3>${product.name}</h3>
//                     <p>${product.description}</p>
//                     <p>Price: ${product.price}</p>
//                     <img src="${product.image}" alt="${product.name}" class="product-image"> <!-- Добавляем это изображение -->
//                     <button class="add-to-orders-button">Add to Orders</button>
//                 `;
//                 productsList.appendChild(productItem);
//             });
//         }
//     }
//
//     // Обработчик события для отображения категорий при нажатии на кнопку "Categories".
//     categoriesButton.addEventListener('click', () => {
//         displayCategories();
//     });
//
//     // Обработчик события для отображения продуктов выбранной категории.
//     categoriesList.addEventListener('click', event => {
//         if (event.target.classList.contains('category-button')) {
//             const selectedCategory = event.target.getAttribute('data-category');
//             displayProducts(selectedCategory);
//         }
//     });
//
//     // Обработчик события для добавления продукта в заказ при нажатии кнопки "Add to Orders".
//     productsList.addEventListener('click', event => {
//         if (event.target.classList.contains('add-to-orders-button')) {
//             const productItem = event.target.parentElement;
//             const productName = productItem.querySelector('h3').textContent;
//             const productPrice = productItem.querySelector('p:nth-child(3)').textContent;
//             const productImage = productItem.querySelector('.product-image').getAttribute('src');
//             const date = new Date().toLocaleDateString();
//             const order = {date, price: productPrice.replace(`Price: $`, ``), name: productName, image: productImage};
//             const orders = getOrders();
//             orders.push(order);
//             saveOrders(orders);
//         }
//     });
//
//     // Функция для отображения данных пользователя в таблице.
//     function displayUserData(userData) {
//         const table = document.querySelector('table');
//
//         for (const key in userData) {
//             const newRow = table.insertRow();
//             const cell1 = newRow.insertCell();
//             cell1.textContent = key;
//             const cell2 = newRow.insertCell();
//             cell2.textContent = userData[key];
//         }
//     }
//
//     // Обработчик события для сохранения данных пользователя и отображения их в таблице.
//     document.getElementById('save-button').addEventListener('click', function () {
//         const firstName = document.getElementById('first-name').value;
//         const lastName = document.getElementById('last-name').value;
//         const email = document.getElementById('email').value;
//         const birthdate = document.getElementById('birthdate').value;
//         const gender = document.querySelector('input[name="gender"]:checked').value;
//         const city = document.getElementById('city').value;
//
//         const languages = [];
//         const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
//         languageCheckboxes.forEach(checkbox => {
//             languages.push(checkbox.value);
//         });
//
//         // Регулярные выражения для проверки формата даты и email.
//         const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
//         if (!dateRegex.test(birthdate)) {
//             alert('Please enter a valid date of birth in the format DD.MM.YYYY');
//             return;
//         }
//
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(email)) {
//             alert('Please enter a valid email address');
//             return;
//         }
//
//         // Создаем объект с данными пользователя.
//         const userData = {
//             'First Name': firstName,
//             'Last Name': lastName,
//             'Email': email,
//             'Date of Birth': birthdate,
//             'Gender': gender,
//             'City': city,
//             'Languages': languages.join(', '),
//         };
//
//         // Отображаем данные пользователя в таблице и скрываем форму регистрации.
//         displayUserData(userData);
//         document.getElementById('registration-form').style.display = 'none';
//         document.getElementById('user-table').style.display = 'block';
//     });
//
//     // Обработчик события для возврата к форме регистрации.
//     document.getElementById('subscribe-button').addEventListener('click', function () {
//         document.getElementById('user-table').style.display = 'none';
//         document.getElementById('registration-form').style.display = 'block';
//         document.getElementById('registration-form').reset();
//     });
// });
//
