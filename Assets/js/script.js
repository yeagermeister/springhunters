// Select DOM elements
// const header = document.querySelector('header');
// const h1 = document.querySelector('h1');
// const filterOption = document.querySelector('#filterOption');
// const ul = document.querySelector('ul');
const stateParkEl = document.querySelector('#statePark');
const petFriendlyEl = document.querySelector('#petFriendly');
const campingAllowedEl = document.querySelector('#campingAllowed');
const gatorDangerEl = document.querySelector('#gatorDanger');
const scubaDivingEl = document.querySelector('#scubaDiving');
const pricingFeeEl = document.querySelector('#pricingFee');
const zipCodeEl = document.querySelector('#zipCode');
// const main = document.querySelector('main');
// const springCards = document.querySelectorAll('.springcard');
const submitEl = document.querySelector('#searchBtn');

const cardContainerEl = document.querySelector("#card-container");

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

// Define Springs
// These variables have to be declared with let because the distance and weather icon will be updated
var storedParks = JSON.parse(sessionStorage.getItem(`parks`))
let wekiwaSprings = {
    name: 'Wekiwa Springs State Park',
    description: 'Wekiwa Springs State Park is a 7,000-acre Florida State Park in Apopka, Florida. With emerald springs feeding the Wekiwa River and lush tropical hammocks, this unique park just minutes from downtown Orlando is perfect for observing abundant wildlife or cooling off on a summer day',
    imageUrl: './Assets/images/Wekiwa-Springs-State-Park-FL.jpg', 
    distance: '',
    weather: '',
    zipcode: 32712,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.711243,
    lng: -81.463754
};
  
let silverSprings = {
    name: 'Silver Springs State Park',
    description: 'The 4,000-acre Silver Springs State Park encompasses not only the springs, but the entire 5-mile Silver River and surrounding sandhill forest.',
    imageUrl: './Assets/images/Silver-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34488,
    fees: "$8/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: true,
    scuba: false,
    lat: 29.2165,
    lng: -82.0570
};
  
let rainbowSprings = {
    name: 'Rainbow Springs State Park',
    description: 'Rainbow Springs State Park is a Florida State Park located on the southwest side of Dunnellon, Florida. The park includes the Rainbow River, a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Rainbow-Springs-Park.jpeg',
    distance: '',
    weather: '',
    zipcode: 34432,
    fees: "$2/person",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 29.1023,
    lng: -82.4379
};
  
let rockSpringsRun = {
    name: 'Rock Springs Run State Reserve',
    description: 'Rock Springs Run State Reserve is a 6,000-acre Florida State Park located in Sorrento, Florida. The park is home to the largest spring on the Wekiva River, Rock Springs, which flows into the Wekiva River.',
    imageUrl: './Assets/images/Rock-Springs-Reserve.jpg',
    distance: '',
    weather: '',
    zipcode: 32776,
    fees: "$5/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 28.7950,
    lng: -81.4527
};
  
let ginnieSprings = {
    name: 'Ginnie Springs',
    description: 'Ginnie Springs is a privately owned recreational park located in High Springs, Florida. The park is popular for scuba diving, swimming, and snorkeling, and is home to several underwater caves.',
    imageUrl: './Assets/images/Ginnie-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32643,
    fees: "$3/person",
    pets: false,
    statepark: false,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 29.8343,
    lng: -82.7024
};
  
let blueSpring = {
    name: 'Blue Spring State Park',
    description: 'Blue Spring State Park is a Florida State Park located west of Orange City, Florida. The park is home to a first magnitude spring, which is the largest spring on the St. Johns River and a popular destination for swimming and manatee watching.',
    imageUrl: './Assets/images/Blue-Spring-State.jpg',
    distance: '',
    weather: '',
    zipcode: 32763,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.9480,
    lng: -81.3370
};
  
let deLeonSprings = {
    name: 'DeLeon Springs State Park',
    description: 'DeLeon Springs State Park is a Florida State Park located in DeLeon Springs, Florida. The park is home to DeLeon Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/DeLeon-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32130,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.1354,
    lng: -81.3621
};
  
let fanningSprings = {
    name: 'Fanning Springs State Park',
    description: 'Fanning Springs State Park is a Florida State Park located in Fanning Springs, Florida. The park is home to Fanning Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Fanning-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32693,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.5905,
    lng: -82.9325
};
  
let manateeSprings = {
    name: 'Manatee Springs State Park',
    description: 'Manatee Springs State Park is a Florida State Park located in Chiefland, Florida. The park is home to Manatee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Manatee-Spring-State.jpg',
    distance: '',
    weather: '',
    zipcode: 32626,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.4975,
    lng: -82.9758
};
  
let weekiWacheeSprings = {
    name: 'Weeki Wachee Springs State Park',
    description: 'Weeki Wachee Springs State Park is a Florida State Park located in Weeki Wachee, Florida. The park is home to Weeki Wachee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving. The park is also known for its live mermaid shows.',
    imageUrl: './Assets/images/Weeki-Wachee-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.5179,
    lng: -82.5747
};

let itchetuckneeSprings = {
    name: 'Ichetucknee Springs State Park',
    description: 'Green space with river tubing in the summer',
    imageUrl: './Assets/images/Ichetucknee-Blue-Hole.jpg',
    distance: '',
    weather: '',
    zipcode: 32038,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: false,
    gatordanger: false,
    scuba: true,
    lat: 29.9911,
    lng: -82.7590
 };

