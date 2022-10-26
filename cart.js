let carritoContainer = document.querySelector(".cart-products-container");
let carritoVacio = document.querySelector(".empty-cart"); // Aviso de "¡No hay productos en el carrito!"
let carrito = [];

function ProductoEnCarrito(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
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
                        nft.price, 1);

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
                        console.log(carrito);
                        carrito.push(producto);
                        renderizarCarrito(producto.id, producto.name, producto.price, producto.quantity);
                    }
                }
            })
        })
    })
}

function renderizarCarrito(id, name, price, quantity) {
    console.log('Carrito renderizado')
    carritoVacio.classList.add("hidden");

    const div = document.createElement("div");
    div.classList.add("cart-product", id);
    carritoContainer.append(div);
    div.innerHTML = `<img src="./img/NFTs/${id}.png">
    <div class="product-text">
        <p class="product-title">DigiDaigaku #${id}</p>
        <p class="product-subtitle">${name}</p>
        
        <div class="product-quantity">
            <div class="product-price">  
                <p><i class="fa-brands fa-ethereum"></i>${price}</p>
            </div>
            <i class="fa-solid fa-circle-minus"></i>
            <p class="quantity">${quantity}</p>
            <i class="fa-solid fa-circle-plus"></i>
        </div>
    </div>`
}


