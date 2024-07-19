// Ejemplo de bucle for...of en JavaScript

// Declaramos un array con algunos elementos
const numeros = [1, 2, 3, 4, 5];

// Estructura del bucle for...of:
// for (variable of iterable) {
//     // Código a ejecutar en cada iteración
// }

for (let numero of numeros) {
    // Dentro del bucle, imprimimos el valor del elemento actual
    console.log("El número es: " + numero);
}

// Salida esperada:
// El número es: 1
// El número es: 2
// El número es: 3
// El número es: 4
// El número es: 5
