let dropdownEl = document.querySelector("#dropdown");
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
let noteEl = document.querySelector("#note");

let dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Srings State Park", "Weeki Wachee Springs State Park", "Royal Springs", "Bob's River Place"];


// This will run on page load to populate the drop dow list
function populateDropdown() {
    for (let i = 1; i < dropdownList.length; i++) {
      let optionEl = document.createElement('option');
      // we may not need these next 2 lines
      optionEl.setAttribute('id', 'option-' + i);
      optionEl.setAttribute('index', i);
      optionEl.textContent = dropdownList[i];
      dropdownEl.appendChild(optionEl);
    }
};

function populateParkInfo(park) {
  console.log(park.name);
  parknameEl.textContent = park.name;
  descriptionEl.textContent = park.description;
  distanceEl.textContent = "miles";
  admissionEl.textContent = park.fees;
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

  // Need to implement local storage for these to work
  // ratingEl.textContent = 
  // noteEl.textContent = 
};


// Get the correct park array from session storage when the drop down list is used
$("#dropdown").on("change", function() {
  let value = dropdownEl.options[dropdownEl.selectedIndex].value;
  let park = JSON.parse(sessionStorage.getItem(value));
  populateParkInfo(park);
});

populateDropdown();

