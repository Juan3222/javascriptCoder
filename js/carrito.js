function mostrarCarro() {
  let html = '';
  carro.forEach((libro, i) => {
    html =
      html +
      `
      <div id = "card">
        <img src="${libro.img}" alt="">
        <h3>${libro.nombre}</h3>
        <p>${libro.genero}</p>
        <p>${libro.autor}</p>
        <p>$${libro.precio},00</p>
        <button id = "card__button" onclick="eliminarCarro(${i})">Eliminar del carro</button>
        <br>
      </div>  
      `;
  });
  document.getElementById('carrito').innerHTML = html;
  verTotalPrecio();
}

function eliminarCarro(id) {
  carro.splice(id, 1);
  numerarCarrito();
  guardarCarroEnJson();
  mostrarCarro();
}

function verTotalPrecio() {
  let carrito = 0;
  carro.forEach((libro) => {
    carrito = carrito + libro.precio;
  });
  carro.length === 0 ? (document.getElementById('carro-cantidad').innerHTML = `$0`) : (document.getElementById('carro-cantidad').innerHTML = `$${carrito}`);
}
obtenerCarroEnJson();
mostrarCarro();
numerarCarrito();
