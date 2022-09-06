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
// buscadorInput.addEventListener('input', (e) => {
//   const resultado = e.target.value.toLowerCase();
//   console.log(resultado);
//   librosTotal = [...librosTotalCopia];
//   librosTotal = librosTotal.filter((libro) => {
//     libro.nombre.toLowerCase().includes(resultado);

//     console.log(libro.nombre);
//   });
//   console.log(librosTotal);
// });
