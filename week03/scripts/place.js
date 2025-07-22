document.addEventListener("DOMContentLoaded", function () {
  // Set current year and last modified date
  const yearEl = document.getElementById("year");
  const modifiedEl = document.getElementById("lastModified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (modifiedEl) {
    modifiedEl.textContent = document.lastModified;
  }

  // Weather API settings
  const apiKey = "ef205c745a84e77b79bdfc825f5486fe";
  const city = "Nairobi";
  const country = "KE";
  const units = "metric"; // Celsius

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const tempC = data.main.temp;
      const windKmh = data.wind.speed * 3.6; // Convert m/s to km/h

      const tempEl = document.getElementById("temperature");
      const windEl = document.getElementById("windSpeed");
      const chillEl = document.getElementById("windChill");

      if (tempEl) tempEl.textContent = `${tempC.toFixed(1)} °C`;
      if (windEl) windEl.textContent = `${windKmh.toFixed(1)} km/h`;

      // Calculate wind chill if applicable
      if (tempC <= 10 && windKmh > 4.8) {
        const tempF = (tempC * 9) / 5 + 32;
        const windMph = windKmh / 1.609;

        const windChillF =
          35.74 +
          0.6215 * tempF -
          35.75 * Math.pow(windMph, 0.16) +
          0.4275 * tempF * Math.pow(windMph, 0.16);

        const windChillC = ((windChillF - 32) * 5) / 9;

        if (chillEl) chillEl.textContent = `${windChillC.toFixed(1)} °C`;
      } else {
        if (chillEl) chillEl.textContent = "N/A";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      const tempEl = document.getElementById("temperature");
      const windEl = document.getElementById("windSpeed");
      const chillEl = document.getElementById("windChill");

      if (tempEl) tempEl.textContent = "Error";
      if (windEl) windEl.textContent = "Error";
      if (chillEl) chillEl.textContent = "N/A";

      document.getElementById('lastModified').textContent = document.lastModified;

    });
});
