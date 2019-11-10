// CONCAT

// concat 2 arrays
const concat = (a, b) => {
    return [...a, ...b];
}

// concat more than 2 arrays
const concatMultiple = (...arrays) => {
    let response = [];

    for (let array of arrays) {
        response = concat(response, array);
    }

    return response;
}


// Testing functions
array1 = [2, 4, 6];
array2 = [8, 10, 12];
array3 = [14, 16, 18];
array4 = [20, 22, 24];
console.log(concat(array1, array2));
console.log(concatMultiple(array1, array2, array3));
console.log(concatMultiple(array1, array2, array3, array4));