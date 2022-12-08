// REPASO
// let expresion = true;
// let expresion2 = true;
let indice = 1;
while (indice <= 10) {
  
  if (indice % 2 == 0) {
    console.log(indice);
    indice++;
    continue;
  }
  if(indice == 5) break;
  console.log("codigo....");
  indice++;
}


// for (let indice = 1; indice <= 10; indice++) {
//   if (indice % 2 == 0) {
//     console.log(indice);
//     continue;
//   }
//   console.log("codigo....");
// }
// for (let indice = 1; indice <= 10; indice++) {
//   if (indice == 7) {
//     break;
//   }
//   console.log(indice);
//   console.log("codigo....");
// }

/*FUNCIONES*/
// hoisting
// var numeros;
// console.log(numeros);
// var numeros = 5;
// console.log(numeros);
// numeros = 5;

function almorzar() {
  console.log("Menu:\n empanadas de carne, agua, milanesa");
  // for (let indice = 1; indice <= 10; indice++) {
  //   if (indice == 7) {
  //     break;
  //   }
  //   console.log(indice);
  //   console.log("codigo....");
  // }
}
function almorzar2(entrada, bebida, platoPrincipal) {
  console.log(`menu:\n${entrada}, ${bebida}, ${platoPrincipal}`);
  // console.log("menu\n" + entrada + " " + bebida + " " + platoPrincipal);
}

function suma(n1, n2, n3 = 1) {
  // codigo...
  return (n1 + n2) * n3;
}

const my_function = function () {
  console.log("codigo...");
};
my_function();

// // valores por defecto
// function almorzar3(
//   entrada = "panesitos",
//   bebida = "agua",
//   platoPrincipal = ""
// ) {
//   console.log(`menu:\n${entrada}, ${bebida}, ${platoPrincipal}`);
// }

/*SCOPE*/
// var variable1 = 5;
// let let1 = 10;
// console.log("var1", variable1); //5
// console.log("let1", let1); //10
// if (true) {
//   var variable1 = 7;
//   let let1 = 90;
//   console.log("var1", variable1); //7
//   console.log("let1", let1); //90
// }
// console.log("var1", variable1); //7
// console.log("let1", let1); //10

/* RETURN */
// function cuenta(entrada, bebida, platoPrincipal) {
//   console.log("buscar precios......");
//   const total = entrada.length + bebida.length + platoPrincipal.length;
//   return total;
// }

// function tablaMultiplicarDE(number, hasta) {
//   for (let i = 0; i < hasta; i++) {
//     if (i % 2 == 1) continue;
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }
