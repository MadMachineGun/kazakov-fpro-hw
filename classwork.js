//
//     function howMany(selectObject) {
//     var numberSelected = 0;
//     for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//     numberSelected++;
// }
// }
//     return numberSelected;
// }
//
//     var btn = document.getElementById("btn");
//     btn.addEventListener("click", function () {
//     alert("Выбрано элементов: " + howMany(document.selectForm.musicTypes));
// });
//
//
//     var x = 0;
//     var z = 0;
//     labelCancelLoops: while (true) {
//         console.log("Внешний цикл: " + x);
//         x += 1;
//         z = 1;
//         while (true) {
//             console.log("Внутренний цикл: " + z);
//             z += 1;
//             if (z === 10 && x === 10) {
//                 break labelCancelLoops;
//             } else if (z === 10) {
//                 break;
//             }
//         }
//     }



const url = 'https://dummyjson.com/products/search?q=phone';
const xhr = new XMLHttpRequest();

xhr.open(`GET`, url);
xhr.responseType = `json`;

xhr.onload = () => {
    console.log(xhr.response);
};
xhr.send();

//200 - ok
//100 - info
//300 - redirect
//400 - error on client side 404, 403 forbidden, 401 unauthorized