'use strict';

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
    const totalAmountDisplay = document.getElementById('total-amount');

    const cartButton = document.querySelector('.cart-button');
    const cartSection = document.querySelector('.cart');
    const buyButton = document.querySelector('#buy-button');
    const orderForm = document.querySelector('.order-form');
    const orderDetails = document.querySelector('.order-details');
    const errorMessage = document.querySelector('.error-message');

    cartButton.addEventListener('click', () => {
        cartSection.classList.remove('hidden');
        displayOrders();
    });

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
            let totalAmount = 0;
            orders.forEach((order, index) => {
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
                orderList.appendChild(orderItem);

                const quantityInput = orderItem.querySelector(`#quantity-${index}`);
                const totalPriceDisplay = orderItem.querySelector('.total-price');

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

                totalAmount += parseFloat(order.price) * (order.quantity || 1);
            });

            totalAmountDisplay.textContent = totalAmount.toFixed(2);
        }
    }

    function updateTotalAmount() {
        const orders = getOrders();
        let totalAmount = 0;
        orders.forEach(order => {
            if (!isNaN(order.quantity)) {
                totalAmount += parseFloat(order.price) * order.quantity;
            }
        });
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    myOrdersButton.addEventListener('click', () => {
        categoriesList.classList.add('hidden');
        productsList.classList.add('hidden');
        productDetails.classList.add('hidden');
        startScreen.classList.add('hidden');
        returnButton.classList.remove('hidden');
        myOrdersSection.classList.remove('hidden');
        displayOrders();
    });

    returnButton.addEventListener('click', () => {
        categoriesList.classList.remove('hidden');
        productsList.classList.remove('hidden');
        productDetails.classList.remove('hidden');
        startScreen.classList.remove('hidden');
        returnButton.classList.add('hidden');
        myOrdersSection.classList.add('hidden');
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
            const productImage = productItem.querySelector('.product-image').getAttribute('src');
            const date = new Date().toLocaleDateString();
            const order = { date, price: productPrice.replace('Price: $', ''), name: productName, image: productImage };
            const orders = getOrders();
            orders.push(order);
            saveOrders(orders);
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

    buyButton.addEventListener('click', () => {
        cartSection.classList.add('hidden');
        orderForm.classList.remove('hidden');
    });

    document.getElementById('submit-button').addEventListener('click', () => {
        const orderName = document.getElementById('name').value;
        const orderCity = document.getElementById('destination').value;
        const orderShippingLocation = document.getElementById('shipping-location').value;
        const orderPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const orderQuantity = document.getElementById('quantity').value;
        const orderComments = document.getElementById('comments').value;

        if (!orderName || !orderCity || !orderShippingLocation || !orderPaymentMethod || !orderQuantity) {
            errorMessage.classList.remove('hidden');
            return;
        } else {
            errorMessage.classList.add('hidden');
        }

        document.getElementById('product-name').textContent = productName;
        document.getElementById('product-price').textContent = productPrice;
        document.getElementById('order-name').textContent = orderName;
        document.getElementById('order-city').textContent = orderCity;
        document.getElementById('order-shipping-location').textContent = orderShippingLocation;
        document.getElementById('order-payment-method').textContent = orderPaymentMethod;
        document.getElementById('order-quantity').textContent = orderQuantity;
        document.getElementById('order-comments').textContent = orderComments;

        orderForm.classList.add('hidden');
        orderDetails.classList.remove('hidden');
    });
});

