/* REPASO */

function almorzar(entrada = "pan", bebida = "agua", platoPrincipal = "") {
  console.log(`menu:\n${entrada}, ${bebida}, ${platoPrincipal}`);
}

function cuenta(entrada, bebida, platoPrincipal) {
  console.log("buscar precios......");
  const total = entrada.length + bebida.length + platoPrincipal.length;
  return total;
}

function tablaMultiplicarDE(number, hasta = 10) {
  for (let i = 1; i <= hasta; i++) {
    if (i % 2 == 1) {
      continue;
    }
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

/* ARRAYS */

// let numero0 = 1;
// let numero1 = 2;
// let numero2 = 2;
// let numero3 = 2;
// let numero4 = 2;
// let numero5 = 2;
// let numero6 = 2;

let numeros = ["cero", "uno", "dos", "tres"];

/* RECORRER ARRAYS */
// for (let i = 0; i < numeros.length; i++) {
//   const element = numeros[i];
//   console.log(i);
//   console.log(element);
// }

// for of
// for (const iterator of numeros) {
//   console.log(iterator.includes("e"));
// }

let comidas = ["empanada", "pizza", "pancho", "milanesa", "ñoquis", "ravioles"];

// usando forEach parte 1
comidas.forEach(callbackfn);

function callbackfn(element, indice, my_array) {
  console.log(element);
  console.log(indice);
  console.log(my_array);
}

// Usando forEach parte 2
comidas.forEach(function (element, indice, my_array) {
  console.log(element);
  console.log(indice);
  console.log(my_array);
});

// usando forEach parte 3
// funciones flecha
comidas.forEach((element, indice, my_array) => {
  console.log(element);
  console.log(indice);
  console.log(my_array);
});

// usando forEach parte 4
comidas.forEach((element) => {
  console.log(element);
});

// usando forEach parte 5
comidas.forEach((e) => console.log(e));
