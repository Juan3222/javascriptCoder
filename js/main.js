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

let librosTotal = [];
librosTotal.push(new Libros(0, 'El Camino de los Reyes', 'Brandon Sanderson', 'Fantasía', 990, 'https://www.penguinlibros.com/uy/1765875/el-camino-de-los-reyes-el-archivo-de-las-tormentas-1.jpg'));
librosTotal.push(new Libros(1, 'El Problema de los Tres Cuerpos', 'Cixin Liu', 'Ciencia Ficción', 1400, 'https://www.penguinlibros.com/uy/243123/el-problema-de-los-tres-cuerpos-trilogia-de-los-tres-cuerpos-1.jpg'));
librosTotal.push(new Libros(2, 'Dune', 'Frank Herbert', 'Ciencia Ficción', 550, 'https://1.bp.blogspot.com/-ZyR9QhRn2MY/XvxFKYjBAFI/AAAAAAAAZPs/WIcAZt8Mkn0YriEGLXWgsRBWOCXlz7ykQCNcBGAsYHQ/s1600/dune.jpg'));
librosTotal.push(new Libros(3, 'Harry Potter y la Piedra Filosofal', 'J.K Rowling', 'Fantasía', 1000, 'https://static.wikia.nocookie.net/esharrypotter/images/d/db/HP1_portada_espa%C3%B1ol_de_bolsillo_2020.jpg'));
librosTotal.push(new Libros(4, 'El Bestiario de Axlin', 'Laura Gallego', 'Fantasía', 2000, 'https://images-na.ssl-images-amazon.com/images/I/91XWCsyDYrL.jpg'));
librosTotal.push(new Libros(5, 'Fundación', 'Isaac Asimov', 'Ciencia Ficción', 600, 'https://images-na.ssl-images-amazon.com/images/I/81HVLHE1yTL.jpg'));
librosTotal.push(new Libros(6, 'El Nombre del Viento', 'Patrick Rothfuss', 'Fantasía', 1990, 'https://images-na.ssl-images-amazon.com/images/I/7125ljaY0gL.jpg'));
librosTotal.push(new Libros(7, 'Los Pilares de la Tierra', 'Ken Follet', 'Novela histórica', 890, 'https://3.bp.blogspot.com/-3BS_QXV4xOE/Vtdi-es9_XI/AAAAAAAABs0/BbR0Ivfr0YA/s1600/Los%2Bpilares%2Bde%2Bla%2Btierra.jpg'));
librosTotal.push(new Libros(8, 'La Ciudad de las Bestias', 'Isabel Allende', 'Aventura', 530, 'https://librosya.com.uy/wp-content/uploads/2021/11/9789877254518-scaled.jpg'));
librosTotal.push(new Libros(9, 'El Imperio Final', 'Brandon Sanderson', 'Fantasía', 1190, 'https://images.cdn3.buscalibre.com/fit-in/360x360/a8/b9/a8b99ba35498b0cc7cfc150cdf00bbc7.jpg'));
librosTotal.push(new Libros(10, 'Game of Thrones', 'George R.R Martin', 'Fantasía', 1300, 'https://ratondebiblioteca15.files.wordpress.com/2019/03/juego-de-tronos.jpg'));
librosTotal.push(new Libros(11, 'El Ojo del Mundo', 'Robert Jordan', 'Fantasía', 890, 'https://www.planetadelibros.com.uy/usuaris/libros/fotos/330/m_libros/329536_portada_el-ojo-del-mundo-n-0114_robert-jordan_201910151031.jpg'));
librosTotal.push(new Libros(12, 'El Mercader de Libros', 'Luis Zueco', 'Novela histórica', 660, 'https://m.media-amazon.com/images/I/51+jPK7pd8L.jpg'));
// librosTotal.push(new Libros(id, "nombre", "autor", "genero", precio, "img"));
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
  d.addEventListener('keyup', (e) => {
    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove('filtro') : el.classList.add('filtro');
      });
    }
  });
}
searchFilters('.buscador', '.card');
