
"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list');
    const productsList = document.querySelector('.products-list');
    const productDetails = document.querySelector('.product-details');
    const startScreen = document.querySelector('.start-screen');
    const myOrdersButton = document.getElementById('my-orders-button');
    const myOrdersSection = document.getElementById('my-orders');
    const orderList = document.getElementById('order-list');
    const returnButton = document.getElementById('return-button');

    function getOrders() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function saveOrders(orders) {
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function displayOrders() {
        orderList.innerHTML = '';

        const orders = getOrders();
        if (orders.length === 0) {
            orderList.innerHTML = '<p>You have no orders yet.</p>';
        } else {
            orders.forEach((order, index) => {
                const orderItem = document.createElement('li');
                orderItem.innerHTML = `
                    <p>Order #${index + 1}</p>
                    <p>Product: ${order.name}</p>
                    <p>Date: ${order.date}</p>
                    <p>${order.price}</p>
                    <button class="delete-order-button" data-index="${index}">Remove</button>
                `;
                orderList.appendChild(orderItem);
            });
        }
    }

    myOrdersButton.addEventListener('click', () => {
        categoriesList.classList.add('hidden');
        productsList.classList.add('hidden');
        productDetails.classList.add('hidden');
        startScreen.classList.add('hidden');
        returnButton.classList.remove('hidden');
        myOrdersSection.classList.remove('hidden');
        displayOrders();

        // Скрываем элементы .product-item
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.style.display = 'none';
        });
    });

    returnButton.addEventListener('click', () => {
        categoriesList.classList.remove('hidden');
        productsList.classList.remove('hidden');
        productDetails.classList.remove('hidden');
        startScreen.classList.remove('hidden');
        returnButton.classList.add('hidden');
        myOrdersSection.classList.add('hidden');

        // Показываем снова элементы .product-item
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.style.display = 'block';
        });
    });

    orderList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-order-button')) {
            const index = parseInt(event.target.getAttribute('data-index'), 10);
            const orders = getOrders();
            orders.splice(index, 1);
            saveOrders(orders);
            displayOrders();
        }
    });

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

    function displayCategories() {
        categoriesList.innerHTML = '';
        categoriesList.classList.remove('hidden');
        productsList.innerHTML = '';
        productDetails.innerHTML = '';
        startScreen.classList.add('hidden');

        productsData.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.classList.add('category-button');
            categoryButton.textContent = category.category;
            categoryButton.setAttribute('data-category', category.category);
            categoriesList.appendChild(categoryButton);
        });
    }

    function displayProducts(category) {
        productsList.innerHTML = '';
        const selectedCategory = productsData.find(cat => cat.category === category);

        if (selectedCategory) {
            selectedCategory.items.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <button class="add-to-orders-button">Add to Orders</button>
                `;
                productsList.appendChild(productItem);
            });
        }
    }

    categoriesButton.addEventListener('click', () => {
        displayCategories();
    });

    categoriesList.addEventListener('click', event => {
        if (event.target.classList.contains('category-button')) {
            const selectedCategory = event.target.getAttribute('data-category');
            displayProducts(selectedCategory);
        }
    });

    productsList.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-orders-button')) {
            const productItem = event.target.parentElement;
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p:nth-child(3)').textContent;
            const date = new Date().toLocaleDateString();
            const order = { date, price: productPrice, name: productName };
            const orders = getOrders();
            orders.push(order);
            saveOrders(orders);
            alert('Product added to orders.');
        }
    });

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

        const userData = {
            'First Name': firstName,
            'Last Name': lastName,
            'Email': email,
            'Date of Birth': birthdate,
            'Gender': gender,
            'City': city,
            'Languages': languages.join(', '),
        };

        displayUserData(userData);

        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('user-table').style.display = 'block';
    });

    document.getElementById('subscribe-button').addEventListener('click', function () {
        document.getElementById('user-table').style.display = 'none';
        document.getElementById('registration-form').style.display = 'block';
        document.getElementById('registration-form').reset();
    });
});










// Var 2
// "use strict";
//
// document.addEventListener('DOMContentLoaded', function () {
//     const categoriesButton = document.querySelector('.categories-button');
//     const categoriesList = document.querySelector('.categories-list');
//     const productsList = document.querySelector('.products-list');
//     const productDetails = document.querySelector('.product-details');
//     const startScreen = document.querySelector('.start-screen');
//     const myOrdersButton = document.getElementById('my-orders-button');
//     const myOrdersSection = document.getElementById('my-orders');
//     const orderList = document.getElementById('order-list');
//     const returnButton = document.getElementById('return-button');
//
//     function getOrders() {
//         return JSON.parse(localStorage.getItem('orders')) || [];
//     }
//
//     function saveOrders(orders) {
//         localStorage.setItem('orders', JSON.stringify(orders));
//     }
//
//     function displayOrders() {
//         orderList.innerHTML = '';
//
//         const orders = getOrders();
//         if (orders.length === 0) {
//             orderList.innerHTML = '<p>You have no orders yet.</p>';
//         } else {
//             orders.forEach((order, index) => {
//                 const orderItem = createOrderItem(order, index);
//                 orderList.appendChild(orderItem);
//             });
//         }
//     }
//
//     function createOrderItem(order, index) {
//         const orderItem = document.createElement('li');
//         orderItem.innerHTML = `
//             <p>Order #${index + 1}</p>
//             <p>Product: ${order.name}</p>
//             <p>Date: ${order.date}</p>
//             <p>Price: ${order.price}</p>
//             <div class="quantity-container">
//                 <button class="decrease-quantity-button" data-index="${index}">-</button>
//                 <span class="quantity">${order.quantity}</span>
//                 <button class="increase-quantity-button" data-index="${index}">+</button>
//             </div>
//             <p>Total: $<span class="total">${(order.price * order.quantity).toFixed(2)}</span></p>
//             <button class="delete-order-button" data-index="${index}">Remove</button>
//         `;
//
//         return orderItem;
//     }
//
//     myOrdersButton.addEventListener('click', () => {
//         categoriesList.classList.add('hidden');
//         productsList.classList.add('hidden');
//         productDetails.classList.add('hidden');
//         startScreen.classList.add('hidden');
//         returnButton.classList.remove('hidden');
//         myOrdersSection.classList.remove('hidden');
//         displayOrders();
//
//         // Скрываем элементы .product-item
//         const productItems = document.querySelectorAll('.product-item');
//         productItems.forEach(item => {
//             item.style.display = 'none';
//         });
//     });
//
//     returnButton.addEventListener('click', () => {
//         categoriesList.classList.remove('hidden');
//         productsList.classList.remove('hidden');
//         productDetails.classList.remove('hidden');
//         startScreen.classList.remove('hidden');
//         returnButton.classList.add('hidden');
//         myOrdersSection.classList.add('hidden');
//
//         // Показываем снова элементы .product-item
//         const productItems = document.querySelectorAll('.product-item');
//         productItems.forEach(item => {
//             item.style.display = 'block';
//         });
//     });
//
//     orderList.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target.classList.contains('delete-order-button')) {
//             const index = parseInt(target.getAttribute('data-index'), 10);
//             const orders = getOrders();
//             orders.splice(index, 1);
//             saveOrders(orders);
//             displayOrders();
//         } else if (target.classList.contains('increase-quantity-button')) {
//             const index = parseInt(target.getAttribute('data-index'), 10);
//             increaseQuantity(index);
//         } else if (target.classList.contains('decrease-quantity-button')) {
//             const index = parseInt(target.getAttribute('data-index'), 10);
//             decreaseQuantity(index);
//         }
//     });
//
//     function increaseQuantity(index) {
//         const orders = getOrders();
//         if (index >= 0 && index < orders.length) {
//             orders[index].quantity += 1;
//             saveOrders(orders);
//             displayOrders();
//         }
//     }
//
//     function decreaseQuantity(index) {
//         const orders = getOrders();
//         if (index >= 0 && index < orders.length) {
//             if (orders[index].quantity > 1) {
//                 orders[index].quantity -= 1;
//                 saveOrders(orders);
//                 displayOrders();
//             }
//         }
//     }
//
//     const productsData = [
//         {
//             category: 'B.C. Rich',
//             items: [
//                 {
//                     name: 'B.C. Rich Bass',
//                     description: 'Electric Bass guitar - B.C. Rich "Bass"',
//                     price: '$899.99',
//                     image: 'img/B.C._Rich_Bass.png',
//                 },
//                 {
//                     name: 'B.C. Rich KKV',
//                     description: 'Electric guitar - B.C. Rich "KKV"',
//                     price: '$799.99',
//                     image: 'img/B.C._Rich_KKV.png',
//                 },
//                 {
//                     name: 'B.C. Rich Warlock',
//                     description: 'Electric guitar - B.C. Rich "Warlock"',
//                     price: '$999.99',
//                     image: 'img/B.C._Rich_Warlock.png',
//                 },
//             ],
//         },
//         {
//             category: 'Gibson',
//             items: [
//                 {
//                     name: 'Gibson Explorer',
//                     description: 'Electric guitar - "Gibson Explorer"',
//                     price: '$1249.99',
//                     image: 'img/Gibson_Explorer.png',
//                 },
//                 {
//                     name: 'Gibson Flying V',
//                     description: 'Electric guitar - "Gibson Flying V"',
//                     price: '$1149.99',
//                     image: 'img/Gibson_Flying_V.png',
//                 },
//                 {
//                     name: 'Gibson SG Special',
//                     description: 'Electric guitar - Gibson "SG Special"',
//                     price: '$1099.99',
//                     image: 'img/Gibson_SG_Special.png',
//                 },
//             ],
//         },
//         {
//             category: 'Jackson',
//             items: [
//                 {
//                     name: 'Jackson DK2M',
//                     description: 'Electric guitar - Jackson "DK2M"',
//                     price: '$799.99',
//                     image: 'img/Jackson_DK2M.png',
//                 },
//                 {
//                     name: 'Jackson Kelly',
//                     description: 'Electric guitar - Jackson "Kelly"',
//                     price: '$849.99',
//                     image: 'img/Jackson_Kelly.png',
//                 },
//                 {
//                     name: 'Jackson Rhoads',
//                     description: 'Electric guitar - Jackson "Rhoads"',
//                     price: '$899.99',
//                     image: 'img/Jackson_Rhoads.png',
//                 },
//             ],
//         },
//     ];
//
//     function displayCategories() {
//         categoriesList.innerHTML = '';
//         categoriesList.classList.remove('hidden');
//         productsList.innerHTML = '';
//         productDetails.innerHTML = '';
//         startScreen.classList.add('hidden');
//
//         productsData.forEach(category => {
//             const categoryButton = document.createElement('button');
//             categoryButton.classList.add('category-button');
//             categoryButton.textContent = category.category;
//             categoryButton.setAttribute('data-category', category.category);
//             categoriesList.appendChild(categoryButton);
//         });
//     }
//
//     function displayProducts(category) {
//         productsList.innerHTML = '';
//         const selectedCategory = productsData.find(cat => cat.category === category);
//
//         if (selectedCategory) {
//             selectedCategory.items.forEach(product => {
//                 const productItem = document.createElement('div');
//                 productItem.classList.add('product-item');
//                 productItem.innerHTML = `
//                     <h3>${product.name}</h3>
//                     <p>${product.description}</p>
//                     <p>Price: ${product.price}</p>
//                     <img src="${product.image}" alt="${product.name}" class="product-image">
//                     <button class="add-to-orders-button">Add to Orders</button>
//                 `;
//                 productsList.appendChild(productItem);
//             });
//         }
//     }
//
//     categoriesButton.addEventListener('click', () => {
//         displayCategories();
//     });
//
//     categoriesList.addEventListener('click', event => {
//         if (event.target.classList.contains('category-button')) {
//             const selectedCategory = event.target.getAttribute('data-category');
//             displayProducts(selectedCategory);
//         }
//     });
//
//     productsList.addEventListener('click', event => {
//         if (event.target.classList.contains('add-to-orders-button')) {
//             const productItem = event.target.parentElement;
//             const productName = productItem.querySelector('h3').textContent;
//             const productPrice = productItem.querySelector('p:nth-child(3)').textContent;
//             const date = new Date().toLocaleDateString();
//             const order = { date, price: productPrice, name: productName };
//             const orders = getOrders();
//             orders.push(order);
//             saveOrders(orders);
//             alert('Product added to orders.');
//         }
//     });
//
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
//         displayUserData(userData);
//
//         document.getElementById('registration-form').style.display = 'none';
//         document.getElementById('user-table').style.display = 'block';
//     });
//
//     document.getElementById('subscribe-button').addEventListener('click', function () {
//         document.getElementById('user-table').style.display = 'none';
//         document.getElementById('registration-form').style.display = 'block';
//         document.getElementById('registration-form').reset();
//     });
// });


