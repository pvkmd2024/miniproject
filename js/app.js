function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "e0898e3b7845a8027172dc458b597ebe";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // To fetch weather data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // To Display the fetched weather data
      document.getElementById(
        "cityName"
      ).innerText = `Weather in ${data.name}, ${data.sys.country}`;
      document.getElementById(
        "temp"
      ).innerText = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "humidity"
      ).innerText = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "windSpeed"
      ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch((error) => {
      // To handle any errors during the fetch process
      console.error("Error fetching the weather data:", error);
      alert("City not found. Please try again.");
    });
}

// Function to reset the input and weather display
function reset() {
  document.getElementById("cityInput").value = "";
  document.getElementById("cityName").innerText = "";
  document.getElementById("temp").innerText = "";
  document.getElementById("humidity").innerText = "";
  document.getElementById("windSpeed").innerText = "";
}
