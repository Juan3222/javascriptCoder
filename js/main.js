class Libros {
  constructor(id, nombre, autor, genero, precio, img) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.precio = precio;
    this.img = img;
    this.id = id;
  }
}

libro1 = new Libros(0, 'El Camino de los Reyes', 'Brandon Sanderson', 'Fantasía', 990, 'https://www.penguinlibros.com/uy/1765875/el-camino-de-los-reyes-el-archivo-de-las-tormentas-1.jpg');
libro2 = new Libros(1, 'El Problema de los Tres Cuerpos', 'Cixin Liu', 'Ciencia Ficción', 1400, 'https://www.penguinlibros.com/uy/243123/el-problema-de-los-tres-cuerpos-trilogia-de-los-tres-cuerpos-1.jpg');
libro3 = new Libros(2, 'Dune', 'Frank Herbert', 'Ciencia Ficción', 550, 'https://1.bp.blogspot.com/-ZyR9QhRn2MY/XvxFKYjBAFI/AAAAAAAAZPs/WIcAZt8Mkn0YriEGLXWgsRBWOCXlz7ykQCNcBGAsYHQ/s1600/dune.jpg');
libro4 = new Libros(3, 'Harry Potter y la Piedra Filosofal', 'J.K Rowling', 'Fantasía', 1000, 'https://static.wikia.nocookie.net/esharrypotter/images/d/db/HP1_portada_espa%C3%B1ol_de_bolsillo_2020.jpg');
libro5 = new Libros(4, 'El Bestiario de Axlin', 'Laura Gallego', 'Fantasía', 2000, 'https://images-na.ssl-images-amazon.com/images/I/91XWCsyDYrL.jpg');
libro6 = new Libros(5, 'Fundación', 'Isaac Asimov', 'Ciencia Ficción', 600, 'https://images-na.ssl-images-amazon.com/images/I/81HVLHE1yTL.jpg');

let librosTotal = [];
librosTotal.push(libro1, libro2, libro3, libro4, libro5, libro6);
let librosTotalCopia = [...librosTotal];
let carro = [];

function numerarCarrito() {
  let html = '';
  carroLongitud = carro.length;
  html =
    html +
    `
    <p id = "carroContador" >${carroLongitud}</p>
    `;

  document.getElementById('numeroCarro').innerHTML = html;
}
function searchFilters(input, selector) {
  const d = document;
  d.addEventListener('input', (e) => {
    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove('filtro') : el.classList.add('filtro');
      });
    }
  });
}
searchFilters('.buscador', '.card:not(button)');
