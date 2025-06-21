async function getWeather() {
  const apiKey = "YOUR_API_KEY";
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Weather data fetch failed");
    }

    const data = await response.json();
    const weatherMain = data.weather[0].main;
    const output = `Current weather in London: ${weatherMain}`;
    document.getElementById("weatherData").innerText = output;

  } catch (error) {
    document.getElementById("weatherData").innerText = "Error fetching weather data.";
  }
}
