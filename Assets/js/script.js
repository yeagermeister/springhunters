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
const dropdownEl = document.querySelector('#dropdown')

const parks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings, itchetuckneeSprings, madisonSprings, royalSprings, bobsRiverPlace];
const dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Srings State Park", "Weeki Wachee Springs State Park", "Royal Springs", "Bob's River Place"];

// Get DOM elements
const modal = document.getElementById("myModal");
const btnNew = document.getElementById("btnNew");
const close = document.getElementsByClassName("close")[0];

navigator.geolocation.getCurrentPosition(function(position) {

  let userLoc = {
     lat: position.coords.latitude,
     lon: position.coords.longitude 
  }
  console.log(userLoc.lat)
  console.log(userLoc.lon)
});

// // Add event listeners to open and close modal
// btnNew.addEventListener("click", function() {
//   modal.style.display = "block";
// });
// close.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// // Close modal when user clicks outside of it
// window.addEventListener("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// Add event listener to dropdown menu
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function() {
  // Handle selection of dropdown menu options
  const selectedOption = dropdown.value;
  if (selectedOption === "CSS SELECT arrow (round)") {
    // Add round CSS to dropdown menu
    dropdown.classList.add("round");
  } else if (selectedOption === "No external background image") {
    // Remove external background image from dropdown menu
    dropdown.style.backgroundImage = "none";
  } else if (selectedOption === "No wrapper") {
    // Remove wrapper element from dropdown menu
    dropdown.parentNode.removeChild(dropdown);
  }
});

console.log(dropdownList.length);

function populateDropdown() {
  for (let i = 1; i < dropdownList.length; i++) {
    var optionEl = document.createElement('option');
    console.log(optionEl);
    console.log(dropdownList[i]);
    optionEl.setAttribute('id', 'option-' + i);
    optionEl.textContent = dropdownList[i];
    dropdownEl.appendChild(optionEl);
  }
} ;


function filterParks() {
  // Get the selected filter options

  // const statepark = document.querySelector('#statePark').checked;
  // const petFriendly = document.querySelector('#petFriendly').checked;
  // const campingAllowed = document.querySelector('#campingAllowed').checked;
  // const gatorDanger = document.querySelector('#gatorDanger').checked;
  // const scubaDiving = document.querySelector('#scubaDiving').checked;
  // const pricingFee = document.querySelector('#pricingFee').checked;
  // const zipCode = document.querySelector('#zipCode').value;

  // Get all the spring cards
 

  // Loop through each spring card and check if it meets the selected filter criteria
  springCards.forEach(card => {
    const park = window[card.querySelector('h2').textContent.toLowerCase()];
    let showCard = true;

    if (statepark && !park.statepark) {
      showCard = false;
    }
    if (petFriendly && !park.petFriendly) {
      showCard = false;
    }
    if (campingAllowed && !park.campingAllowed) {
      showCard = false;
    }
    if (gatorDanger && !park.gatorDanger) {
      showCard = false;
    }
    if (scubaDiving && !park.scubaDiving) {
      showCard = false;
    }
    if (pricingFee && park.fees !== 'Free') {
      showCard = false;
    }
    if (zipCode && park.zipcode.toString().indexOf(zipCode) === -1) {
      showCard = false;
    }
  
    // Show or hide the card based on the filter criteria
    if (showCard) {
      card.style.display = 'block';
    }
  });

  statePark.checked;
  petFriendly.checked;
  campingAllowed.checked;
  gatorDanger.checked;
  scubaDiving.checked;
  pricingFee.checked;
  zipCode.value;
  

  // Loop through the spring cards
  springCards.forEach(springCard => {
    // Check if the spring card matches the selected filter options
    const matchesStatepark = !statepark || springCard.dataset.statepark === 'true';
    const matchesPetFriendly = !petFriendly || springCard.dataset.petfriendly === 'true';
    const matchesCampingAllowed = !campingAllowed || springCard.dataset.camping === 'true';
    const matchesGatorDanger = !gatorDanger || springCard.dataset.gatordanger === 'true';
    const matchesScubaDiving = !scubaDiving || springCard.dataset.scuba === 'true';
    const matchesPricingFee = !pricingFee || springCard.dataset.fees === 'Free';
    const matchesZipCode = !zipCode || springCard.dataset.zipcode === zipCode;

    // Show or hide the spring card based on whether it matches the selected filter options
    if (matchesStatepark && matchesPetFriendly && matchesCampingAllowed && matchesGatorDanger && matchesScubaDiving && matchesPricingFee && matchesZipCode) {
      springCard.style.display = 'block';
    } else {
      springCard.style.display = 'none';
    }
  });
}

// document.querySelector('#statePark').addEventListener('change', filterParks);
// document.querySelector('#petFriendly').addEventListener('change', filterParks);
// document.querySelector('#campingAllowed').addEventListener('change', filterParks);
// document.querySelector('#gatorDanger').addEventListener('change', filterParks);
// document.querySelector('#scubaDiving').addEventListener('change', filterParks);
// document.querySelector('#pricingFee').addEventListener('change', filterParks);
// document.querySelector('#zipCode').addEventListener('input', filterParks);


const filterOptionCheckboxes = document.querySelectorAll('input[type=checkbox]');
const zipCodeInput = document.querySelector('#zipCodeInput');

filterOptionCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterParks);
});

zipCodeInput.addEventListener('input', filterParks);


document.querySelector('#parkName').addEventListener('change', filterParks);
document.querySelector('#petFriendly').addEventListener('change', filterParks);
document.querySelector('#campingAllowed').addEventListener('change', filterParks);
document.querySelector('#gatorDanger').addEventListener('change', filterParks);
document.querySelector('#scubaDiving').addEventListener('change', filterParks);
document.querySelector('#pricingFee').addEventListener('change', filterParks);
document.querySelector('#zipCode').addEventListener('input', filterParks);

// Initialize the filter with no options selected
filterParks();








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













































  
