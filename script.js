document.getElementById('getWeatherBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    if (apiKey === 'YOUR_API_KEY') {
        alert('Please replace "YOUR_API_KEY" with your actual OpenWeatherMap API key.');
        return;
    }

    const weatherDiv = document.getElementById('weatherData');
    weatherDiv.innerHTML = 'Fetching weather data...';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].main;
            weatherDiv.innerHTML = `Current weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            weatherDiv.innerHTML = `Could not fetch weather data. Please check the console for errors.`;
        });
}