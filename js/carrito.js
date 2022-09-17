function mostrarCarro() {
  let html = '';
  carro.forEach((libro, i) => {
    html =
      html +
      `
      <div class = "card-carrito">
        <img src="${libro.img}" alt="">
        <h3>${libro.nombre}</h3>    
        <input type="number" id="cantidad-carrito${libro.id}" value="${libro.cantidad}" min="1" onchange=sumarCantidad(${libro.id}) />
        <p>$${libro.precio * libro.cantidad},00</p>
        <button id = "cardCarrito__button" onclick="eliminarCarro(${i})">
          <svg id = "cardCarrito__button--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="cardCarrito__button--svgColor" fill='#FFFFFF'><path d="M19.5 4.5c-.8-.8-2.2-.8-3 0L12 9 7.5 4.5c-.8-.8-2.2-.8-3 0-.8.8-.8 2.2 0 3L9 12l-4.5 4.5c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0L12 15l4.5 4.5c.8.8 2.2.8 3 0 .8-.8.8-2.2 0-3L15 12l4.5-4.5c.8-.8.8-2.2 0-3z"></path></g></svg>
        </button>
        <br>
      </div>  
      `;
  });
  document.getElementById('carrito').innerHTML = html;
  verTotalPrecio();
}
function sumarCantidad(id) {
  let cantidades = document.querySelector(`#cantidad-carrito${id}`).value;
  let resultado = carro.find((el) => {
    if (el.id === id) {
      return (el.cantidad = Number(cantidades));
    }
  });

  console.log(resultado);
  console.log(carro);
  guardarCarroEnJson();
  mostrarCarro();
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
    carrito = carrito + libro.precio * libro.cantidad;
  });
  carro.length === 0 ? (document.getElementById('carro-cantidad').innerHTML = `$0`) : (document.getElementById('carro-cantidad').innerHTML = `$${carrito}`);
}
obtenerCarroEnJson();
mostrarCarro();
numerarCarrito();
