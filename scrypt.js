document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'B.C. Rich Bass.png',
        'B.C. Rich KKV.png',
        'B.C. Rich Warlock.png',
        'Gibson Explorer.png',
        'Gibson Flying V.png',
        'Gibson SG Special.png',
        'Jackson DK2M.png',
        'Jackson Kelly.png',
        'Jackson Rhoads.png'
    ];

    const imageContainer = document.getElementById('image-container');
    const nextButton = document.getElementById('next-button');

    nextButton.addEventListener('click', showRandomImage);

    function showRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        imageContainer.style.backgroundImage = `url(img/${randomImage})`;
    }

    showRandomImage();
});
