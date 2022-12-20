document.addEventListener("DOMContentLoaded", function() {
  const searchForms = document.querySelectorAll("#search-form");
  searchForms.forEach(function(searchForm) {
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const searchInput = searchForm.querySelector("#search-input");
      const searchTerm = searchInput.value;

      // Perform search and get search results
      const searchResults = performSearch(searchTerm);

      // Clear previous search results
      searchForm.nextElementSibling.innerHTML = "";

      // Display search results
      searchResults.forEach(function(result) {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = result;
        searchForm.nextElementSibling.appendChild(resultElement);
      });
    });
  });
});
function performSearch(searchTerm) {
  // Replace this with our own search function that returns an array of search results after we create them
  return [`Result 1 for "${searchTerm}"`, `Result 2 for "${searchTerm}"`];
}
//Code above is for index.html//

// Replace YOUR_API_KEY with your actual API key
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';











































// Replace latitude and longitude with the coordinates of the location you want to show on the map
const latitude = 37.4224764;
const longitude = -122.0842499;

function initMap() {
  // Create a new map and center it on the specified coordinates
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: latitude, lng: longitude}
  });

  // Add a marker to the map at the specified coordinates
  const marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
  });
}

// Load the Google Maps API with our specified API key
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk&callback=initMap`;
document.head.appendChild(script);



