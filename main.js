// Store

let productsContainer = document.querySelector(".products-container");

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
                <p><i class="fa-brands fa-ethereum"></i>${nft.price}</p>
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

// Dropdown menus
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

// Funcionalidad de los filtros

// Filtro por precio
let min = document.getElementById("min");
let max = document.getElementById("max");

min.addEventListener('keypress', (e) => { if (e.key === 'Enter') { filtrarPorPrecioMinimo(min.value) } })
max.addEventListener('keypress', (e) => { if (e.key === 'Enter') { filtrarPorPrecioMáximo(max.value) } })

function filtrarPorPrecioMinimo(price) {
    limpiarCards();
    products.forEach(nft => {
        if (nft.price > price) {
            renderCard(nft);
        }
    });
}

function filtrarPorPrecioMáximo(price) {
    limpiarCards();
    products.forEach(nft => {
        if (nft.price < price) {
            renderCard(nft);
        }
    });
}

function limpiarCards() {
    products.forEach(nft => {
        const element = document.querySelector('.product-card');
        if (element != null) {
            element.remove();
        }
    });
}
// Filtro por nombre
let miya = document.getElementById("Miya");
let rina = document.getElementById("Rina");
let aubreeanna = document.getElementById("Aubreeanna");
let yeeun = document.getElementById("Yeeun");
let kotoko = document.getElementById("Kotoko");
let sinead = document.getElementById("Sinead");
let ataya = document.getElementById("Ataya");
let jiaYi = document.getElementById("JiaYi");
let zhiLei = document.getElementById("ZhiLei");

miya.addEventListener('click', () => { filtrarPorNombre("Miya") });
rina.addEventListener('click', () => { filtrarPorNombre("Rina") });
aubreeanna.addEventListener('click', () => { filtrarPorNombre("Aubreeanna") });
yeeun.addEventListener('click', () => { filtrarPorNombre("Yeeun") });
kotoko.addEventListener('click', () => { filtrarPorNombre("Kotoko") });
sinead.addEventListener('click', () => { filtrarPorNombre("Sinead") });
ataya.addEventListener('click', () => { filtrarPorNombre("Ataya") });
jiaYi.addEventListener('click', () => { filtrarPorNombre("JiaYi") });
zhiLei.addEventListener('click', () => { filtrarPorNombre("ZhiLei") });

function filtrarPorNombre(name) {
    limpiarCards();
    products.forEach(nft => {
        if (nft.name == name) {
            renderCard(nft);
        }
    });
}



