class Libros {
  constructor(nombre, autor, genero, precio) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.precio = precio;
  }
  info() {
    alert('Nombre: ' + this.nombre + '\nAutor: ' + this.autor + '\nGenero: ' + this.genero + '\nPrecio: ' + this.precio);
  }
}
let carrito = 0;
let comprar = 0;

libro1 = new Libros('El Archivo de las Tormentas', 'Brandon Sanderson', 'Fantasía', 990);
libro2 = new Libros('El Problema de los Tres Cuerpos', 'Cixin Liu', 'Ciencia Ficción', 1400);
libro3 = new Libros('Dune', 'Frank Herbert', 'Ciencia Ficción', 550);
libro4 = new Libros('Harry Potter', 'J.K Rowling', 'Fantasía', 1000);

const librosFantasia = [];
const librosCF = [];
const librosTotal = [];

librosFantasia.push(libro1, libro4);
librosCF.push(libro2, libro3);
librosTotal.push(libro1, libro2, libro3, libro4);

function seleccionar(seleccion) {
  while (seleccion != 0) {
    seleccion = parseInt(prompt(`Bienvenido a la Libreria PandaPerezoso, seleccione un género de libro para buscar:\n1: Fantasía\n2: Ciencia Ficción\n\n3: Ver info completa de los libros en la página\n4: Ver info completa de los libros en la página, y ordenados por precio de menor a mayor\n0: Salir`));
    switch (seleccion) {
      case 1:
        seleccionFantasia();
        break;
      case 2:
        seleccionCF();
        break;
      case 3:
        escribirLista();
        seleccion = 0;
        break;
      case 4:
        ordenarPorPrecio();
        escribirLista();
        seleccion = 0;
      case 0:
        break;
      default:
        alert('No ingresó un valor válido');
        seleccionar();
        break;
    }
  }
}
function seleccionFantasia(libroElegido) {
  while (libroElegido != 0) {
    libroElegido = parseInt(prompt(`Estos son los libros de fantasía que tenemos, elija para comprar:\n1-${libro1.nombre}. Precio: $${libro1.precio}\n2-${libro4.nombre}. Precio $${libro4.precio}\n\n3: Ver más info de los libros.\n4: Comprar\nCarrito: $${carrito}\n0: Volver`));
    switch (libroElegido) {
      case 1:
        carrito += libro1.precio;
        alert(libro1.nombre + ' ha sido agregado al carrito');
        break;
      case 2:
        carrito += libro4.precio;
        alert(libro4.nombre + ' ha sido agregado al carrito');
        break;
      case 3:
        librosFantasia.forEach((libro) => {
          libro.info();
        });
        break;
      case 4:
        alert('Gracias por su compra, salga del programa para ver el total gastado en la página');
        libroElegido = 0;
        seleccion = 0;
        comprarHTML();
        carrito = 0;
        break;
      case 0:
        break;
      default:
        alert('No ha ingresado un valor válido');
        break;
    }
  }
}
function seleccionCF(libroElegido) {
  while (libroElegido != 0) {
    libroElegido = parseInt(prompt(`Estos son los libros de fantasía que tenemos, elija para comprar:\n1-${libro2.nombre}. Precio: $${libro2.precio}\n2-${libro3.nombre}. Precio $${libro3.precio}\n\n3: Ver más info de los libros.\n4: Comprar\nCarrito: $${carrito}\n0: Volver`));
    switch (libroElegido) {
      case 1:
        carrito += libro2.precio;
        alert(libro2.nombre + ' ha sido agregado al carrito');
        break;
      case 2:
        carrito += libro3.precio;
        alert(libro3.nombre + ' ha sido agregado al carrito');
        break;
      case 3:
        librosCF.forEach((libro) => {
          libro.info();
        });
        break;
      case 4:
        alert('Gracias por su compra, salga del programa para ver el total gastado en la página');
        libroElegido = 0;
        seleccion = 0;
        comprarHTML();
        carrito = 0;
        break;
      case 0:
        break;
      default:
        alert('No ha ingresado un valor válido');
        break;
    }
  }
}
function escribirLista() {
  librosTotal.forEach((libro) => {
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3>Nombre del libro:  ${libro.nombre}</h3>
                            <p>Género del libro: ${libro.genero}</p>
                            <p>Autor del libro: ${libro.autor}</p>
                            <p>Precio: ${libro.precio}</p>
                            <br>`;
    document.body.append(contenedor);
  });
}
function comprarHTML() {
  let contenedor = document.createElement('div');
  contenedor.innerHTML = `<h2>El total de su compra fue de $${carrito}</h2>`;
  document.body.append(contenedor);
}
function ordenarPorPrecio() {
  librosTotal.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });
}
seleccionar();
