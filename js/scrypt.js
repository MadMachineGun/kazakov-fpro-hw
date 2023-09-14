// document.addEventListener('DOMContentLoaded', function () {
//     const categoriesButton = document.querySelector('.categories-button');
//     const categoriesList = document.querySelector('.categories-list');
//     const productsList = document.querySelector('.products-list');
//     const productDetails = document.querySelector('.product-details');
//     const buyButton = document.querySelector('.buy-button');
//     const purchaseSuccessMessage = document.querySelector('.purchase-success-message');
//     const productItems = []; // Для хранения информации о товарах
//
//     const productsData = [
//         {
//             category: 'B.C. Rich',
//             items: [
//                 {
//                     name: 'B.C. Rich Bass',
//                     description: 'Опис товару B.C. Rich Bass',
//                     price: '$899.99',
//                     image: 'img/B.C._Rich_Bass.png',
//                 },
//                 {
//                     name: 'B.C. Rich KKV',
//                     description: 'Опис товару B.C. Rich KKV',
//                     price: '$799.99',
//                     image: 'img/B.C._Rich_KKV.png',
//                 },
//                 {
//                     name: 'B.C. Rich Warlock',
//                     description: 'Опис товару B.C. Rich Warlock',
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
//                     description: 'Опис товару Gibson Explorer',
//                     price: '$1249.99',
//                     image: 'img/Gibson_Explorer.png',
//                 },
//                 {
//                     name: 'Gibson Flying V',
//                     description: 'Опис товару Gibson Flying V',
//                     price: '$1149.99',
//                     image: 'img/Gibson_Flying_V.png',
//                 },
//                 {
//                     name: 'Gibson SG Special',
//                     description: 'Опис товару Gibson SG Special',
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
//                     description: 'Опис товару Jackson DK2M',
//                     price: '$799.99',
//                     image: 'img/Jackson_DK2M.png',
//                 },
//                 {
//                     name: 'Jackson Kelly',
//                     description: 'Опис товару Jackson Kelly',
//                     price: '$849.99',
//                     image: 'img/Jackson_Kelly.png',
//                 },
//                 {
//                     name: 'Jackson Rhoads',
//                     description: 'Опис товару Jackson Rhoads',
//                     price: '$899.99',
//                     image: 'img/Jackson_Rhoads.png',
//                 },
//             ],
//         },
//     ];
//
//     // Функция для отображения товаров по выбранной категории
//     function displayProducts(category) {
//         productsList.innerHTML = '';
//         const categoryData = productsData.find(data => data.category === category);
//
//         if (categoryData) {
//             categoryData.items.forEach(item => {
//                 const productItem = document.createElement('div');
//                 productItem.classList.add('product-item');
//                 productItem.innerHTML = `
//                     <h3>${item.name}</h3>
//                     <p>${item.description}</p>
//                     <p>Price: ${item.price}</p>
//                     <button class="show-details-button">Show Details</button>
//                 `;
//                 productItems.push({
//                     name: item.name,
//                     description: item.description,
//                     price: item.price,
//                     image: item.image,
//                 });
//                 productsList.appendChild(productItem);
//             });
//         }
//     }
//
//     // Функция для отображения подробных данных о товаре
//     function displayProductDetails(productName) {
//         const productData = productItems.find(item => item.name === productName);
//
//         if (productData) {
//             productDetails.querySelector('img').src = productData.image;
//             productDetails.querySelector('.product-name').textContent = productName;
//             productDetails.querySelector('.product-description').textContent = productData.description;
//             productDetails.querySelector('.product-price').textContent = `Price: ${productData.price}`;
//             productDetails.classList.remove('hidden');
//         }
//     }
//
//     // Обработчик клика по кнопке "Categories"
//     categoriesButton.addEventListener('click', () => {
//         categoriesList.classList.toggle('hidden');
//     });
//
//     // Обработчик выбора категории
//     categoriesList.addEventListener('click', event => {
//         if (event.target.classList.contains('category-button')) {
//             const selectedCategory = event.target.getAttribute('data-category');
//             displayProducts(selectedCategory);
//         }
//     });
//
//     // Обработчик клика по кнопке "Show Details"
//     productsList.addEventListener('click', event => {
//         if (event.target.classList.contains('show-details-button')) {
//             const productItem = event.target.closest('.product-item');
//             const productName = productItem.querySelector('h3').textContent;
//             displayProductDetails(productName);
//         }
//     });
//
//     // Обработчик клика по кнопке "Buy it"
//     buyButton.addEventListener('click', () => {
//         purchaseSuccessMessage.classList.remove('hidden');
//         setTimeout(() => {
//             purchaseSuccessMessage.classList.add('hidden');
//             productDetails.classList.add('hidden');
//             categoriesList.classList.remove('hidden');
//         }, 2000);
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list');
    const productsList = document.querySelector('.products-list');
    const productDetails = document.querySelector('.product-details');
    const purchaseSuccessMessage = document.querySelector('.purchase-success-message');

    const productsData = [
        {
            category: 'B.C. Rich',
            items: [
                {
                    name: 'B.C. Rich Bass',
                    description: 'Опис товару B.C. Rich Bass',
                    price: '$899.99',
                    image: 'img/B.C._Rich_Bass.png',
                },
                {
                    name: 'B.C. Rich KKV',
                    description: 'Опис товару B.C. Rich KKV',
                    price: '$799.99',
                    image: 'img/B.C._Rich_KKV.png',
                },
                {
                    name: 'B.C. Rich Warlock',
                    description: 'Опис товару B.C. Rich Warlock',
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
                    description: 'Опис товару Gibson Explorer',
                    price: '$1249.99',
                    image: 'img/Gibson_Explorer.png',
                },
                {
                    name: 'Gibson Flying V',
                    description: 'Опис товару Gibson Flying V',
                    price: '$1149.99',
                    image: 'img/Gibson_Flying_V.png',
                },
                {
                    name: 'Gibson SG Special',
                    description: 'Опис товару Gibson SG Special',
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
                    description: 'Опис товару Jackson DK2M',
                    price: '$799.99',
                    image: 'img/Jackson_DK2M.png',
                },
                {
                    name: 'Jackson Kelly',
                    description: 'Опис товару Jackson Kelly',
                    price: '$849.99',
                    image: 'img/Jackson_Kelly.png',
                },
                {
                    name: 'Jackson Rhoads',
                    description: 'Опис товару Jackson Rhoads',
                    price: '$899.99',
                    image: 'img/Jackson_Rhoads.png',
                },
            ],
        },
    ];

    function displayCategories() {
        categoriesList.innerHTML = '';
        productsList.innerHTML = '';
        productDetails.innerHTML = '';
        purchaseSuccessMessage.innerHTML = '';
        const categoryButtons = productsData.reduce((categories, product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
            return categories;
        }, []);

        categoryButtons.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.classList.add('category-button');
            categoryButton.textContent = category;
            categoryButton.setAttribute('data-category', category);
            categoriesList.appendChild(categoryButton);
        });
    }

    function displayProducts(category) {
        productsList.innerHTML = '';
        const filteredProducts = productsData.find(product => product.category === category).items;
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <button class="show-details-button">Show Details</button>
            `;
            productsList.appendChild(productItem);
        });
    }

    categoriesButton.addEventListener('click', () => {
        displayCategories();
        categoriesList.classList.toggle('hidden');
    });

    categoriesList.addEventListener('click', event => {
        if (event.target.classList.contains('category-button')) {
            const selectedCategory = event.target.getAttribute('data-category');
            displayProducts(selectedCategory);
        }
    });

    productsList.addEventListener('click', event => {
        if (event.target.classList.contains('show-details-button')) {
            const productItem = event.target.closest('.product-item');
            const productImageSrc = productItem.querySelector('img').src;
            const productName = productItem.querySelector('h3').textContent;
            const productDescription = productItem.querySelector('p:nth-child(2)').textContent;
            const productPrice = productItem.querySelector('p:nth-child(3)').textContent;

            const buyButton = document.createElement('button');
            buyButton.classList.add('buy-button');
            buyButton.textContent = 'Buy it';
            productDetails.innerHTML = `
                <img src="${productImageSrc}" alt="Product Image">
                <h2 class="product-name">${productName}</h2>
                <p class="product-description">${productDescription}</p>
                <p class="product-price">${productPrice}</p>`;
            productDetails.appendChild(buyButton);

            productDetails.classList.remove('hidden');
        }
    });

    productDetails.addEventListener('click', event => {
        if (event.target.classList.contains('buy-button')) {
            purchaseSuccessMessage.innerHTML = '<p>Thank you for your purchase!</p>';
            purchaseSuccessMessage.classList.remove('hidden');
            setTimeout(() => {
                purchaseSuccessMessage.classList.add('hidden');
                displayCategories();
            }, 2000);
        }
    });
});

