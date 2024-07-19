/* Saludo Personalizado
Descripción: Crea una función que tome un nombre como parámetro y 
devuelva un saludo personalizado. Por ejemplo, si el nombre es "Juan", 
la función debería devolver "Hola, Juan!".*/
function saludoPersonalizado(nombre){
    return `Hola, ` + nombre;
}
let saludo = saludoPersonalizado('Gael');

console.log(saludo);