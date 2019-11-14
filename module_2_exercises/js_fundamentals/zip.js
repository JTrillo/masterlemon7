// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función zipObject que acepte un array de claves como primer argumento y un array de valores como segundo argumento
// cuyo objetivo sea crear un objeto uniendo las claves con sus valores.
// Asumir que el array de claves tiene como mínimo la misma longitud que el de valores.

// Solución
function zipObject(keys, values) {
    if (keys.length < values.length) {
        return "Keys array must be at least the same size than values array.";
    }
    var response = {};
    values.forEach(function(element, index) {
        response[keys[index]] = element;
    });
    return response;
}

// Ejemplos
//console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
//console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
//console.log(zipObject(["spanish", "english"], ["hola", "hi", "salut"])); // Keys array must be at least the same size than values array.

export { zipObject }