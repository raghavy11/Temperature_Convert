// Get DOM elements
const temperatureInput = document.getElementById("temperature");
const unitSelector = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Function to handle temperature conversion
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelector.value;

  if (isNaN(temperature)) {
    resultDiv.innerText = "Please enter a valid number.";
    return;
  }

  let convertedTemp = 0;
  let convertedUnit = "";

  switch (unit) {
    case "celsius":
      // Convert Celsius to Fahrenheit and Kelvin
      convertedTemp = {
        fahrenheit: (temperature * 9) / 5 + 32,
        kelvin: temperature + 273.15,
      };
      resultDiv.innerHTML = `
        Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)}°F<br>
        Kelvin: ${convertedTemp.kelvin.toFixed(2)}K
      `;
      return;

    case "fahrenheit":
      // Convert Fahrenheit to Celsius and Kelvin
      convertedTemp = {
        celsius: ((temperature - 32) * 5) / 9,
        kelvin: ((temperature - 32) * 5) / 9 + 273.15,
      };
      resultDiv.innerHTML = `
        Celsius: ${convertedTemp.celsius.toFixed(2)}°C<br>
        Kelvin: ${convertedTemp.kelvin.toFixed(2)}K
      `;
      return;

    case "kelvin":
      // Convert Kelvin to Celsius and Fahrenheit
      convertedTemp = {
        celsius: temperature - 273.15,
        fahrenheit: ((temperature - 273.15) * 9) / 5 + 32,
      };
      resultDiv.innerHTML = `
        Celsius: ${convertedTemp.celsius.toFixed(2)}°C<br>
        Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)}°F
      `;
      return;

    default:
      resultDiv.innerText = "Invalid unit selected.";
      return;
  }
}

// Add event listener to the button
convertButton.addEventListener("click", convertTemperature);
