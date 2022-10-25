//  window.onload = () => {}

// variables

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#datos-carrito tbody");
const vaciarCarritobtn = document.querySelector("#vaciar-carrito");
const listaCarrito = document.querySelector("#lista-productos");


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
    console.log(Producto);

    //objeto del producto seleccionado
    const infoProducto = {
        imagen: curso.querySelector("img").src,

    }

    console.log(infoProducto);
}