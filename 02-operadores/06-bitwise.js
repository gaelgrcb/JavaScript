// Operador AND (&)
function bitwiseAnd(a, b) {
    // Realiza una operación AND bit a bit entre 'a' y 'b'
    let resultado = a & b;
    console.log(`${a} & ${b} = ${resultado}`);
}

// Operador OR (|)
function bitwiseOr(a, b) {
    // Realiza una operación OR bit a bit entre 'a' y 'b'
    let resultado = a | b;
    console.log(`${a} | ${b} = ${resultado}`);
}

// Operador XOR (^)
function bitwiseXor(a, b) {
    // Realiza una operación XOR bit a bit entre 'a' y 'b'
    let resultado = a ^ b;
    console.log(`${a} ^ ${b} = ${resultado}`);
}

// Operador NOT (~)
function bitwiseNot(a) {
    // Realiza una operación NOT bit a bit en 'a'
    let resultado = ~a;
    console.log(`~${a} = ${resultado}`);
}

// Operador de desplazamiento a la izquierda (<<)
function leftShift(a, posiciones) {
    // Desplaza los bits de 'a' a la izquierda 'posiciones' veces
    let resultado = a << posiciones;
    console.log(`${a} << ${posiciones} = ${resultado}`);
}

// Operador de desplazamiento a la derecha (>>)
function rightShift(a, posiciones) {
    // Desplaza los bits de 'a' a la derecha 'posiciones' veces
    let resultado = a >> posiciones;
    console.log(`${a} >> ${posiciones} = ${resultado}`);
}

// Llamadas a las funciones
bitwiseAnd(5, 3);    // Salida: 5 & 3 = 1
bitwiseOr(5, 3);     // Salida: 5 | 3 = 7
bitwiseXor(5, 3);    // Salida: 5 ^ 3 = 6
bitwiseNot(5);       // Salida: ~5 = -6
leftShift(5, 1);     // Salida: 5 << 1 = 10
rightShift(5, 1);    // Salida: 5 >> 1 = 2
