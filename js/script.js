// Функція для відображення даних у таблиці
function displayUserData(userData) {
    const table = document.querySelector('table');
    const newRow = table.insertRow();
    for (const key in userData) {
        const cell = newRow.insertCell();
        cell.textContent = userData[key];
    }
}

// Обробник події для кнопки "Зберегти"
document.getElementById('save-button').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('registration-form'));
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Відображення даних у таблиці
    displayUserData(userData);

    // Сховати форму та показати таблицю
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('user-table').style.display = 'block';
});

// Обробник події для кнопки "Subscribe"
document.getElementById('subscribe-button').addEventListener('click', function() {
    // Сховати таблицю та показати форму
    document.getElementById('user-table').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
    // Очистити дані форми
    document.getElementById('registration-form').reset();
});
