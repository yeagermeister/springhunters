
// Replace YOUR_API_KEY with your actual API key
// *****************************  Change this to GOOGLE_API_KEY ******************
// **********   We wil have 2 other API keys to define ***************************
// ******************************************************************************* 
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

// Load the Google Maps API with the specified API key
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk&callback=initMap`;
document.head.appendChild(script);


// Initialize the map when the page is loaded
window.onload = function() {
    initMap();
  };
  
  // Initialize the map
  function initMap() {
    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(28.5928, -81.3083)
    };
  
    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
//test

