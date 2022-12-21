// Select DOM elements
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const filterOption = document.querySelector('#filterOption');
const ul = document.querySelector('ul');
const parkName = document.querySelector('#parkName');
const petFriendly = document.querySelector('#petFriendly');
const campingAllowed = document.querySelector('#campingAllowed');
const gatorDanger = document.querySelector('#gatorDanger');
const scubaDiving = document.querySelector('#scubaDiving');
const pricingFee = document.querySelector('#pricingFee');
const zipCode = document.querySelector('#zipCode');
const main = document.querySelector('main');
const springCards = document.querySelectorAll('.springcard');

// Define parks
const wekiwaSprings = {
  name: 'Wekiwa Springs State Park',
  description: 'Wekiwa Springs State Park is a 7,000-acre Florida State Park in Apopka, Florida. With emerald springs feeding the Wekiwa River and lush tropical hammocks, this unique park just minutes from downtown Orlando is perfect for observing abundant wildlife or cooling off on a summer day',
  imageUrl: './Assets/images/Wekiwa-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
  zipcode: 32712,
  fees: "6$/car",
  statepark: true,
  camping: true,
  gatordanger: false,
  scuba: false,
  lat: 28.7022,
  lon:81.4188
};

const silverSprings = {
  name: 'Silver Springs State Park',
  description: 'The 4,000-acre Silver Springs State Park encompasses not only the springs, but the entire 5-mile Silver River and surrounding sandhill forest.',
  imageUrl: './Assets/images/Silver-springs-bill-belleville-credit.jpg',
  distance: '',
  weather: '',
};

const rainbowSprings = {
  name: 'Rainbow Springs State Park',
  description: 'Rainbow Springs State Park is a Florida State Park located on the southwest side of Dunnellon, Florida. The park includes the Rainbow River, a popular destination for swimming, snorkeling, and scuba diving.',
  imageUrl: './Assets/images/Rainbow-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const rockSpringsRun = {
  name: 'Rock Springs Run State Reserve',
  description: 'Rock Springs Run State Reserve is a 6,000-acre Florida State Park located in Sorrento, Florida. The park is home to the largest spring on the Wekiva River, Rock Springs, which flows into the Wekiva River.',
  imageUrl: './Assets/images/Rock-Springs-Run-State-Reserve-FL.jpg',
  distance: '',
  weather: '',
};

const ginnieSprings = {
  name: 'Ginnie Springs',
  description: 'Ginnie Springs is a privately owned recreational park located in High Springs, Florida. The park is popular for scuba diving, swimming, and snorkeling, and is home to several underwater caves.',
  imageUrl: './Assets/images/Ginnie-Springs-FL.jpg',
  distance: '',
  weather: '',
};

const blueSpring = {
  name: 'Blue Spring State Park',
  description: 'Blue Spring State Park is a Florida State Park located west of Orange City, Florida. The park is home to a first magnitude spring, which is the largest spring on the St. Johns River and a popular destination for swimming and manatee watching.',
  imageUrl: './Assets/images/Blue-Spring-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const deLeonSprings = {
  name: 'DeLeon Springs State Park',
  description: 'DeLeon Springs State Park is a Florida State Park located in DeLeon Springs, Florida. The park is home to DeLeon Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
  imageUrl: './Assets/images/DeLeon-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const fanningSprings = {
  name: 'Fanning Springs State Park',
  description: 'Fanning Springs State Park is a Florida State Park located in Fanning Springs, Florida. The park is home to Fanning Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
  imageUrl: './Assets/images/Fanning-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const manateeSprings = {
  name: 'Manatee Springs State Park',
  description: 'Manatee Springs State Park is a Florida State Park located in Chiefland, Florida. The park is home to Manatee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
  imageUrl: './Assets/images/Manatee-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const weekiWacheeSprings = {
  name: 'Weeki Wachee Springs State Park',
  description: 'Weeki Wachee Springs State Park is a Florida State Park located in Weeki Wachee, Florida. The park is home to Weeki Wachee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving. The park is also known for its live mermaid shows.',
  imageUrl: './Assets/images/Weeki-Wachee-Springs-State-Park-FL.jpg',
  distance: '',
  weather: '',
};

const parks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings];

// Get DOM elements
const modal = document.getElementById("myModal");
const btnNew = document.getElementById("btnNew");
const close = document.getElementsByClassName("close")[0];

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
navigator.geolocation.getCurrentPosition(function(position) {

  let userLoc = {
     lat: position.coords.latitude,
     lon: position.coords.longitude 
  }
  
});















































