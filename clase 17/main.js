let my_var = 5;
my_var = 10;
console.log(my_var);
const my_var2 = 20;
my_var2 = 1;

// {
//     "dato 1": "texto",
//     "dato 2": 20,
//     "dato 3": false,
//     "dato 4": ["text", "text"],
//     "dato 5": {
//         "dato 1":"texto",
//         "dato 2":10
//     }
// }

// /* CODIGO SINCRONO*/
// console.log("PRIMERA EJECUCION");
// console.log("SEGUNDA EJECUCION");
// console.log("TERCERA EJECUCION");

// /* CODIGO ASINCRONO */
// setTimeout(() => console.log("TERCERA EJECUCION"),1000);
// setTimeout(() => console.log("SEGUNDA EJECUCION"),500);
// console.log("PRIMERA EJECUCION");

// /* CREAMOS Y RESOLVEMOS LA PROMESA */
// let promesa1 = Promise.resolve("primera promesa");
// promesa1.then( texto => console.log(texto));

// /* CREAMOS Y PROCESAMOS LA PROMESA */
// let promesa1 = Promise.resolve("primera promesa");
// promesa1
//     .then( texto => Promise.resolve(texto + ' texto'))
//     .then( nuevoText => console.log(nuevoText));

// /* MANEJAMOS EL ERROR */
// let promesa1 = Promise.resolve("primera promesa")
// promesa1
//     .then( texto => Promise.reject("Error!"))
//     .then( nuevoText => console.log("nunca se ejecuta"))
//     .catch( error => console.log(error));

// let promesa = bool => new Promise((resolve,reject) => {
//     if(bool){
//         setTimeout(() => resolve("Genial!"), 1000)
//     }else{
//         setTimeout(() => reject("Error!"), 2000)
//     }
// })
// promesa(true)
//     .then( texto => console.log(texto))
//     .catch( error => console.log(error))
