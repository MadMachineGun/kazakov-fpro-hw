
const imageCount = 41;
const imagePrefix = "img/";
const images = [];

for (let i = 1; i <= imageCount; i++) {
    images.push(`${imagePrefix}${i}.jpg`);
}

let currentIndex = 0;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const sliderImage = document.getElementById("slider-image");
const audioElement = document.getElementById("myAudio");

audioElement.src = "audio/back_in_black.mp3";

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
        audioElement.play();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
        audioElement.pause();
    }
});

function updateImage() {
    sliderImage.src = images[currentIndex];
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    nextButton.style.display = currentIndex === images.length - 1 ? "none" : "block";
}


