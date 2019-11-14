// Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (array) => {
    let [first] = array;
    return first;
};

// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (array) => {
    let [, ...tail] = array;
    return tail;
};

// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = (array) => {
    return array.slice(0, array.length - 1);
};

// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = (array) => {
    return array[array.length - 1];
};

//Ejemplo
const array = [2, 3, 4];
console.log(head(array));
console.log(tail(array));
console.log(init(array));
console.log(last(array));