//Primeras instrucciones
// alert("¡Hola Mundo!");
// alert("¡Hola " + prompt("¿Cual es tu nombre?") + "!")

// pedir datos de usuario
// let nombreUsuario = prompt("¿Cual es tu nombre?");
// let edadUsusario = promt("¿Cual es tu edad?")
// mostrar mensajes al usuario
// alert("¡Hola " + nombreUsuario + "!");
// alert("Bienvenido " + nombreUsuario);
// alert("Tu edad es " + edadUsusario)

/* CONSOLA DE DESARROLADOR */
// console.log("¡Hola Mundo!", "info", "parametro 3");
// console.error("mensaje de error");
// console.warn("advertencia");
// console.info("info");

// DEFINIR VARIABLES
let string = "";
let number = 0;
let boolean = false;
// DEFINIR CONSTANTES
const stringConstante = "su valor nunca cambia";
const numberConstante = 40;
const boolConstante = true;
// DEFINIR VARIABLES CON VAR
var variable = "var ya esta en desuso";
var CONSTANTE = "las constantes se escribian en mayusculas";

/* STRING */
// concatenar strings
let userName = "marco";
let userAge = 20;
// en este caso estoy usando un numero para juntarlo con texto
// el numero se convierte en texto y luego se concatena con el mensaje
// podriamos usar userAge.toString() para convertir el numero a texto de manera explicita
console.log("Mi nombre es " + userName + "y tengo " + userAge + " años");
// salto de linea
console.log("linea 1\n" + "linea 2\n" + "linea 3\n");
// Comillas
console.log("'texto con comillas simples'");
console.log('"texto con comillas dobles"');
// texto en mayusculas y reasignacion de valores
userName = userName.toUpperCase();
console.log(userName);
// texto en mayusculas y reasignacion de valores
userName = userName.toLowerCase();
console.log(userName);
// cantidad de caracteres
let cantidadDeCaracteres = userName.length;
// repetir texto
let textoRepetito = userName.repeat(3);
// remplazar texto
let comida = "pizza con jamon y queso";
let napolitana = comida.replace("jamon y queso", "jamon, queso y tomate");

/* NUMBERS */
let number1 = 1;
let number2 = 2;
let number3 = 3;
// cuando definimos muchas variables relacionadas podemos definirlas juntas
let number4 = 4,
  number5 = 5,
  number6 = 6;
// operaciones
let suma = number1 + number2;
let resta = number3 - number1;
let multiplicacion = number4 * number6;
let divisionNumber = number5 / number2;
let modulo = number6 % number2;
// @ts-ignore
let divisionEntera = Number.parseInt(divisionNumber);

console.log(
  "numero flotante y numero entero:\n numero entero: 50\n numero floatante: 33.32"
);

/* PEQUEÑO PROGRAMA CON MATH */
let userMath = prompt("¿cual es tu nombre?");
alert(
  "Hola " + userMath + "\n ingresa 3 numeros y te digo cual es el mas grande"
);
let numberMath1 = parseInt(prompt("ingresa un numero"));
let numberMath2 = parseInt(prompt("ingresa un numero"));
let numberMath3 = parseInt(prompt("ingresa un numero"));
alert(
  "El numero mas grande es: " + Math.max(numberMath1, numberMath2, numberMath3)
);

/* PEQUEÑO PROGRAMA CON BOOLEANS */
alert("cuestionario");
// confirm retornar un boolean
let respuestaUser = confirm("¿5 es mas grande que 2?");
let validarRespuesta = 5 > 2 == respuestaUser;
// convierto a texto el booleano
let respuesta = validarRespuesta.toString();
let repuestaEnLatino =
  respuesta.replace("true", "Correcta").replace("false", "") +
  respuesta.replace("false", "Incorrecta").replace("true", "");
alert("Tu respuesta es " + repuestaEnLatino);
