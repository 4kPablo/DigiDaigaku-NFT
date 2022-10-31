let carritoContainer = document.querySelector(".cart-products-container");
let carritoVacio = document.querySelector(".empty-cart"); // Aviso de "¡No hay productos en el carrito!"
let divisor = document.querySelector(".divisor");
let total = document.querySelector(".total");
let buyButton = document.querySelector(".buy-button");
let carrito = [];
let precioTotal = 0;

function ProductoEnCarrito(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

// carrito.push(card.querySelector(".product-title").textContent);
// let producto = new ProductoEnCarrito(
//     card.querySelector(".product-title").textContent,
//     card.querySelector(".price").textContent,
//     1
// )

escucharClickEnProducto();

function escucharClickEnProducto() {
    renderedProducts.forEach(product => {   // Bucle por los productos renderizados
        let card = document.getElementById(product);    // Selecciona cada producto del bucle
        card.addEventListener('click', () => {    // Al hacer click en el producto seleccionado...
            products.forEach(nft => {    // ...empieza otro bucle pero entre TODOS los productos de products.js
                if (card.id == nft.id) {
                    let producto = new ProductoEnCarrito(
                        nft.id,
                        nft.name,
                        nft.price);

                    let productoDuplicado = false;
                    carrito.forEach(producto => {
                        if (producto.id == nft.id) {
                            productoDuplicado = true;
                        }
                    })

                    if (productoDuplicado) {
                        alert('Ese producto ya fue agregado al carrito.\nLos NFT no son duplicables.');
                        // carrito.forEach(item => {
                        //     if (item.id == producto.id) {
                        //         item.price = item.price + nft.price;
                        //         item.quantity++;
                        //         console.log(carrito);
                        //         actualizarCarrito(producto.id, producto);
                        //     }
                        // });
                        // (Olvidé que los NFT no se pueden duplicar =_=💧)
                    } else {
                        carrito.push(producto);
                        renderizarCarrito(producto.id, producto.name, producto.price);
                    }
                }
            })
        })
    })
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

document.addEventListener('click', () => {
    deleteProductHandler();
    actualizarCarrito()
})

function deleteProductHandler() {
    window.onclick = e => {
        let targetId = e.target.id;
        carrito.forEach(element => {
            if (element.id == targetId) {
                carrito = carrito.filter(function (item) { return item.id != targetId });
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
    actualizarCarrito()
}

buyButton.addEventListener('click', () => {
    alert("COMPRA REALIZADA.\nLos NFT fueron transferidos a la wallet asociada a su cuenta.");
    window.location.reload();
})