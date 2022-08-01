let numero = parseInt(
  prompt(
    "Ingrese 1 para obtener cinco números pares por consola, u oprima 2 para obtener cinco números impares"
  )
);

if (numero === 1) {
  for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
  }
} else if (numero === 2) {
  for (let i = 1; i <= 10; i = i + 2) {
    console.log(i);
  }
} else {
  alert("El dato ingresado no es correcto");
}
