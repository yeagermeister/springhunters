const dropdownEl = document.querySelector("#dropdown");
let parknameEl = document.querySelector("#parkname");
let descriptionEl = document.querySelector("#description");
let distanceEl = document.querySelector("#distance");
let admissionEl = document.querySelector("#admission");
let petsEl = document.querySelector("#pets");
let stateparkEl = document.querySelector("#statepark");
let campingEl = document.querySelector("#camping");
let gatorEl = document.querySelector("#gator");
let scubaEl = document.querySelector("#scuba");
let ratingEl = document.querySelector("#rating");
let noteEl = document.querySelector("#notetext");




let park = "Wekiwa Springs State Park";

let dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bob's River Place"];

// weather API variables
let locationEl = document.querySelector('#parkname');
let location = locationEl.innerHTML;
storedParks = JSON.parse(sessionStorage.getItem(location));
let zipcode = storedParks.zipcode;



// Google Maps Variables
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname");
var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
var userCoords = JSON.parse(sessionStorage.getItem(`userLoc`));
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';
var parkLoc;
var map = mapId;
let zipCode;
let distance;
let marker;
var miles;

function init() {
  var userSelect = JSON.parse(sessionStorage.getItem(`shortName`))
  console.log(userSelect)
  
  for (let i = 0; i < storedParks.length; i++) {
    let shortName = storedParks[i].name.substring(0,4);
    
    if(userSelect === shortName){
    park=storedParks[i]
    console.log(park);
    populateParkInfo(park)
    console.log(shortName);
    }
    
    populateDropdown();
    initMap();
    getWeather();
  }
  
 };

// This will run on page load to populate the drop dow list
function populateDropdown() {
    for (let i = 0; i < dropdownList.length; i++) {
      let optionEl = document.createElement('option');
      optionEl.textContent = dropdownList[i];
      dropdownEl.appendChild(optionEl);
    }
};

function populateParkInfo(park) {
  ;
  parknameEl.textContent = park.name;
  descriptionEl.textContent = park.description;
  distanceEl.textContent = miles +"miles";
  admissionEl.textContent = park.fees;
  zipcode = park.zipcode
  if (park.pets) {
    petsEl.textContent = "Pet Friendly"
  } else (petsEl.textContent = "Pet's not allowed");
  if (park.statepark) {
    stateparkEl.textContent = "This is a state park"
  } else (stateparkEl.textContent = "This is not a state park");
  if (park.gatordanger) {
    gatorEl.textContent = "Beware of the gators"
  } else (gatorEl.textContent = "No Gator Danger");
  if (park.camping) {
    campingEl.textContent = "Camping is Allowed"
  } else (campingEl.textContent = "No Camping");
  if (park.scuba) {
    scubaEl.textContent = "Scuba Diving Allowed"
  } else (scubaEl.textContent = "No Scuba Diving");
  ;
};

function populatePersonalInfo(personalRating) {
  ratingEl.value = personalRating;
};

// Function for the star rating
$(document).ready(function(){
  // Check Radio-box
  $(".rating input:radio").attr("checked", false);

  $('.rating input').click(function () {
      $(".rating span").removeClass('checked');
      $(this).parent().addClass('checked');
  });

  $('input:radio').change(
    function(){
      var userRating = this.value;
      localStorage.setItem(park.name + " rating", userRating);
  }); 
});








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
// function updateWeather(newZipcode) {
//   sessionStorage.setItem('zipcode', newZipcode);
//   getWeather();

//   // Loop through the array of objects
//   for (var i = 0; i < storedParks.length; i++) {
//     // Check if the element's value matches the title of the current object
//     if (parkName.value == storedParks[i].name) {console.log(parkName.value, storedParks[i].name) 
//       // If the values match, retrieve the value property of the object
//       let parkLoc = storedParks[i].zipcode;
//       // You can now use the value variable in your code
//       return parkLoc
//     }}
// }


  // Loop through the array of objects
  for (var i = 0; i < storedParks.length; i++) {
    // Check if the element's value matches the title of the current object
    if (parkName.value == storedParks[i].name) {console.log(parkName.value, storedParks[i].name) 
      // If the values match, retrieve the value property of the object
      let parkLoc = storedParks[i].zipcode;
      // You can now use the value variable in your code
      
    }}


// Initialize and add the map
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname");
var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
//const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';
var parkLat;
var parkLng;
var map = mapId;


  // Initialize the map
  function initMap() {

// Loop through the array of objects
for (var i = 0; i < storedParks.length; i++) {
  // Check if the element's value matches the title of the current object
  if (parkName.innerHTML == storedParks[i].name) {
    // If the values match, retrieve the value property of the object
    var parkLat = storedParks[i].lat;
    var parkLng = storedParks[i].lng;
    // You can now use the value variable in your code
    
  }
}


    // Set up the map options

    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(parkLat, parkLng)
    };
    // Create the map
    const map = new google.maps.Map(mapId, mapOptions);
    // Add a marker to the map at the specified coordinates
    const marker = new google.maps.Marker({
      position: {lat: parkLat, lng: parkLng},
      map: map
    });
    var markerLoc = marker.getPosition();
    var userLoc = new google.maps.LatLng(userCoords.lat, userCoords.lon);

    
    // Calculate the distance between the user's location and the marker's location
    var distance = google.maps.geometry.spherical.computeDistanceBetween(userLoc, markerLoc);
    let miles = Math.ceil(distance / 1609.344); // distance in miles, rounded up to the nearest whole mile
    console.log(`Distance: ${miles} miles`); 


  };



// Click listeners
// Get the correct park array from session storage when the drop down list is used
$("#dropdown").on("change", function() {
  let value = dropdownEl.options[dropdownEl.selectedIndex].value;
  park = JSON.parse(sessionStorage.getItem(value));
  populateParkInfo(park);
  getWeather();
  initMap();
});


  

  init();
