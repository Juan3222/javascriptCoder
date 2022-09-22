class Libro {
  constructor(id, nombre, autor, genero, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.precio = precio;
    this.img = img;
  }
}

let librosTotal = [];
let librosTotalCopia = [];
async function traerProductos() {
  let res = await fetch('../json/libros.json');
  let json = await res.json();
  let librosAux = [];
  json.forEach((libro) => {
    librosAux.push(new Libro(libro.id, libro.nombre, libro.autor, libro.genero, libro.precio, libro.img));
  });

  librosTotal = [...librosAux];
  librosTotalCopia = [...librosTotal];
  mostrarProductos();
  return librosTotal;
}
traerProductos();

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
// function mostrarCarrito() {
//   let html = '';
//   carro.forEach((libro) => {
//     html =
//       html +
//       `
//       <div class = "miniCarrito">
//         <img src="${libro.img}" alt="">
//         <h3>${libro.nombre}</h3>
//         <p>$${libro.precio},00</p>
//       </div>
//       `;
//   });
//   document.getElementById('carrito').innerHTML = html;
// }
searchFilters('.buscador', '.card');
