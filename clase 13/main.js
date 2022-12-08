// let repuestaUsuario = confirm("¿5 es mas grande que 2?");
// let repuestaCorrecta = 5 > 2;
// let evalucion = repuestaUsuario == repuestaCorrecta;
// if (evalucion) {
//   // codigo 1
//   // la condicion se cumplio
//   console.log("respuesta correcta");
// } else {
//   // codigo 2
//   // la condicion no se cumplio
//   console.log("respuesta incorrecta");
// }

// let numero = 2;
// estructura if
// if (numero == 1) {
//   console.log("el numero es 1");
// } else if (numero == 2) {
//   console.log("el numero es 2");
// } else if (numero == 3) {
//   console.log("el numero es 3");
// } else {
//   console.log("dato incorrecto");
// }
// estructura switch
// switch (numero) {
//   case 1:
//     console.log("el numero es 1");
//     break;
//   case 2:
//     console.log("el numero es 2");
//     break;
//   case 3:
//     console.log("el numero es 3");
//     break;
//   default:
//     console.log("dato no valido");
// }
let fruta = "pera";
if (fruta == "pera") {
  console.log("color verde");
} else if (fruta == "manzana") {
  console.log("color rojo");
} else if (fruta == "naranja") {
  console.log("color naranja");
} else {
  console.log("no es una fruta");
}

switch (fruta) {
  case "pera":
    console.log("color verde");
    break;
  case "manzana":
    console.log("color rojo");
    break;
  case "mandarina":
    console.log("color naranja");
    break;
  default:
    console.log("no es una fruta");
}

let numero = 32;
if (numero % 2 == 0) {
  console.log("el numero es par");
} else if (numero % 2 == 1) {
  console.log("el numero es impar");
}

let restoAlDividorPor2 = numero % 2;
switch (restoAlDividorPor2) {
  case 0:
    console.log("el numero es par");
    break;
  case 1:
    console.log("el numero es impar");
    break;
  default:
    console.log("dato incorrecto");
}

// Colores primarios: azul,rojo,amarillo
// Colores secundarios: verde, violeta, naranja
// "central": marron
let color = "marron";
switch (color) {
  case "azul":
  case "rojo":
  case "amarillo":
    console.log("color primario");
    break;
  case "verde":
  case "violeta":
  case "naranja":
    console.log("color secundario");
    break;
  default:
    console.log("color neutro");
}

let horaActual = 12;
if (horaActual >= 6 && horaActual <= 12) {
  console.log("buenos dias");
} else if (horaActual > 12 && horaActual <= 19) {
  console.log("buenas tardes");
} else {
  console.log("buenas noches");
}

// let indice = 1;
// while (indice <= 10) {
//   console.log(indice);
//   indice++;
// }
// console.log("el bucle termino");

// adivina el numero
// const numeroRandom = Math.ceil(Math.random() * 100);
// let userNumber = parseInt(prompt("ingrese un numero"));
// while (numeroRandom != userNumber) {
//   if (userNumber > numeroRandom) {
//     alert("ingresa un numero mas pequeño");
//   } else {
//     alert("ingresa un numero mas grande");
//   }
//   userNumber = parseInt(prompt("ingrese un numero"));
// }
// console.log("win");

// version 2
const numeroRandom = Math.ceil(Math.random() * 100);
let textoPregunta = "ingrese un numero";
let userNumber1 = parseInt(prompt(textoPregunta));
while (numeroRandom != userNumber1) {
  // condigo
  if (userNumber1 > numeroRandom) {
    textoPregunta = "ingrese un numero mas pequeño";
  } else {
    textoPregunta = "ingrese un numero mas grande";
  }
  // actualizar variables de bucle
  userNumber1 = parseInt(prompt(textoPregunta));
}
document.write("<h2>You Win</h2>");

let userNumber = parseInt(prompt("ingrese un numero"));
let multiplicarHasta = parseInt(prompt("ingrese un numero"));
for (let i = 1; i <= multiplicarHasta; i++) {
  if (i == 1) {
    document.write(
      "<h2>Tabla de multiplicar del numero " + userNumber + ": </h2>"
    );
  }
  document.write(
    "<p>" + userNumber + " x " + i + " = " + userNumber * i + "</p>"
  );
}
