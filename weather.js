// weather.js

function getWeather() {
    // Replace with the URL of the weather API
    const apiUrl = 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Handle weather data and display it
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherDetails = document.querySelector('.weather-details');
    weatherDetails.innerHTML = ''; // Clear previous data

    if (data.api_info.status === 'healthy' && data.items.length > 0) {
        const timestamp = data.items[0].timestamp;
        const forecast = data.items[0].general.forecast;
        const temperatureLow = data.items[0].general.temperature.low;
        const temperatureHigh = data.items[0].general.temperature.high;
        const humidityLow = data.items[0].general.relative_humidity.low;
        const humidityHigh = data.items[0].general.relative_humidity.high;
        const windSpeedLow = data.items[0].general.wind.speed.low;
        const windSpeedHigh = data.items[0].general.wind.speed.high;
        const windDirection = data.items[0].general.wind.direction;

        const weatherInfo = `
            <h2>Weather Forecast</h2>
            <p>Timestamp: ${timestamp}</p>
            <p>Forecast: ${forecast}</p>
            <p>Temperature Range: ${temperatureLow}°C - ${temperatureHigh}°C</p>
            <p>Humidity Range: ${humidityLow}% - ${humidityHigh}%</p>
            <p>Wind Speed Range: ${windSpeedLow} - ${windSpeedHigh} km/h</p>
            <p>Wind Direction: ${windDirection}</p>
            <!-- Add more weather data fields here -->
        `;

        weatherDetails.innerHTML = weatherInfo;
    } else {
        weatherDetails.textContent = 'No weather data available at the moment.';
    }
}

// Call getWeather() function to fetch and display weather data
getWeather();
