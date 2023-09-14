
document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list');
    const productsList = document.querySelector('.products-list');
    const productDetails = document.querySelector('.product-details');
    const purchaseSuccessMessage = document.querySelector('.purchase-success-message');
    const startScreen = document.querySelector('.start-screen');

    const productsData = [
        {
            category: 'B.C. Rich',
            items: [
                {
                    name: 'B.C. Rich Bass',
                    description: 'Описание товара B.C. Rich Bass',
                    price: '$899.99',
                    image: 'img/B.C._Rich_Bass.png',
                },
                {
                    name: 'B.C. Rich KKV',
                    description: 'Описание товара B.C. Rich KKV',
                    price: '$799.99',
                    image: 'img/B.C._Rich_KKV.png',
                },
                {
                    name: 'B.C. Rich Warlock',
                    description: 'Описание товара B.C. Rich Warlock',
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
                    description: 'Описание товара Gibson Explorer',
                    price: '$1249.99',
                    image: 'img/Gibson_Explorer.png',
                },
                {
                    name: 'Gibson Flying V',
                    description: 'Описание товара Gibson Flying V',
                    price: '$1149.99',
                    image: 'img/Gibson_Flying_V.png',
                },
                {
                    name: 'Gibson SG Special',
                    description: 'Описание товара Gibson SG Special',
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
                    description: 'Описание товара Jackson DK2M',
                    price: '$799.99',
                    image: 'img/Jackson_DK2M.png',
                },
                {
                    name: 'Jackson Kelly',
                    description: 'Описание товара Jackson Kelly',
                    price: '$849.99',
                    image: 'img/Jackson_Kelly.png',
                },
                {
                    name: 'Jackson Rhoads',
                    description: 'Описание товара Jackson Rhoads',
                    price: '$899.99',
                    image: 'img/Jackson_Rhoads.png',
                },
            ],
        },
    ];

    // Функция для отображения категорий
    function displayCategories() {
        categoriesList.innerHTML = '';
        categoriesList.classList.remove('hidden');
        productsList.innerHTML = '';
        productDetails.innerHTML = '';
        purchaseSuccessMessage.innerHTML = '';
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
                    <button class="show-details-button" data-image="${product.image}">Show Details</button>
                `;
                productsList.appendChild(productItem);
            });
        }
    }

    categoriesButton.addEventListener('click', () => {
        displayCategories();
    });

    // Обработчик выбора категории
    categoriesList.addEventListener('click', event => {
        if (event.target.classList.contains('category-button')) {
            const selectedCategory = event.target.getAttribute('data-category');
            displayProducts(selectedCategory);
        }
    });

    // Обработчик клика по кнопке "Show Details"
    productsList.addEventListener('click', event => {
        if (event.target.classList.contains('show-details-button')) {
            const productItem = event.target.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const productDescription = productItem.querySelector('p:nth-child(2)').textContent;
            const productPrice = productItem.querySelector('p:nth-child(3)').textContent;
            const productImage = event.target.getAttribute('data-image');

            productDetails.querySelector('img').src = productImage;
            productDetails.querySelector('.product-name').textContent = productName;
            productDetails.querySelector('.product-description').textContent = productDescription;
            productDetails.querySelector('.product-price').textContent = productPrice;

            productDetails.classList.remove('hidden');
        }
    });

    productDetails.addEventListener('click', event => {
        if (event.target.classList.contains('buy-button')) {
            purchaseSuccessMessage.innerHTML = '<p>Thank you for your purchase!</p>';
            purchaseSuccessMessage.classList.remove('hidden');
            setTimeout(() => {
                purchaseSuccessMessage.classList.add('hidden');
                productDetails.classList.add('hidden'); // Скрываем окно с деталями товара
                productDetails.querySelector('img').src = ''; // Очищаем изображение
            }, 2000);
        }
    });
});

