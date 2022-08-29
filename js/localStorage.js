function guardarCarroEnJson(carro) {
  let carroJson = JSON.stringify(carro);
  localStorage.setItem('carroJson', carroJson);
  return 'carroJson';
}

function obtenerCarroEnJson() {
  carroLs = localStorage.getItem('carroJson');
  carroLs = JSON.parse(carroLs);
  if (carroLs !== null || carroLs !== undefined) {
    carro = carroLs;
  }
  return carro;
}
