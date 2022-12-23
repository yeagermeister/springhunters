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

  var storedParks = JSON.parse(sessionStorage.getItem(`parks`))

  let zipcode = storedParks.zipcode;



  // Send a GET request to the RapidAPI weather API
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipcode}`, options)
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

function updateWeather(newZipcode) {
  sessionStorage.setItem('zipcode', newZipcode);
  getWeather();

  console.log(storedParks);

  // Loop through the array of objects
  for (var i = 0; i < storedParks.length; i++) {
    // Check if the element's value matches the title of the current object
    if (parkName.value == storedParks[i].name) {console.log(parkName.value, storedParks[i].name) 
      // If the values match, retrieve the value property of the object
      let parkLoc = storedParks[i].zipcode;
      // You can now use the value variable in your code
      return parkLoc
    }}
}
