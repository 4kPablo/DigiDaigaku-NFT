let productsContainer = document.querySelector(".products-container");

function randomNumber() {
    let min = 2;
    let max = 1337;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderCard(nft) {
    if (nft != 1) {
        const div = document.createElement("div");
        div.classList.add("product-card");
        productsContainer.append(div);
        div.innerHTML = `
        <img src="./img/NFTs/${nft.id}.png">
        <div class="product-text">
            <p class="product-title">DigiDaigaku #${nft.id} - ${nft.name}</p>
            <div class="product-price">
                <p>Precio</p>
                <p><i class="fa-brands fa-ethereum"></i>${randomNumber()}</p>
            </div>
        </div>`
    }
}

products.forEach(nft => {
    renderCard(nft);
});


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


// Panel de filtros 

function desplegarFiltro(input, arrowdown, arrowup) {
    input.classList.toggle("hidden");
    arrowdown.classList.toggle("hidden");
    arrowup.classList.toggle("hidden");
}

let priceFilter = document.getElementById("price-filter");
let priceFilterInput = document.querySelector(".price-filter__input");
let priceFilter__arrowdown = document.querySelector(".price-filter__arrowdown");
let priceFilter__arrowup = document.querySelector(".price-filter__arrowup");

priceFilter.addEventListener('click', () => {
    desplegarFiltro(priceFilterInput, priceFilter__arrowdown, priceFilter__arrowup);
})

let nameFilter = document.getElementById("name-filter");
let nameFilterInput = document.querySelector(".name-filter__input");
let nameFilter__arrowdown = document.querySelector(".name-filter__arrowdown");
let nameFilter__arrowup = document.querySelector(".name-filter__arrowup");

nameFilter.addEventListener('click', () => {
    desplegarFiltro(nameFilterInput, nameFilter__arrowdown, nameFilter__arrowup);
})



// function mostrar(elemento) {
//     elemento.classList.remove("hidden");
// }

// function ocultar(elemento) {
//     elemento.classList.add("hidden");
// }