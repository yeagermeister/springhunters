// Initialize and add the map
var mapId = document.getElementById("map");
const latitude = 28.6568;
const longitude = -81.2436;
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';




//var wakiwaSprings = new Array(
  //  lat = "28.7022",
    //lon = "-81.4188",
//)
//var silverSprings = new Array(
//     lat = "29.2165",
//     lon = "-82.0570",
// )
// var ginnieSprings = new Array(
//     lat = "29.8343",
//     lon = "-82.7024",
// )
// var itchetuckneeSprings = new Array(
//     lat = "28.7022",
//     lon = "-82.7618",
// )
// var madisonSprings = new Array(
//     lat = "30.4813",
//     lon = "-83.2448",
// )
// var manateeSprings = new Array(
//     lat = "29.4975",
//     lon = "-82.9758",
// )



window.onload = function() {
    initMap();
  };
  // Initialize the map
  function initMap() {
    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(28.7022, 81.4188)
    };
    // Create the map
    const map = new google.maps.Map(mapId, mapOptions);
    // Add a marker to the map at the specified coordinates
    const marker = new google.maps.Marker({
      position: {lat: 28.7022, lng: 81.4188},
      map: map
    });
  }