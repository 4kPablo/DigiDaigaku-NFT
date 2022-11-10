let carritoContainer = document.querySelector(".cart-products-container");
let carritoVacio = document.querySelector(".empty-cart"); // Aviso de "¡No hay productos en el carrito!"
let divisor = document.querySelector(".divisor");
let total = document.querySelector(".total");
let buyButton = document.querySelector(".buy-button");
let carrito = [];
let precioTotal = 0;

window.addEventListener('load', () => {
    for (let i = 0; i <= products.length; i++) {
        if (typeof loadWaifu()[i] !== "undefined") {
            renderizarCarrito(
                loadWaifu()[i].id,
                loadWaifu()[i].name,
                loadWaifu()[i].price)
        }
    };
    recuperarCarrito();
    actualizarPrecio();
});

document.addEventListener('click', () => {
    deleteProductHandler();
    actualizarCarrito();
})

function recuperarCarrito() {
    if (loadWaifu()[0] != null) {
        carrito = carrito.concat(loadWaifu());
        return carrito;
    }
}

function loadWaifu() {
    let item;
    let carritoEnMemoria = [];
    for (let i = 0; i <= products.length; i++) {
        item = JSON.parse(localStorage.getItem('itemDeCarrito' + i));
        if (item != null) {
            carritoEnMemoria.push(item);
        }
    }
    return carritoEnMemoria;
}

function renderizarCarrito(id, name, price) {
    const div = document.createElement("div");
    div.classList.add("cart-product", 'cart-product-id--' + id);
    carritoContainer.append(div);
    div.innerHTML = `<img src="./img/NFTs/${id}.png">
    <div class="product-text">
        <p class="product-title">DigiDaigaku #${id}</p>
        <p class="product-subtitle">${name}</p>
        
        <div class="product-priceanddelete">
            <div class="product-price">  
                <p><i class="fa-brands fa-ethereum"></i>${price}</p>
            </div>
            <i class="product-delete fa-solid fa-xmark fa-lg" id="${id}"></i>
        </div>
    </div>`

    actualizarPrecio()
}

function actualizarCarrito() {
    if (carrito.length > 0) {
        carritoVacio.classList.add("hidden");
        divisor.classList.remove("hidden");
        total.classList.remove("hidden");
        buyButton.classList.remove("hidden");
    } else {
        carritoVacio.classList.remove("hidden");
        divisor.classList.add("hidden");
        total.classList.add("hidden");
        buyButton.classList.add("hidden");
    }
}

function actualizarPrecio() {
    let totalElement = document.querySelector(".total-num");
    let total = 0;
    carrito.forEach(item => { total += item.price })
    totalElement.innerHTML = `<i class="fa-brands fa-ethereum"></i><p class="price"> ${total}</p>`;
}

function deleteProductHandler() {
    window.onclick = e => {
        let targetId = e.target.id;
        carrito.forEach(element => {
            if (element.id == targetId) {
                carrito = carrito.filter(function (item) { return item.id != targetId });
                localStorage.removeItem('itemDeCarrito' + element.id);
                deleteProductFromHTML(targetId);
            }
        })
    }
}

function deleteProductFromHTML(id) {
    let selector = '.' + 'cart-product-id--' + id.toString();
    const element = document.querySelector(selector);
    element.remove();
    actualizarPrecio();
    actualizarCarrito();
}

buyButton.addEventListener('click', () => {
    alert("COMPRA REALIZADA.\nLos NFT fueron transferidos a la wallet asociada a su cuenta.");
    window.location.reload();
})