let madisonSprings = {
    name: 'Madison Springs',
    description: 'State park in North Florida with a spring.',
    imageUrl: './Assets/images/Madison-Blue-Spring.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: false,
    gatordanger: false,
    scuba: true,
    lat: 30.4813,
    lng: -83.2448
 };

 let royalSprings = {
    name: 'Royal Springs',
    description: 'Spring feeds the Suwanee river.  There is a 20ft. high diving platform above the spring. Picnic area in the park.  A couple rope swings along the river.',
    imageUrl: './Assets/images/Royal-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "free",
    pets: false,
    statepark: false,
    camping: false,
    gatordanger: false,
    scuba: false,
    lat: 30.0842,
    lng: -83.0747
 };

 let bobsRiverPlace = {
    name: "Bobs River Place",
    description: "Bob's is a swimming hole on the Suwanee river.  It has slides, platforms and swings, among other activities.  Bob recently passed away, and the family is trying to get the place up and running for the 2023 season",
    imageUrl: './Assets/images/Bobs-River-Place.jpg',
    distance: '',
    weather: '',
    zipcode: 32008,
    fees: "free",
    pets: false,
    statepark: false,
    camping: false,
    gatordanger: false,
    scuba: false,
    lat: 30.0842,
    lng: -83.0747
 };


let parks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings, itchetuckneeSprings, madisonSprings, royalSprings, bobsRiverPlace];
let springList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bobs River Place"];

// Which API is this for?
const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';

 function init() {
    // Send all park info to session storage so they can be read by springs.html
    sessionStorage.setItem(`parks`, JSON.stringify(parks));
    for (let i = 0; i < parks.length; i++){
        sessionStorage.setItem(parks[i].name, JSON.stringify(parks[i]))
    }
    // generate the spring cards on index.html 
    populateCards();
 };

function populateCards() {
  for (let i = 0; i < parks.length; i++) {
    let storedParks = parks[i];
   
    let cardEl = document.createElement('div');
    cardEl.classList = "springcard bg-light";
    let shortName = parks[i].name.substring(0,4);
    cardEl.setAttribute("id", shortName)
    // cardEl.setAttribute("fees", storedParks.fees)
    // cardEl.setAttribute("pets", storedParks.pets)
    // cardEl.setAttribute("statepark", storedParks.statepark)
    // cardEl.setAttribute("camping", storedParks.camping)
    // cardEl.setAttribute("gator", storedParks.gatordanger)
    // cardEl.setAttribute("scuba", storedParks.scuba)

    let headingEl = document.createElement('h2');
    headingEl.classList = "text-primary"
    headingEl.textContent = storedParks.name

    let imgEl = document.createElement('img');
    imgEl.classList = "card-image";
    imgEl.setAttribute("src", storedParks.imageUrl)
    imgEl.setAttribute("alt", "image of a spring")

    let paraEl = document.createElement('p');
    paraEl.textContent = storedParks.description;

    let distanceEl = document.createElement('p');
    distanceEl.textContent = " miles away."

    let distanceSpanEl = document.createElement('span');
    distanceSpanEl.classList = "distance-span";
    distanceSpanEl.setAttribute("id", "distance-" + i);

    let spanEl = document.createElement('span');
    spanEl.classList = "wicon"
    spanEl.setAttribute("id", "weather-" + i)

    cardContainerEl.appendChild(cardEl);
    cardEl.appendChild(headingEl);
    cardEl.appendChild(imgEl);
    cardEl.appendChild(paraEl);
    cardEl.appendChild(distanceEl);
    distanceEl.appendChild(distanceSpanEl);
    distanceEl.appendChild(spanEl);
  }
};

// This needs placed inside a function
navigator.geolocation.getCurrentPosition(function(position) {

  let userLoc = {
     lat: position.coords.latitude,
     lon: position.coords.longitude 
  }
  console.log(userLoc.lat)
  console.log(userLoc.lon)
});

function filterResults(userSP, userPet, userCamp, userGator, userScuba, userFee, zipCode) {
  
    for (let i = 0; i < parks.length; i++) {
      let storedParks = parks[i];
      let shortName = "#" + parks[i].name.substring(0,4);
      let cardEl = document.querySelector(shortName);
        // if ((userSP === true) && (storedParks.statepark === true)) {
        //     cardEl.classList = "springcard bg-light";
        // } else {cardEl.classList = "display-none"};

        // if (userPet === false && storedParks.pets === false) {
        //   cardEl.classList = "springcard bg-light";
        // }else {cardEl.classList = "display-none"};

        // if ((userCamp === true && storedParks.camping === true)) {
        //   cardEl.classList = "springcard bg-light";
        // }else {cardEl.classList = "display-none"};
        // if (userGator && storedParks.gatordanger) {
        //   cardEl.classList = "springcard bg-light";
        // }else {cardEl.classList = "display-none"};
        // if (userScuba && storedParks.scuba) {
        //   cardEl.classList = "springcard bg-light";
        // }else {cardEl.classList = "display-none"};
        // if ((userPet === true) && (storedParks.pets == "free")) {
        //   cardEl.classList = "springcard bg-light";
        // }else {cardEl.classList = "display-none"};
    }
};


// ******************************************
// *******Search listener *******************
// ******************************************

submitEl.addEventListener("click", function(event) {
  event.preventDefault;

  let userSP = stateParkEl.checked;
  let userPet = petFriendlyEl.checked;
  let userCamp = campingAllowedEl.checked;
  let userGator = gatorDangerEl.checked;
  let userScuba = scubaDivingEl.checked;
  let userFee = pricingFeeEl.checked;
  let zipCode = zipCodeEl.value.trim();
  filterResults(userSP, userPet, userCamp, userGator, userScuba, userFee, zipCode)
});

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

// ******************************************
// ********** End of listeners **************
// ******************************************

init();


