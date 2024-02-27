function getWeather() {
    const apiKey = 'c38999f7824da59379d45b5626f14876'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('city-input').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const weatherIcon = data.weather[0].icon; // Icon code from OpenWeatherMap

    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const windElement = document.getElementById('wind');
    const weatherIconElement = document.getElementById('weather-icon');
    const weatherDetailsElement = document.getElementById('weather-details');

    // Set weather icon using Font Awesome classes
    weatherIconElement.className = `fas fa-${getWeatherIcon(weatherIcon)}`;

    temperatureElement.innerText = `Temperature: ${temperature}°C`;
    descriptionElement.innerText = `Description: ${description}`;
    windElement.innerText = `Wind: ${windSpeed} m/s`;

    weatherDetailsElement.style.display = 'flex'; // Display as flex to align items horizontally
}

// Function to map OpenWeatherMap icon codes to Font Awesome icons
function getWeatherIcon(iconCode) {
    switch (iconCode) {
        case '01d':
        case '01n':
            return 'sun';
        case '02d':
        case '02n':
            return 'cloud-sun';
        case '03d':
        case '03n':
            return 'cloud';
        case '04d':
        case '04n':
            return 'cloud-meatball';
        case '09d':
        case '09n':
            return 'cloud-showers-heavy';
        case '10d':
        case '10n':
            return 'cloud-sun-rain';
        case '11d':
        case '11n':
            return 'bolt';
        case '13d':
        case '13n':
            return 'snowflake';
        case '50d':
        case '50n':
            return 'smog';
        default:
            return 'question'; // Default icon for unknown conditions
    }
}
