//Crea un algoritmo que devuelva numero menor y mayor 
//de un array

let array = [2, 10, 4, -10, 20];

function mayormenor(array) {
    // Inicializar min y max con el primer elemento del array
    let min = array[0];
    let max = array[0];

    // Recorrer el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
        // Actualizar min si se encuentra un valor menor
        if (array[i] < min) {
            min = array[i];
        }
        // Actualizar max si se encuentra un valor mayor
        if (array[i] > max) {
            max = array[i];
        }
    }

    // Devolver un objeto con los valores min y max
    return {
        min: min,
        max: max
    };
}

// Prueba de la función con el array definido
console.log(mayormenor(array));
