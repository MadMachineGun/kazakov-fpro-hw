// Var_1
console.log("Additional task: Validate the phone numbers presented in the array.");
let phoneNumbers = [
    '+380954748389',
    '3809748389',
    '+380956aewrt748389',
    '+38095632453245748389',
    '+380456[bmb546454',
    '',
    '+380',
    '+380954y48389',
    '+380923467889',
    '+3809234678890',
    '+'
];
console.log("Source array:", phoneNumbers);
function phoneNumberValidator(phoneNumbers) {
    const validPhoneNumbers = phoneNumbers.filter(phoneNumber => {
        return /^(\+380\d{9})$/.test(phoneNumber);
    });

    return validPhoneNumbers;
}

console.log("Result array:", phoneNumberValidator(phoneNumbers));

// // Var_2
// console.log("Additional task: Validate the phone numbers presented in the array.");
// let phoneNumbers = [
//     '+380954748389',
//     '3809748389',
//     '+380956aewrt748389',
//     '+38095632453245748389',
//     '+380456[bmb546454',
//     '',
//     '+380',
//     '+380954y48389',
//     '+380923467889',
//     '+3809234678890',
//     '+'
// ];
// console.log("Source array:", phoneNumbers);
//
// function phoneNumberValidator(phoneNumbers) {
//     const validPhoneNumbers = [];
//
//     phoneNumbers.forEach(phoneNumber => {
//         if (/^\+380\d{9}$/.test(phoneNumber)) {
//             validPhoneNumbers.push(phoneNumber);
//         }
//     });
//
//     return validPhoneNumbers;
// }
//
// console.log("Result array:", phoneNumberValidator(phoneNumbers));
