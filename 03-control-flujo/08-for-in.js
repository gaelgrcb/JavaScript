// Ejemplo de bucle for...in en JavaScript

// Declaramos un objeto con algunas propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Estructura del bucle for...in:
// for (variable in objeto) {
//     // Código a ejecutar en cada iteración
// }

for (let propiedad in persona) {
    // Dentro del bucle, imprimimos la propiedad y su valor
    console.log(propiedad + ": " + persona[propiedad]);
}

// Salida esperada:
// nombre: Juan
// edad: 30
// ciudad: Madrid
