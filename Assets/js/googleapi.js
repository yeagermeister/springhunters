// Initialize and add the map
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname")
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';



let wakiwaSprings = {
   lat: "28.711243",
    lon: "-81.463754",
}
let silverSprings = {
    lat: "29.2165",
    lon: "-82.0570",
}
let ginnieSprings = {
    lat: "29.8343",
    lon: "-82.7024",
}
let itchetuckneeSprings = {
    lat: "28.7022",
    lon: "-82.7618",
}
let madisonSprings = {
    lat: "30.4813",
    lon: "-83.2448",
}
let manateeSprings = {
    lat: "29.4975",
    lon: "-82.9758",
}
var springnames = new Array(
  wakiwaSprings,
  silverSprings,
  ginnieSprings,
  itchetuckneeSprings,
  madisonSprings,
  manateeSprings
)


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
  }