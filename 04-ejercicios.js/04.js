/*
Números Pares
Descripción: Crea una función que reciba un número como parámetro 
y devuelva un array con todos los números pares desde 0 
hasta ese número. Por ejemplo, si el número es 10, la función 
debería devolver [0, 2, 4, 6, 8, 10].
*/
function pares(a){
    let incremento= 2;
    for (i=0; i <= a; i+=2){
        console.log(i);
    }
}

let numero = pares(10);

console.log(numero);