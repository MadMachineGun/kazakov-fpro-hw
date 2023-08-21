
let birthYear = prompt("Enter your birth year:");
let city = prompt("Enter the city you live in:");
let favoriteSport = prompt("Enter your favorite sport:");

if (birthYear === null || city === null || favoriteSport === null) {
    alert("It's a pity that you didn't want to provide your birth year, city, or favorite sport.");
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - parseInt(birthYear);

    let message = `Your age: ${age}\n`;

    if (city === "Kyiv" || city === "Washington" || city === "London") {
        let country = "";
        if (city === "Kyiv") country = "Ukraine";
        else if (city === "Washington") country = "USA";
        else if (city === "London") country = "UK";
        message += `You live in the capital city of ${country}.\n`;
    } else {
        message += `You live in the city of ${city}.\n`;
    }

    let champions = {
        "football": "Lionel Messi",
        "basketball": "LeBron James",
        "tennis": "Boris Franz Becker"
    };

    if (favoriteSport in champions) {
        message += `Cool! Do you want to become the next ${champions[favoriteSport]}?\n`;
    } else {
        message += `Your favorite sport is ${favoriteSport}.\n`;
    }

    alert(message);
}



// LESSON_3_teacher's_code:

// let age = prompt("How old are you? ", "Your answer: ");
// age = Number(age);
// if (typeof (age) == "number" && String(age) != NaN) {
//     if (age > 30) {
//         console.log("Go rest...");
//     } else {
//         console.log("Work!");
//     }
// } else {
//     console.log("Please input number!")
// }