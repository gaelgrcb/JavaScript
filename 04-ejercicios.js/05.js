/*
Palíndromo
Descripción: Escribe una función que tome una cadena 
de texto como parámetro y determine si es un palíndromo 
(es decir, si se lee igual de adelante hacia atrás). 
Por ejemplo, "radar" es un palíndromo, pero "hola" no lo es.
*/
function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los espacios
    let sinEspacios = cadena.toLowerCase().replace(/\s/g, '');

    // Comparar la cadena con su versión invertida
    return sinEspacios === sinEspacios.split('').reverse().join('');
}

console.log(esPalindromo("radar")); // true