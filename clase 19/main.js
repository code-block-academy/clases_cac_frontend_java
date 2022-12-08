const menu = {
  entrada: "pan",
  platoPrincipal: "pizza",
  postre: "helado",
  precio: 500,
  conDescuento: false,
  descuentoAplicar: 0.2,
};

// for (const key in menu) {
//   console.log(key, menu[key]);
// }
// console.log("primero");
// console.log("segundo");
// console.log("tercero");

// setTimeout(() => console.log("tercero"), 5000); //esperando 1s
// setTimeout(() => console.log("segundo"), 3000); //esperando 0.5s
// console.log("primero"); //se ejecuta

// console.log("peticion al servidor......");
// console.log("mostrar datos....");
// const menu2 = menu;
// menu2.precio = 150;
// console.log(menu.precio);

// console.log(menu.precio);
// console.log(menu.postre);

// function mostarLog(prop1, prop2) {
//   console.log(menu[prop1]);
//   console.log(menu[prop2]);
// }
// mostarLog("precio", "postre");

// let numero1 = 50;
// let numero2 = numero1;
// numero2++;
// console.log(numero1);

// promesas
// let promesa = Promise.resolve("primera promesa");
// promesa
//   .then((texto) => Promise.resolve(texto + " nuevo texto"))
//   .then((texto) => Promise.reject("Error!"))
//   .then((textoNuevo) => console.log("nunca se ejecuta"))
//   .catch((error) => console.log(error));

const JSONPlaceHolder = "https://jsonplaceholder.typicode.com";
const div = document.querySelector("#prueba");
fetch(`${JSONPlaceHolder}/users`)
  .then((respuesta) => respuesta.json())
  .then((data) =>
    data.forEach((user) => {
      div.innerHTML += `
            <div>
                <h1>${user.name}</h1>
                <p>${user.website}</p>
            </div>
            
        `;
    })
  );
