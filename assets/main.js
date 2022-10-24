// window.onload = () => {}

// variables
const carrito = document.querySelector("#carrito");
const catosCarrito = document.querySelector("#datos-carrito tbody");
const limpiarCarritobtn= document.querySelector("#limpiar-carrito");
const productos = document.querySelector("#productos");

registrarEventListeners();
function registrarEventListeners() {
    // Agrega un producto precionando "Agregar al Carrito"
    productos.addEventListener("click", agregarProducto);
}


// Funciones

function agregarProducto() {
    console.log("apretando en productos!!!");
}


// const camara = [
//     {id: 1, nombre:"Camara h1",tipo: "Bullet",precio: 5500,resolucion: "HD"},
//     {id: 2, nombre:"Camara h2",tipo: "Bullet",precio: 7500,resolucion: "Full-HD"},
//     {id: 3, nombre:"Camara h3",tipo: "Domo",precio: 6500,resolucion: "HD"},
//     {id: 4, nombre:"Camara h4",tipo: "Domo",precio: 7500,resolucion: "Full-HD"}, 
// ];   

// function Productos(id,nombre,tipo,precio,resolucion,){
//     this.id=id;
//     this.nombre=nombre;
//     this.tipo=tipo;
//     this.precio=precio;
//     this.resolucion=resolucion;
// } 


// console.log(camara);

// const nuevaCamara5 = new Productos(5,"Camara h5","Domo Metal",8000,"Full-HD");

// function nuevaCamara(nu,camaras){
//     nu.push(camaras);
// }

// nuevaCamara(camara, nuevaCamara5);

// console.log(camara);

// let carrito = [];

// let productos = prompt("¿Desea conocer nuestras Camaras? \n Ingrese si o no");

// while(productos !="si"&& productos !="no"){
//     alert("Ingrese una opcion valida");
//     productos = prompt("¿Desea una Camara? \n Ingrese si o no");
// }
// if(productos === "si"){
//     let mostrarCamaras = camara.map((producto)=> producto.nombre + " " + producto.tipo + " " + producto.precio + "$" + " "+ producto.resolucion);
//     alert(mostrarCamaras.join("\n"));  
// } else if (productos === "no"){
//     alert("Gracias, vuelva pronto!")
// }

// function filCamara(fil, filtro){
//     const filtrar = fil.filter((camara)=>{
//         return camara.nombre.includes(filtro)
//     })
//     return filtrar;
// }

// let queProducto = prompt("¿Que Camara Quiere? \n Puede ingresar h y el numero");

// console.log(filCamara(camara,queProducto));