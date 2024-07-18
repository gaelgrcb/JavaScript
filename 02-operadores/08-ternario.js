// Función para demostrar el uso del operador ternario
function verificarEdad(edad) {
    // El operador ternario se utiliza para decidir si la persona es mayor de edad o no.
    // Si 'edad' es mayor o igual a 18, retorna "Mayor de edad", de lo contrario, retorna "Menor de edad".
    let resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
    console.log(`Edad: ${edad} - ${resultado}`);
}

// Función para determinar si un número es par o impar
function esPar(numero) {
    // El operador ternario se utiliza para determinar si el número es par o impar.
    // Si 'numero' módulo 2 es igual a 0, retorna "Par", de lo contrario, retorna "Impar".
    let resultado = (numero % 2 === 0) ? "Par" : "Impar";
    console.log(`Número: ${numero} - ${resultado}`);
}

// Función para asignar un valor predeterminado si una variable es nula o indefinida
function asignarValor(variable) {
    // El operador ternario se utiliza para asignar un valor predeterminado si 'variable' es nula o indefinida.
    // Si 'variable' es verdadera (no nula, no indefinida, no 0, no false), se usa su valor,
    // de lo contrario, se asigna "Valor predeterminado".
    let valor = (variable) ? variable : "Valor predeterminado";
    console.log(`Variable: ${variable} - ${valor}`);
}

// Llamadas a las funciones
verificarEdad(20); // Salida: Edad: 20 - Mayor de edad
verificarEdad(16); // Salida: Edad: 16 - Menor de edad

esPar(10); // Salida: Número: 10 - Par
esPar(7);  // Salida: Número: 7 - Impar

asignarValor("Hola");        // Salida: Variable: Hola - Hola
asignarValor(null);          // Salida: Variable: null - Valor predeterminado
asignarValor(undefined);     // Salida: Variable: undefined - Valor predeterminado
asignarValor(0);             // Salida: Variable: 0 - Valor predeterminado
asignarValor(false);         // Salida: Variable: false - Valor predeterminado
