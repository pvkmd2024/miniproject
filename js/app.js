function getWeather(city, apikey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayWeatherCard(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById(
        "weather-data"
      ).innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    });
}

function displayWeatherCard(data) {
  const weatherContainer = document.getElementById("weather-data");

  const weatherCardHTML = `
<div class="weather-card">
            <h2>${data.name}</h2>
            <div class="weather-info">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                <p class="temp">${data.main.temp} °C</p>
                <p class="description">${data.weather[0].description}</p>
            </div>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;

  weatherContainer.innerHTML = weatherCardHTML;
}

document.getElementById("search-btn").addEventListener("click", () => {
  const cityInput = document.getElementById("city-input").value.trim();
  const apiKey = "your-api-key-here";

  if (cityInput) {
    getWeather(cityInput, apiKey);
  } else {
    document.getElementById("weather-data").innerHTML =
      "<p>Please enter a city name.</p>";
  }
});
