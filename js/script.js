
document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list');
    const productsList = document.querySelector('.products-list');
    const productDetails = document.querySelector('.product-details');
    const startScreen = document.querySelector('.start-screen');

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
                    <button class="buy-button">Buy It</button>
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
        if (event.target.classList.contains('buy-button')) {
            const buyButton = event.target;
            buyButton.textContent = 'Thank you for your purchase!';
            setTimeout(() => {
                buyButton.textContent = 'Buy It';
                categoriesList.classList.remove('hidden');
                productsList.innerHTML = '';
                productDetails.innerHTML = '';
                startScreen.classList.add('hidden');
            }, 1500);
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

    document.getElementById('save-button').addEventListener('click', function() {
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

    document.getElementById('subscribe-button').addEventListener('click', function() {
        document.getElementById('user-table').style.display = 'none';
        document.getElementById('registration-form').style.display = 'block';
        document.getElementById('registration-form').reset();
    });
});
