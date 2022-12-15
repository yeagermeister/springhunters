// function initMap(){
//     {
//         //your prime gator location
//         var lakeJesup = {lat: 28.7302, lng: 81.2023 }
//         // the map, centered on everyones favorite lake
//         let map = new google.maps.Map(document.getElementById("map"),{
//             zoom: 8,
//             center: lakeJesup,
        
//         })
//     }
// }

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

// import { Loader } from '@googlemaps/js-api-loader';

// const loader = new Loader({
//   apiKey: "AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: 0,
//     lng: 0
//   },
//   zoom: 4
// };