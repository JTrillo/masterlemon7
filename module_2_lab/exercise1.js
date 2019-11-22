// ARRAY OPERATIONS

// Head function
const head = (input) => {
    let [first] = input;
    return first;
}

// Tail function
const tail = (input) => {
    [, ...aux] = input;
    return aux;
}

// Init function
const init = (input) => {
    return input.slice(0, -1);
}

// Last function
const last = (input) => {
    return input[input.length - 1];
}


// Testing functions
array = [2, 3, 4]
console.log("HEAD", head(array));
console.log("TAIL", tail(array));
console.log("INIT", init(array));
console.log("LAST", last(array));
console.log("ORIGINAL ARRAY", array); //Para comprobar que el array original no se ha modificado