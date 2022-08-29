function guardarCarroEnJson() {
  let carroJson = JSON.stringify(carro);
  return localStorage.setItem('carroJson', carroJson);
}
const obtenerCarroJson = () => {
  if (typeof carroLs === 'undefined' || typeof carroLs === 'null') {
    carroLs = localStorage.getItem('carroJson');
    carroLs = JSON.parse(carroLs);
    return (carro = carroLs);
  } else {
    return;
  }
};
