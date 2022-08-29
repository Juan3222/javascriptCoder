function guardarCarroEnJson() {
  let carroJson = JSON.stringify(carro);
  return localStorage.setItem('carroJson', carroJson);
}
const obtenerCarroJson = () => {
  if (!carroLs) {
    carroLs = localStorage.getItem('carroJson');
    carroLs = JSON.parse(carroLs);
    return (carro = carroLs);
  }
};
