class Libros {
  constructor(nombre, autor, genero, precio, img, id) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.precio = precio;
    this.img = img;
    this.id = id;
  }
}

libro1 = new Libros('El Camino de los Reyes', 'Brandon Sanderson', 'Fantasía', 990, 'https://www.penguinlibros.com/uy/1765875/el-camino-de-los-reyes-el-archivo-de-las-tormentas-1.jpg', 0);
libro2 = new Libros('El Problema de los Tres Cuerpos', 'Cixin Liu', 'Ciencia Ficción', 1400, 'https://www.penguinlibros.com/uy/243123/el-problema-de-los-tres-cuerpos-trilogia-de-los-tres-cuerpos-1.jpg', 1);
libro3 = new Libros('Dune', 'Frank Herbert', 'Ciencia Ficción', 550, 'https://1.bp.blogspot.com/-ZyR9QhRn2MY/XvxFKYjBAFI/AAAAAAAAZPs/WIcAZt8Mkn0YriEGLXWgsRBWOCXlz7ykQCNcBGAsYHQ/s1600/dune.jpg', 2);
libro4 = new Libros('Harry Potter', 'J.K Rowling', 'Fantasía', 1000, 'https://static.wikia.nocookie.net/esharrypotter/images/d/db/HP1_portada_espa%C3%B1ol_de_bolsillo_2020.jpg', 3);
libro5 = new Libros('El Bestiario de Axlin', 'Laura Gallego', 'Fantasía', 2000, 'https://images-na.ssl-images-amazon.com/images/I/91XWCsyDYrL.jpg', 4);
libro6 = new Libros('Fundación', 'Isaac Asimov', 'Ciencie Ficción', 600, 'https://images-na.ssl-images-amazon.com/images/I/81HVLHE1yTL.jpg', 5);

const librosTotal = [];
const carro = [];

librosTotal.push(libro1, libro2, libro3, libro4, libro5, libro6);

function mostrarProductos() {
  let html = '';
  librosTotal.forEach((libro) => {
    html =
      html +
      `
    <div id = "card">
      <h3>Nombre del libro:  ${libro.nombre}</h3>
      <p>Género del libro: ${libro.genero}</p>
      <p>Autor del libro: ${libro.autor}</p>
      <p>Precio: ${libro.precio}</p>
      <img src="${libro.img}" alt="">
      <span onclick="agregarCarro(${libro.id})">🛒</span>
      <br>
    </div>  
    `;
  });
  document.getElementById('productos').innerHTML = html;
}

function mostrarCarro() {
  let html = '';
  let i = 0;
  carro.forEach((libro) => {
    html =
      html +
      `
    <div id = "card">
      <h3>Nombre del libro:  ${libro.nombre}</h3>
      <p>Género del libro: ${libro.genero}</p>
      <p>Autor del libro: ${libro.autor}</p>
      <p>Precio: ${libro.precio}</p>
      <img src="${libro.img}" alt="">
      <span onclick="eliminarCarro(${i})">❌</span>
      <br>
    </div>  
    `;
    i += 1;
  });
  document.getElementById('carrito').innerHTML = html;
}

function agregarCarro(id) {
  let resultado = librosTotal.find((el) => el.id === id);
  carro.push(resultado);
  mostrarCarro();
  mostrarProductos();
  verTotalPrecio();
}
function eliminarCarro(id) {
  carro.splice(id, 1);
  mostrarCarro();
  mostrarProductos();
  verTotalPrecio();
}
function verTotalPrecio() {
  let carrito = 0;
  carro.forEach((libro) => {
    carrito = carrito + libro.precio;
    document.getElementById('carro-cantidad').innerHTML = `$${carrito}`;
  });
  if (carro.length == 0) {
    document.getElementById('carro-cantidad').innerHTML = `$0`;
  }
}

mostrarProductos();
