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
console.log(head(array));
console.log(tail(array));
console.log(init(array));
console.log(last(array));