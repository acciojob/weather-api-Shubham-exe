async function getWeather() {
  const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key
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
    const weatherDescription = data.weather[0].main;

    document.getElementById("weatherData").innerText =
      `Current weather in ${city}: ${weatherDescription}`;
  } catch (error) {
    document.getElementById("weatherData").innerText =
      "Error fetching weather data.";
    console.error(error);
  }
}
