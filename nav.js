// Burger menu

let burgerIcon = document.querySelector(".burger-icon");
let burgerPanel = document.querySelector(".burger-menu-panel");

burgerIcon.addEventListener('click', () => {
    burgerPanel.classList.toggle("hidden")
})


// Login

let loginPanel = document.querySelector(".login-panel")
let loginCloseButton = document.querySelector(".login-panel--close");
let loginNavLink = document.querySelector(".loguearse-nav-link");

loginNavLink.addEventListener('click', () => {
    loginPanel.classList.remove("hidden");
});

loginCloseButton.addEventListener('click', () => {
    loginPanel.classList.add("hidden");
});

let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");
let registerLink = document.getElementById("register-link");
let loginLink = document.getElementById("login-link");

registerLink.addEventListener('click', () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

loginLink.addEventListener('click', () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});