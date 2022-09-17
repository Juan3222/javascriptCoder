function mostrarProductos() {
  let html = '';
  librosTotal.forEach((libro) => {
    html =
      html +
      `
    <div class = "card">
      <img src="${libro.img}" alt="">
      <h3>${libro.nombre}</h3>
      <p>${libro.autor}</p>
      <p>${libro.genero}</p>
      <p>$${libro.precio},00</p>
      <button id = "card__button" onclick="agregarCarro(${libro.id})">
        <svg id= "card__button--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="card__button--svgColor" fill='#FFFFFF'>
          <path d="M21.96 14.27l2-7c.09-.3.03-.63-.16-.88-.19-.24-.49-.39-.8-.39H5V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .01.01.02.01.04 0 .1.02.21.05.3l2.55 7L6.57 17H4c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1H8.7l-.73-2H21c.45 0 .84-.3.96-.73zM21.1 10H18V8h3.67l-.57 2zM13 11v2h-3v-2h3zm-3-1V8h3v2h-3zm4 1h3v2h-3v-2zm0-1V8h3v2h-3zM9 8v2H6.15l-.72-2H9zm-2.29 3.52L6.52 11H9v2H7.25l-.54-1.48zM18 13v-2h2.82l-.57 2H18z"></path><circle cx="5" cy="21" r="2"></circle><circle cx="20" cy="21" r="2"></circle></g></svg>
      </button>
      <br>
    </div>  
    `;
  });
  document.getElementById('productos').innerHTML = html;
}

function agregarCarro(id) {
  let resultado = librosTotal.find((el) => el.id === id);
  resultado.cantidad = 1;
  carro.push(resultado);
  guardarCarroEnJson();
  mostrarProductos();
  numerarCarrito();
  Toastify({
    text: `${resultado.nombre} ha sido agregado al carrito con éxito`,
    position: 'right',
    style: {
      background: 'linear-gradient(to right, #000000, #5f5f5f)',
    },
    duration: 3500,
  }).showToast();
  searchFilters('.buscador', '.card');
}

function filtrarGenero(genero) {
  librosTotal = [...librosTotalCopia];
  switch (genero) {
    case 'Fantasía':
      librosTotal = librosTotal.filter((item) => item.genero == genero);
      break;

    case 'Ciencia Ficción':
      librosTotal = librosTotal.filter((item) => item.genero == genero);
      break;
    default:
      break;
  }
  mostrarProductos();
}
function filtrarPrecio(ordenar) {
  switch (ordenar) {
    case 'Relevancia':
      librosTotal = [...librosTotalCopia];
      break;
    case 'Alfabetico':
      librosTotal.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
      break;
    case 'MenorM':
      librosTotal.sort(function (a, b) {
        if (a.precio > b.precio) {
          return 1;
        }
        if (a.precio < b.precio) {
          return -1;
        }
        return 0;
      });
      break;
    case 'MayorM':
      librosTotal.sort(function (a, b) {
        if (a.precio > b.precio) {
          return -1;
        }
        if (a.precio < b.precio) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      break;
  }
  mostrarProductos();
}

obtenerCarroEnJson();
mostrarProductos();
numerarCarrito();
