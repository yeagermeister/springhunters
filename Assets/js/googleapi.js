// Initialize and add the map
var mapId = document.getElementById("map");
const latitude = 28.6568;
const longitude = -81.2436;
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';
// function initMap() {
    
//     var map = new google.maps.Map(mapId, {
//   center: { lat: "-34.397", lng:" 150.644" },
//   zoom: 8,
  
// });
// // console.log(mapId)
// // console.log(google)
// // console.log(google.maps)
// // console.log(google.maps.Map)
// }
  
// window.onload = function() {
//     initMap();
// // window.onload = function() {
//     const map = new google.maps.Map(mapId, mapOptions);
//   }

window.onload = function() {
    initMap();
  };
  // Initialize the map
  function initMap() {
    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(latitude, longitude)
    };
    // Create the map
    const map = new google.maps.Map(mapId, mapOptions);
    // Add a marker to the map at the specified coordinates
    const marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      map: map
    });
  }
  



























//  window.onload = function() {initMap};
//   <script async
//     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap">
// </script>


  


// // Replace latitude and longitude with the coordinates of the location you want to show on the map
// const latitude = 37.4224764;
// const longitude = -122.0842499;

// function initMap() {
//   // Create a new map and center it on the specified coordinates
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: latitude, lng: longitude}
//   });

//   // Add a marker to the map at the specified coordinates
//   const marker = new google.maps.Marker({
//     position: {lat: latitude, lng: longitude},
//     map: map
//   });
// }

// // Load the Google Maps API with the specified API key
// const script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk&callback=initMap`;
// document.head.appendChild(script);


// // Initialize the map when the page is loaded
// window.onload = function() {
//     initMap();
//   };
  
//   // Initialize the map
//   function initMap() {
//     // Set up the map options
//     const mapOptions = {
//       zoom: 10,
//       center: new google.maps.LatLng(28.5928, -81.3083)
//     };
  
//     // Create the map
//     const map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   }
// //test
