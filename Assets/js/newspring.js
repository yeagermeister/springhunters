const springEl = document.querySelector("#spring");
const descEl = document.querySelector("#desc");
const campEl = document.querySelector("#camp");
const petEl = document.querySelector("#pet");
const addressEl = document.querySelector("#address");

function init() {
    let newSpringText = JSON.parse(sessionStorage.getItem("newspring"));
    springEl.textContent = newSpringText[0];
    descEl.textContent = newSpringText[1];
    campEl.textContent = newSpringText[2];
    petEl.textContent = newSpringText[3];
    addressEl.textContent = newSpringText[4];
};

init();