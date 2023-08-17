let age = prompt("How old are you? ", "Your answer: ");
age = Number(age);
if (typeof (age) == "number" && String(age) != NaN) {
    if (age > 30) {
        console.log("Go rest...");
    } else {
        console.log("Work!");
    }
} else {
    console.log("Please input number!")
}