var dropdownEl = document.querySelector("#dropdown");

var dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Srings State Park", "Weeki Wachee Springs State Park", "Royal Springs", "Bob's River Place"];

function init(){
    populateDropdown();
};

function populateDropdown() {
    for (let i = 1; i < dropdownList.length; i++) {
      var optionEl = document.createElement('option');
      console.log(optionEl);
      console.log(dropdownList[i]);
      optionEl.setAttribute('id', 'option-' + i);
      optionEl.textContent = dropdownList[i];
      dropdownEl.appendChild(optionEl);
    }
};

init();