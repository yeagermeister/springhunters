function getWeather() {
  const API_KEY = '4a9c9446f7msh1bdc5860de01184p135179jsne7c04d560051';
  const API_HOST = 'weatherapi-com.p.rapidapi.com';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  const city = 'l';  // Replace with the city you want to search for

  // Send a GET request to the RapidAPI weather API
  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=10461&days=3', options)
    .then(response => response.json())
    .then(data => {
      // Extract the relevant data from the response
      const cityName = data.location.name;
      const temperature = data.current.temp_f;
      const condition = data.current.condition.text;
      const iconUrl = data.current.condition.icon;

      // Update the HTML elements on the page
      document.getElementById('city').innerHTML = cityName;
      document.getElementById('temperature').innerHTML = `${temperature}°F`;
      document.getElementById('condition').innerHTML = condition;
      document.getElementById('icon').src = iconUrl;
    })
    .catch(err => console.error(err));
}

// Call the getWeather function when the page loads
window.onload = getWeather;
