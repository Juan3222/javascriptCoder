let librosTotalCopia = [...librosTotal];

function mostrarProductos() {
  let html = '';
  librosTotal.forEach((libro) => {
    html =
      html +
      `
    <div id = "card">
      <img src="${libro.img}" alt="">
      <h3>${libro.nombre}</h3>
      <p>${libro.autor}</p>
      <p>${libro.genero}</p>
      <p>$${libro.precio},00</p>
      <button id = "card__button" onclick="agregarCarro(${libro.id})">Agregar al carro</button>
      <br>
    </div>  
    `;
  });
  document.getElementById('productos').innerHTML = html;
}

function agregarCarro(id) {
  let resultado = librosTotal.find((el) => el.id === id);
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
}

function filtrarGenero(genero) {
  librosTotal = [...librosTotalCopia];
  (genero == 'Fantasía' || genero == 'Ciencia Ficción') && (librosTotal = librosTotal.filter((item) => item.genero == genero));

  mostrarProductos();
}
obtenerCarroEnJson();
mostrarProductos();
numerarCarrito();
