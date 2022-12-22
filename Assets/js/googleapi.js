// Initialize and add the map
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname")
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';



let wakiwaSprings = {
  name: "wakiwaSprings", 
  location: "lat: 28.711243, lon: -81.463754",
}
let silverSprings = {
  name: "silverSprings", 
  location: "lat: 29.2165, lon: -82.0570",
}
let ginnieSprings = {
  name: "ginnieSprings", 
  location: "lat: 29.8343, lon: -82.7024",
}
let itchetuckneeSprings = {
  name: "itchetuckneeSprings", 
  location: "lat: 28.7022, lon: -82.9758",
}
    
let madisonSprings = {
  name: "madisonSprings", 
  location: "lat: 30.4813, lon: -83.2448",
}
let manateeSprings = {
  name: "manateeSprings", 
    location: "lat: 29.4975, lon: -82.9758",
}
var springNames = new Array(
  wakiwaSprings,
  silverSprings,
  ginnieSprings,
  itchetuckneeSprings,
  madisonSprings,
  manateeSprings
)

function addMarkers(map, springNames, labels) {
  for (var i = 0; i < 6; i++) {
    var marker = new google.maps.Marker({
      position: springNames[i][1],
      map: mapId,
      label: springNames[i]
    });
  }
}



window.onload = function() {
    initMap();
  };
  // Initialize the map
  function initMap() {
    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(28.711243, -81.463754)
    };
    // Create the map
    const map = new google.maps.Map(mapId, mapOptions);
    // Add a marker to the map at the specified coordinates
    const marker = new google.maps.Marker({
      position: {lat: 28.711243, lng: -81.463754},
      map: map
    });
    addMarkers();
  }