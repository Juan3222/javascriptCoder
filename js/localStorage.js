function guardarCarroEnJson(carro) {
  let carroJson = JSON.stringify(carro);
  localStorage.setItem('carroJson', carroJson);
  return carroJson;
}

function obtenerCarroEnJson() {
  carroLs = localStorage.getItem('carroJson');
  carroLs = JSON.parse(carroLs);
  carro = carroLs;
  return carro;
}
