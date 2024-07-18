// Función para demostrar el orden de operaciones en JavaScript
function calcular() {
    // Declaramos algunas variables
    let a = 5;
    let b = 10;
    let c = 15;
    let d = 20;

    // Operaciones aritméticas básicas
    let suma = a + b;           // 5 + 10 = 15
    let resta = c - a;          // 15 - 5 = 10
    let multiplicacion = b * c; // 10 * 15 = 150
    let division = d / a;       // 20 / 5 = 4

    // Operaciones combinadas con paréntesis para alterar el orden
    let resultado1 = a + b * c;         // 5 + (10 * 15) = 5 + 150 = 155
    let resultado2 = (a + b) * c;       // (5 + 10) * 15 = 15 * 15 = 225
    let resultado3 = a + (b * c) / d;   // 5 + (10 * 15) / 20 = 5 + 150 / 20 = 5 + 7.5 = 12.5
    let resultado4 = (a + b) * (c - d); // (5 + 10) * (15 - 20) = 15 * (-5) = -75

    // Operador de incremento y decremento
    let incremento = a++;   // incremento después de usar a: resultado = 5, luego a = 6
    let decremento = --b;   // decremento antes de usar b: resultado = 9, luego b = 9

    // Operadores de asignación compuesta
    let asignacion = 10;
    asignacion += 5;  // asignacion = asignacion + 5; resultado = 15
    asignacion *= 2;  // asignacion = asignacion * 2; resultado = 30

    // Mostrar resultados en la consola
    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + multiplicacion);
    console.log("División: " + division);
    console.log("Resultado 1 (sin paréntesis): " + resultado1);
    console.log("Resultado 2 (con paréntesis): " + resultado2);
    console.log("Resultado 3 (paréntesis combinados): " + resultado3);
    console.log("Resultado 4 (con paréntesis): " + resultado4);
    console.log("Incremento (a++): " + incremento);
    console.log("Decremento (--b): " + decremento);
    console.log("Asignación compuesta: " + asignacion);
}

// Llamar a la función para ver los resultados
calcular();
