function includes(array, value) {
    return array.indexOf(value) !== -1;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false