// --- EJERCICIO ------------------------------------------------------------------------

// La siguiente situación es muy habitual en JS: al recibir argumentos de una función
// queremos asegurarnos que no sean "undefined" o nulos. Supon que input es siempre de
// tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.

// TIP: Convierte el if/else a un operador ternario. Utiliza también el operador OR.

function f(input) {
    return (input === undefined || input === null) ? "Unknown" : input;
}

console.log(f("Probando"));
console.log(f(undefined));
console.log(f(null));