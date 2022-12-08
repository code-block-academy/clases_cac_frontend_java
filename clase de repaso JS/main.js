let numeros = [11,10,9]

document.write(mostrarTablaDe(numeros,9))

function mostrarTablaDe(listaNumeros, hasta){
    let contedorHTML = '<div>'
    for (let i = 0; i < listaNumeros.length; i++) {
        contedorHTML += crearTablaDe(listaNumeros[i],hasta);        
    }
    // listaNumeros.forEach(function(element){
    //     contedorHTML += crearTablaDe(element,hasta)
    // });
    contedorHTML += '</div>'
    return contedorHTML;
}

function crearTablaDe(numero, hasta){
    let contenidoHTML = `
    <div>
        <h2>La tabla de multiplicar del ${numero} es:</h2>
    `
    for (let i = 1; i <= hasta; i++) {
     contenidoHTML += `<p>${numero} x ${i}: ${numero * i}</p>`   
    }
    contenidoHTML += '</div>'
    return contenidoHTML;
}


// version simplificada del ejercicio 2
let contenedorHTML = '<div>'
for (let i = 11; i >= 9; i--) {
    contenedorHTML += `<h2> titulo ${i}</h2>`
    for (let j = 1; j <= 9; j++) {
        contenedorHTML += `<p>${i} X ${j}: ${i * j}</p>`
    }
}
contenedorHTML += '</div>'
document.write(contenedorHTML)





// Primer ejercicio
// const primero = 40;
// const segundo = 16;
// const sumaTotal = suma(primero, segundo);

// function mostrarResultado(primero,segundo,sumaTotal){
//     let contenidoHTML = `
//     <h2>El resultado de sumar las dos variables x1 y x2 es: </h2>
//     <p class="claseCSS">
//         donde x1 es: ${primero}
//         <br>
//         donde x2 es: ${segundo}
//         <br>
//         Resultado: ${sumaTotal}
//     </p>
//     `
//     document.write(contenidoHTML);
// }

// function suma(numero1, numero2){
//     return numero1 + numero2;
// }