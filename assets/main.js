 window.onload = () => {

// variables

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#datos-carrito tbody");
const vaciarCarritobtn = document.querySelector("#vaciar-carrito");
const listaCarrito = document.querySelector("#lista-productos");
let productosCarrito = [];


registrarEventListeners();
function registrarEventListeners() {
    listaCarrito.addEventListener("click", agregarProductos)
}

// Funciones

function agregarProductos(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {
        const procuntoSeleccionado = e.target.parentElement.parentElement;
        datosProcunto(procuntoSeleccionado)
    }
}

// Obteniendo datos del Producto
function datosProcunto(Producto) {
    // console.log(Producto);

    //objeto del producto seleccionado
    const infoProducto = {
        imagen: Producto.querySelector("img").src,
        titulo: Producto.querySelector("h5").textContent,
        precio: Producto.querySelector(".precio span").textContent,
        id: Producto.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    // console.log(infoProducto);
    // Agregar a productosCarrito

    productosCarrito = [...productosCarrito, infoProducto];
    console.log(productosCarrito);
}
}