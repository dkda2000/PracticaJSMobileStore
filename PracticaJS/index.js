
//Crear un array de al menos 10 objetos con propiedades (título, imagen, descripcion, fecha, etc) y mostrarlo en pantalla

let elementos = [
  { imagen: "img/MotoE20.png", marca: 'Motorola', modelo: 'Moto E20', pantalla: 6.5, precio: 41900 },
  { imagen: "img/MotoG42.png", marca: 'Motorola', modelo: 'Moto G42', pantalla: 6.43, precio: 81999 },
  { imagen: "img/SGA13.png", marca: 'Samsung', modelo: 'Samsung Galaxy A13', pantalla: 6.6, precio: 69999 },
  { imagen: "img/SGA04.png", marca: 'Samsung', modelo: 'Samsung Galaxy A04', pantalla: 6.5, precio: 60999 },
  { imagen: "img/SGA53.png", marca: 'Samsung', modelo: 'Samsung Galaxy A53', pantalla: 6.5, precio: 154999 },
  { imagen: "img/TCL30SE.png", marca: 'TCL', modelo: 'TCL 30SE', pantalla: 6.52, precio: 41999 },
  { imagen: "img/TCL305i.png", marca: 'TCL', modelo: 'TCL 305i', pantalla: 6.52, precio: 29999 },
  { imagen: "img/Edge30.png", marca: 'Motorola', modelo: 'Edge 30', pantalla: 6.55, precio: 139999 },
  { imagen: "img/RedmiNote11.png", marca: 'Xiaomi', modelo: 'Redmi Note 11', pantalla: 6.43, precio: 109999 },
  { imagen: "img/SGFlip4.png", marca: 'Samsung', modelo: 'Samsung Galaxy Z FLip 4', pantalla: 6.7, precio: 309999 }
];

let tabla = document.getElementById("elementosTabla");
let contador = 0;
let contadorImpar = 3;

elementos.forEach(function(elemento) {
  
    let fila = tabla.insertRow();

    let celdaImagen = fila.insertCell();
    let celdaMarca = fila.insertCell();
    let celdaModelo = fila.insertCell();
    let celdaPantalla = fila.insertCell();
    let celdaPrecio = fila.insertCell();

    celdaImagen.innerHTML = "<img src='"+elemento.imagen+"'/>";
    celdaMarca.innerHTML = elemento.marca;
    celdaModelo.innerHTML = elemento.modelo;
    celdaPantalla.innerHTML = elemento.pantalla + "\" ";
    celdaPrecio.innerHTML = "$ "+ elemento.precio.toLocaleString('es-AR');

    celdaMarca.classList.add("celdas")
    celdaModelo.classList.add("celdas")
    celdaPantalla.classList.add("celdas")
    celdaPrecio.classList.add("celdas")

    if (contador%2==0) {
      fila.classList.add("filasPares");
    }

    ++contador
  
 
});



