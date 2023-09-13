document.addEventListener('DOMContentLoaded', function () {
    const categoriesButton = document.querySelector('.categories-button');
    const categoriesList = document.querySelector('.categories-list ul');
    const productsList = document.querySelector('.products-list');

    const productsData = [
        {
            name: 'B.C. Rich Bass',
            category: 'B.C. Rich',
            description: 'Опис товару B.C. Rich Bass',
            price: '$899.99',
        },
        {
            name: 'B.C. Rich KKV',
            category: 'B.C. Rich',
            description: 'Опис товару B.C. Rich KKV',
            price: '$799.99',
        },
        {
            name: 'B.C. Rich Warlock',
            category: 'B.C. Rich',
            description: 'Опис товару B.C. Rich Warlock',
            price: '$999.99',
        },
        {
            name: 'Gibson Explorer',
            category: 'Gibson',
            description: 'Опис товару Gibson Explorer',
            price: '$1249.99',
        },
        {
            name: 'Gibson Flying V',
            category: 'Gibson',
            description: 'Опис товару Gibson Flying V',
            price: '$1149.99',
        },
        {
            name: 'Gibson SG Special',
            category: 'Gibson',
            description: 'Опис товару Gibson SG Special',
            price: '$1099.99',
        },
        {
            name: 'Jackson DK2M',
            category: 'Jackson',
            description: 'Опис товару Jackson DK2M',
            price: '$799.99',
        },
        {
            name: 'Jackson Kelly',
            category: 'Jackson',
            description: 'Опис товару Jackson Kelly',
            price: '$849.99',
        },
        {
            name: 'Jackson Rhoads',
            category: 'Jackson',
            description: 'Опис товару Jackson Rhoads',
            price: '$899.99',
        },
    ];

    // Функция для отображения товаров по выбранной категории
    function displayProducts(category) {
        productsList.innerHTML = '';
        const filteredProducts = productsData.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Ціна: ${product.price}</p>
                <button class="add-to-cart">Додати в корзину</button>
            `;
            productsList.appendChild(productItem);
        });
    }

    // Обработчик клика по кнопке "Категории"
    categoriesButton.addEventListener('click', () => {
        categoriesList.classList.toggle('visible');
    });

    // Обработчик выбора категории
    categoriesList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            const selectedCategory = event.target.getAttribute('data-category');
            displayProducts(selectedCategory);
        }
    });

    // Обработчик клика по кнопке "Додати в корзину"
    productsList.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            alert('Товар додано в корзину!');
        }
    });

    // Обработчик отправки формы заказа
    const checkoutForm = document.getElementById('checkout-form');
    const purchaseSuccessMessage = document.querySelector('.purchase-success-message');
    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();
        // Здесь можно добавить логику отправки заказа на сервер
        purchaseSuccessMessage.style.display = 'block';
        setTimeout(() => {
            purchaseSuccessMessage.style.display = 'none';
            categoriesList.classList.add('visible'); // Возвращаем список категорий
        }, 2000);
    });
});
