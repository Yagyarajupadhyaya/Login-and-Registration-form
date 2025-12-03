let signup = document.querySelector(".signup-btn");
let login = document.querySelector(".login-btn");
let slider = document.querySelector(".slider");
let formSelection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSelection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSelection.classList.remove("form-section-move");
});
