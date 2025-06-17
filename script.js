document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Get Current Weather";
  document.body.appendChild(button);

  const weatherDiv = document.createElement("div");
  weatherDiv.id = "weatherData";
  document.body.appendChild(weatherDiv);

  button.addEventListener("click", () => {
    const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0].main;
        weatherDiv.innerText = `Current weather in ${city}: ${weather}`;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        weatherDiv.innerText = "Error fetching weather data.";
      });
  });
});
