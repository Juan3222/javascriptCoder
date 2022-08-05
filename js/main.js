producto1 = 455;
producto2 = 50;
producto3 = 400;
producto4 = 2500;
producto5 = 350;
carrito = 0;
comprar = 0;
efectivo = 5000;

alert('Bienvenido a la tienda "Cinco Productos", presione del 1 al 5 para seleccionar el producto deseado');

while (comprar !== 1) {
  numeroElegido = parseInt(prompt('1: 1Kg de milanesas ==> Precio: ' + producto1 + '$ \n2: Alfajor ==> Precio: ' + producto2 + '$ \n3: 1Kg de pollo ==> Precio: ' + producto3 + '$ \n4: Televisor ==> Precio: ' + producto4 + '$ \n5: Camisa Azul ==> Precio: ' + producto5 + '$\nTotal del Carrito = ' + carrito + '$' + '\nEfectivo en mano: 5000$' + '\n6: Comprar'));
  if (numeroElegido === 1) {
    carrito = carrito + producto1;
  } else if (numeroElegido === 2) {
    carrito = carrito + producto2;
  } else if (numeroElegido === 3) {
    carrito = carrito + producto3;
  } else if (numeroElegido === 4) {
    carrito = carrito + producto4;
  } else if (numeroElegido === 5) {
    carrito = carrito + producto5;
  } else if (numeroElegido === 6) {
    comprar++;
  } else {
    alert('No ingresó un valor válido');
  }
}
function compra(carrito, efectivo) {
  if (carrito < efectivo) {
    cambio = efectivo - carrito;
    return alert('El total de la compra fue ' + carrito + '$ \nLe sobraron ' + cambio + '$');
  } else if (carrito > efectivo) {
    return alert('No tiene el dinero suficiente para hacer la compra');
  }
}
compra(carrito, efectivo);
