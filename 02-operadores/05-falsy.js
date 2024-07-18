// Short-circuit con el operador OR (||)
function obtenerNombreUsuario(usuario) {
    // Si 'usuario' es nulo, indefinido, falso, 0, "", NaN,
    // el valor por defecto 'Invitado' será asignado.
    // Esto se debe a que el operador || retorna el primer valor verdadero.
    let nombre = usuario || "Invitado";
    console.log("Nombre del usuario: " + nombre);
}

// Llamadas a la función
obtenerNombreUsuario("Carlos"); // Salida: Nombre del usuario: Carlos
obtenerNombreUsuario(null);     // Salida: Nombre del usuario: Invitado
obtenerNombreUsuario("");       // Salida: Nombre del usuario: Invitado


// Short-circuit con el operador AND (&&)
function verificarEdad(edad) {
    // Si 'edad' es mayor o igual a 18, la función retornará "Acceso permitido".
    // De lo contrario, retornará "Acceso denegado".
    // El operador && retorna el primer valor falso encontrado
    // o el último valor si todos son verdaderos.
    let mensaje = (edad >= 18) && "Acceso permitido" || "Acceso denegado";
    console.log(mensaje);
}

// Llamadas a la función
verificarEdad(20); // Salida: Acceso permitido
verificarEdad(16); // Salida: Acceso denegado


// Uso de short-circuit en asignación condicional
function obtenerDescuento(precio, esMiembro) {
    // Si 'esMiembro' es verdadero, aplicar descuento del 10%,
    // de lo contrario, el precio se mantiene igual.
    let precioFinal = esMiembro && (precio * 0.9) || precio;
    console.log("Precio final: $" + precioFinal);
}

// Llamadas a la función
obtenerDescuento(100, true);  // Salida: Precio final: $90
obtenerDescuento(100, false); // Salida: Precio final: $100
