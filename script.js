function getWeather(city) {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;


    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            const cityElement = document.getElementById('city');
            const temperatureElement = document.getElementById('temperature');
            const pressureElement = document.getElementById('pressure');
            const descriptionElement = document.getElementById('description');
            const humidityElement = document.getElementById('humidity');
            const windSpeedElement = document.getElementById('wind-speed');
            const windDirectionElement = document.getElementById('wind-direction');
            const weatherIconElement = document.getElementById('weather-icon');

            cityElement.textContent = data.name;
            temperatureElement.textContent = data.main.temp;
            pressureElement.textContent = data.main.pressure;
            descriptionElement.textContent = data.weather[0].description;
            humidityElement.textContent = data.main.humidity;
            windSpeedElement.textContent = data.wind.speed;
            windDirectionElement.textContent = data.wind.deg;
            weatherIconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        },
        error: function (error) {
            console.log('Помилка отримання погоди:', error);
        }
    });
}


getWeather('LVIV');
