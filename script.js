async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02");
  const data = await response.json();
  const weather = data.weather[0].main;
  document.getElementById("weatherData").innerText = `Current weather in London: ${weather}`;
}
