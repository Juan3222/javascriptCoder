function guardarCarroEnJson() {
  carroJson = JSON.stringify(carro);
  return localStorage.setItem('carroJson', carroJson);
}

function obtenerCarroEnJson() {
  carroLs = localStorage.getItem('carroJson');
  carroLs = JSON.parse(carroLs);
  if (carroLs === null) {
    return;
  } else if (carroLs) {
    return (carro = carro.concat(carroLs));
  }
}
