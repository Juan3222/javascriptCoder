function guardarCarroEnJson(carro) {
  let carroJson = JSON.stringify(carro);
  return localStorage.setItem('carroJson', carroJson);
}
function obtenerCarroEnJson() {
  carroLs = localStorage.getItem('carroJson');
  carroLs = JSON.parse(carroLs);
  carro = carroLs;
  mostrarCarro();
  return carro;
}
