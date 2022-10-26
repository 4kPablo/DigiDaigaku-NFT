// Burger menu

let burgerIcon = document.querySelector(".burger-icon");
let burgerPanel = document.querySelector(".burger-menu-panel");

burgerIcon.addEventListener('click', () => {
    burgerPanel.classList.toggle("hidden")
})


// Login

let loginPanel = document.querySelector(".login-panel")
let loginCloseButton = document.querySelector(".login-panel--close");
let loginNavLink1 = document.querySelector(".loguearse-nav-link1");
let loginNavLink2 = document.querySelector(".loguearse-nav-link2");
// (Los link 1 son los que están integrados al nav)
// (Los link 2 son los del burger menu)

loginNavLink1.addEventListener('click', () => {
    loginPanel.classList.remove("hidden");
});

loginNavLink2.addEventListener('click', () => {
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


// Carrito

let cartPanel = document.querySelector(".cart-panel")
let cartCloseButton = document.querySelector(".cart-panel--close");
let carritoNavLink1 = document.querySelector(".carrito-nav-link1");
let carritoNavLink2 = document.querySelector(".carrito-nav-link2");

carritoNavLink1.addEventListener('click', () => {
    cartPanel.classList.remove("hidden");
});

carritoNavLink2.addEventListener('click', () => {
    cartPanel.classList.remove("hidden");
});

cartCloseButton.addEventListener('click', () => {
    cartPanel.classList.add("hidden");
});