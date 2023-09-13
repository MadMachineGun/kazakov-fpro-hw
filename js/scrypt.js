document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');
    const productList = document.querySelector('.product-list');
    const productInfo = document.querySelector('.product-info');
    const nextButton = document.querySelector('.next-button');
    const loader = document.querySelector('.loader');

    const productsData = [
        {
            name: 'B.C. Rich Bass',
            category: 'B.C. Rich',
            image: 'B.C._Rich_Bass.png',
            description: 'Опис товару B.C. Rich Bass',
            price: '$899.99',
        },
        {
            name: 'B.C. Rich KKV',
            category: 'B.C. Rich',
            image: 'B.C._Rich_KKV.png',
            description: 'Опис товару B.C. Rich KKV',
            price: '$799.99',
        },
        {
            name: 'B.C. Rich Warlock',
            category: 'B.C. Rich',
            image: 'B.C._Rich_Warlock.png',
            description: 'Опис товару B.C. Rich Warlock',
            price: '$999.99',
        },
        {
            name: 'Gibson Explorer',
            category: 'Gibson',
            image: 'Gibson_Explorer.png',
            description: 'Опис товару Gibson Explorer',
            price: '$1249.99',
        },
        {
            name: 'Gibson Flying V',
            category: 'Gibson',
            image: 'Gibson_Flying_V.png',
            description: 'Опис товару Gibson Flying V',
            price: '$1149.99',
        },
        {
            name: 'Gibson SG Special',
            category: 'Gibson',
            image: 'Gibson_SG_Special.png',
            description: 'Опис товару Gibson SG Special',
            price: '$1099.99',
        },
        {
            name: 'Jackson DK2M',
            category: 'Jackson',
            image: 'Jackson_DK2M.png',
            description: 'Опис товару Jackson DK2M',
            price: '$799.99',
        },
        {
            name: 'Jackson Kelly',
            category: 'Jackson',
            image: 'Jackson_Kelly.png',
            description: 'Опис товару Jackson Kelly',
            price: '$849.99',
        },
        {
            name: 'Jackson Rhoads',
            category: 'Jackson',
            image: 'Jackson_Rhoads.png',
            description: 'Опис товару Jackson Rhoads',
            price: '$899.99',
        },
    ];

    function displayProducts(category) {
        productList.innerHTML = '';
        const filteredProducts = productsData.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('product');
            listItem.dataset.productName = product.name;
            listItem.innerHTML = `
                <div class="product">
                    <img src="img/${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p>Ціна: ${product.price}</p>
                    <button class="buy-button">Купити</button>
                </div>
            `;
            productList.appendChild(listItem);
        });
    }

    function getNextProduct() {
        const filteredProducts = productsData.filter(product => product.category === currentCategory);
        currentProductIndex = (currentProductIndex + 1) % filteredProducts.length;
        return filteredProducts[currentProductIndex];
    }

    let currentCategory = 'B.C. Rich';
    let currentProductIndex = 0;

    function showLoader() {
        loader.style.display = 'flex';
    }

    function hideLoader() {
        loader.style.display = 'none';
    }

    showLoader();

    setTimeout(function () {
        hideLoader();
        displayProducts(currentCategory);
    }, 2000);

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.getAttribute('data-category');
            currentCategory = selectedCategory;
            currentProductIndex = 0;
            displayProducts(selectedCategory);
            productInfo.innerHTML = '';
        });
    });

    productList.addEventListener('click', event => {
        if (event.target.closest('.product')) {
            const productName = event.target.closest('.product').dataset.productName;
            const selectedProduct = productsData.find(product => product.name === productName);
            productInfo.innerHTML = `
                <h3>${selectedProduct.name}</h3>
                <p>${selectedProduct.description}</p>
                <p>Ціна: ${selectedProduct.price}</p>
                <button class="buy-button">Купити</button>
            `;
        }
    });

    productInfo.addEventListener('click', event => {
        if (event.target.classList.contains('buy-button')) {
            alert('Товар куплено!');
            productInfo.innerHTML = '';
        }
    });

    nextButton.addEventListener('click', () => {
        const nextProduct = getNextProduct();
        if (nextProduct) {
            const selectedProduct = productsData.find(product => product.name === nextProduct.name);
            productInfo.innerHTML = `
                <h3>${selectedProduct.name}</h3>
                <p>${selectedProduct.description}</p>
                <p>Ціна: ${selectedProduct.price}</p>
                <button class="buy-button">Купити</button>
            `;
        }
    });
});

