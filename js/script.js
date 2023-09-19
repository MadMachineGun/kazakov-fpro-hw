
function displayUserData(userData) {
    const table = document.querySelector('table');

    for (const key in userData) {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell();
        cell1.textContent = key;
        const cell2 = newRow.insertCell();
        cell2.textContent = userData[key];
    }
}

document.getElementById('save-button').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;

    const languages = [];
    const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    languageCheckboxes.forEach(checkbox => {
        languages.push(checkbox.value);
    });

    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(birthdate)) {
        alert('Please enter a valid date of birth in the format DD.MM.YYYY');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    const userData = {
        'First Name': firstName,
        'Last Name': lastName,
        'Email': email,
        'Date of Birth': birthdate,
        'Gender': gender,
        'City': city,
        'Languages': languages.join(', '),
    };

    displayUserData(userData);

    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('user-table').style.display = 'block';
});

document.getElementById('subscribe-button').addEventListener('click', function() {
    document.getElementById('user-table').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('registration-form').reset();
});
