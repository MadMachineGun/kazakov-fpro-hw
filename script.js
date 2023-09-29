`use strict`

function redirectToURL() {
    const urlInput = document.getElementById("urlInput").value;

    if (!urlInput.startsWith("http://") && !urlInput.startsWith("https://")) {

        url = "http://" + urlInput;
    } else {
        url = urlInput;
    }

    window.location.href = url;
}

document.getElementById("button1").addEventListener("click", function () {
    redirectToURL();
});

document.getElementById("button2").addEventListener("click", function () {
    redirectToURL();
});















// `use strict`
//
// // Функція для перевірки та переадресації
// function redirectToURL() {
//     const urlInput = document.getElementById("urlInput").value;
//
//     // Перевірка, чи URL містить "http://" або "https://"
//     if (!urlInput.startsWith("http://") && !urlInput.startsWith("https://")) {
//         // Якщо протокол не вказаний, додаємо "http://"
//         url = "http://" + urlInput;
//     } else {
//         url = urlInput;
//     }
//
//     // Переадресація на вказаний URL
//     window.location.href = url;
// }
//
// // Обробник подій для першої кнопки
// document.getElementById("button1").addEventListener("click", function() {
//     // Викликаємо функцію з URL
//     redirectToURL();
// });
//
// // Обробник подій для другої кнопки
// document.getElementById("button2").addEventListener("click", function() {
//     // Викликаємо функцію з URL
//     redirectToURL();
// });
