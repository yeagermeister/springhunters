var dropdownEl = document.querySelector("#dropdown");
var parknameEl = document.querySelector("#picture");
var descriptionEl = document.querySelector("#picture");
var distanceEl = document.querySelector("#picture");
var admissionEl = document.querySelector("#picture");
var petsEl = document.querySelector("#picture");
var stateparkEl = document.querySelector("#picture");
var gatorEl = document.querySelector("#picture");
var scubaEl = document.querySelector("#picture");
var ratingEl = document.querySelector("#picture");
var noteEl = document.querySelector("#picture");

var dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Srings State Park", "Weeki Wachee Springs State Park", "Royal Springs", "Bob's River Place"];

function init(){
    populateDropdown();
};

function populateDropdown() {
    for (let i = 1; i < dropdownList.length; i++) {
      var optionEl = document.createElement('option');
      optionEl.setAttribute('id', 'option-' + i);
      optionEl.setAttribute('index', i);
      optionEl.textContent = dropdownList[i];
      dropdownEl.appendChild(optionEl);
    }
};

dropdownEl.addEventListener("click", function(event) {
  // var element = event.target;

  var select = document.getElementById("dropdown");
  var value = select.options[select.selectedIndex].value;
  console.log(value)
  const found = dropdownList.findIndex(element => element = value)
  console.log(found)

});

init();

