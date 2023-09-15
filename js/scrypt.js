const imageCount = 96;
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

let currentTrack = "back_in_black.mp3";

updateButtonsVisibility();

audioElement.addEventListener("ended", () => {
    if (currentTrack === "back_in_black.mp3" && currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();

        if (currentTrack !== "back_in_black.mp3") {
            currentTrack = "back_in_black.mp3";
            audioElement.src = "audio/back_in_black.mp3";
        }

        audioElement.play();
        updateButtonsVisibility();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();

        if (currentTrack !== "enter-sandman.mp3") {
            currentTrack = "enter-sandman.mp3";
            audioElement.src = "audio/enter-sandman.mp3";
        }

        audioElement.play();
        updateButtonsVisibility();
    }
});

function updateImage() {
    sliderImage.src = images[currentIndex];
}

function updateButtonsVisibility() {
    if (currentIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    if (currentIndex === images.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}
