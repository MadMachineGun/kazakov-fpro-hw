// document.addEventListener('DOMContentLoaded', function () {
//     const images = [
//         'B.C._Rich_Bass.png',
//         'B.C._Rich_KKV.png',
//         'B.C._Rich_Warlock.png',
//         'Gibson_Explorer.png',
//         'Gibson_Flying_V.png',
//         'Gibson_SG_Special.png',
//         'Jackson_DK2M.png',
//         'Jackson_Kelly.png',
//         'Jackson_Rhoads.png'
//     ];
//
//     const imageContainer = document.getElementById('image-container');
//     const nextButton = document.getElementById('next-button');
//
//     nextButton.addEventListener('click', showRandomImage);
//
//     function showRandomImage() {
//         const randomIndex = Math.floor(Math.random() * images.length);
//         const randomImage = images[randomIndex];
//         imageContainer.style.backgroundImage = `url(img/${randomImage})`;
//     }
//
//     showRandomImage();
// });
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'B.C._Rich_Bass.png',
        'B.C._Rich_KKV.png',
        'B.C._Rich_Warlock.png',
        'Gibson_Explorer.png',
        'Gibson_Flying_V.png',
        'Gibson_SG_Special.png',
        'Jackson_DK2M.png',
        'Jackson_Kelly.png',
        'Jackson_Rhoads.png'
    ];

    const imageContainer = document.getElementById('image-container');
    const imageName = document.getElementById('image-name');
    const nextButton = document.getElementById('next-button');

    nextButton.addEventListener('click', showRandomImage);

    function showRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        imageContainer.style.backgroundImage = `url(img/${randomImage})`;
        imageName.textContent = randomImage.replace(/_/g, ' ').replace(/\.\w+$/, '');

    }

    showRandomImage();
});
