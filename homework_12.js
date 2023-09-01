console.log("Task 12: Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.span (16 символів)");

function generateKey(length, characters) {
    let result = '';
    const maxLength = Math.min(length, characters.length);

    Array.from({ length: maxLength }).forEach(() => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    });

    return result;
}

const characters = 'abcdefghijklmnopestw1qewvlrqf151qrstuvwxyz0123456789';
console.log("Source set:", characters);

const key = generateKey(16, characters);
console.log("Result set:", key);

// console.log("Task 12: Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.span (16 символів)");
//
// function generateKey(length, characters) {
//     let result = '';
//     const maxLength = Math.min(length, characters.length);
//
//     for (let i = 0; i < maxLength; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//
//     return result;
// }
//
// const characters = 'abcdefghijklmnopestw1qewvlrqf151qrstuvwxyz0123456789';
// console.log("Source set:", characters);
//
// const key = generateKey(16, characters);
// console.log("Result set:", key);



