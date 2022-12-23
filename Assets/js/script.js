// Select DOM elements
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const filterOption = document.querySelector('#filterOption');
const ul = document.querySelector('ul');
const statePark = document.querySelector('#statePark');
const petFriendly = document.querySelector('#petFriendly');
const campingAllowed = document.querySelector('#campingAllowed');
const gatorDanger = document.querySelector('#gatorDanger');
const scubaDiving = document.querySelector('#scubaDiving');
const pricingFee = document.querySelector('#pricingFee');
const zipCode = document.querySelector('#zipCode');
const main = document.querySelector('main');
const springCards = document.querySelectorAll('.springcard');
const submit = document.querySelector('#searchBtn');

// Elements for the modal
const modal = document.getElementById("myModal");
const btnNew = document.getElementById("btnNew");
const close = document.getElementsByClassName("close")[0];
const newSpring = document.querySelector("#newSpring");
const springNameM = document.querySelector("#springnamem");
const descriptionM = document.querySelector("#descriptionm");
const campingM = document.getElementById("campingm");
const addressM = document.querySelector("#addressm");
const petFriendlyM = document.getElementById("petfriendlym");

let wekiwaSprings = 'Wekiwa'
let silverSprings = 'Silver'
let ginnieSprings ='Ginnie'
let itchetuckneeSprings = 'Itchentucknee'
let madisonSprings ='Madison'
let manateeSprings = 'Manatee'
let rainbowSprings = 'Rainbow'
let rockSpringsRun = 'RockSpring'
let blueSpring = 'BlueSpring'
let deLeonSprings = 'DeLeon'
let fanningSprings = 'Fanning'
let weekiWacheeSprings = 'Weeki'
let royalSprings = 'Royal'
let bobsRiverPlace = 'Bobs'

const stateParks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings, itchetuckneeSprings, madisonSprings, royalSprings, bobsRiverPlace];

// Get DOM elements


navigator.geolocation.getCurrentPosition(function(position) {

  let userLoc = {
     lat: position.coords.latitude,
     lon: position.coords.longitude 
  }
  console.log(userLoc.lat)
  console.log(userLoc.lon)
});





// Loop through each spring card and check if it meets the selected filter criteria
  // springCards.forEach(card => {
  //   const park = window[card.querySelector('h2').textContent.toLowerCase()];
  //   let showCard = true;

  //   if (statepark && !park.statepark) {
  //     showCard = false;
  //   }
  //   if (petFriendly && !park.petFriendly) {
  //     showCard = false;
  //   }
  //   if (campingAllowed && !park.campingAllowed) {
  //     showCard = false;
  //   }
  //   if (gatorDanger && !park.gatorDanger) {
  //     showCard = false;
  //   }
  //   if (scubaDiving && !park.scubaDiving) {
  //     showCard = false;
  //   }
  //   if (pricingFee && park.fees !== 'Free') {
  //     showCard = false;
  //   }
  //   if (zipCode && park.zipcode.toString().indexOf(zipCode) === -1) {
  //     showCard = false;
  //   }
  
  //   // Show or hide the card based on the filter criteria
  //   if (showCard) {
  //     card.style.display = 'block';
  //   }
  // });

  // statePark.checked;
  // petFriendly.checked;
  // campingAllowed.checked;
  // gatorDanger.checked;
  // scubaDiving.checked;
  // pricingFee.checked;
  // zipCode.value;
  

  // Loop through the spring cards
  // springCards.forEach(springCard => {
    // Check if the spring card matches the selected filter options
    // const matchesStatepark = !statepark || springCard.dataset.statepark === 'true';
    // const matchesPetFriendly = !petFriendly || springCard.dataset.petfriendly === 'true';
    // const matchesCampingAllowed = !campingAllowed || springCard.dataset.camping === 'true';
    // const matchesGatorDanger = !gatorDanger || springCard.dataset.gatordanger === 'true';
    // const matchesScubaDiving = !scubaDiving || springCard.dataset.scuba === 'true';
    // const matchesPricingFee = !pricingFee || springCard.dataset.fees === 'Free';
    // const matchesZipCode = !zipCode || springCard.dataset.zipcode === zipCode;

    // Show or hide the spring card based on whether it matches the selected filter options
    // if (matchesStatepark && matchesPetFriendly && matchesCampingAllowed && matchesGatorDanger && matchesScubaDiving && matchesPricingFee && matchesZipCode) {
    //   springCard.style.display = 'block';
    // } else {
    //   springCard.style.display = 'none';
    // }
  // });



// const filterOptionCheckboxes = document.querySelectorAll('input[type=checkbox]');
// const zipCodeInput = document.querySelector('#zipCodeInput');

// filterOptionCheckboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', filterParks);
// });

// zipCodeInput.addEventListener('input', filterParks);

// // What is #submit?
// document.querySelector('#submit').addEventListener('submit', 
// function(event) {
//   console.log(event);
// });


// // Initialize the filter with no options selected
// filterParks();

function generateSpringCard() {
  
}






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
//finds the users location


// ******************************************
// *******Modal listeners *******************
// ******************************************

// Add event listeners to open and close modal
btnNew.addEventListener("click", function() {
  modal.style.display = "block";
});
close.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

newSpring.addEventListener("click", function(event) {
  event.preventDefault;
 
  let camp = "";
  let pet = "'";
  let spring = springNameM.value;
  let desc = descriptionM.value;
  if (campingM.checked) {
    camp = "true";
  } else {camp = false};
  if (petFriendlyM.checked) {
    pet = "true"
  } else {pet = "false"};
  let address = addressM.value;

  let newspring = 'mailto:address@dmail.com?subject=Please add this new spring to the website&body=This would work awesome if we had a database we could write to.  THis request would be pending approval to be added by a site administrator.  But since we are only newbs, you get this webpage showing that we know how to grab the input from the form.  Spring Name: ' + spring + '     Description: ' + desc + '     Camping:  ' + camp + '     Pet Friendly: ' + pet + '     Address: ' + address;

  sessionStorage.setItem("newspring", JSON.stringify(newspring));
  document.location.replace("./newspring.html")
});












































  
