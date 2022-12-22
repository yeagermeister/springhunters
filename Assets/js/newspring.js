const pEl = document.querySelector("#newspring");

function init() {
    let newSpringText = JSON.parse(sessionStorage.getItem("newspring"));
    pEl.textContent = newSpringText;
};

init();