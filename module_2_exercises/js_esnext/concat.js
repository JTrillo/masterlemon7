// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la
// concatenación de ambos. Utiliza rest / spread.
// TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat().

const concat = (a, b) => {
    return [...a, ...b];
};

// B. Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites
// solamente a 2).

const concatMulti = (...arrays) => {
    response = [];
    arrays.forEach(element => response = concat(response, element));
    return response;
};

//Ejemplo
array1 = [1, 2, 3];
array2 = [4, 5, 6];
array3 = [7, 8, 9];
array4 = [10];
console.log(concat(array1, array2));
console.log(concatMulti(array1, array2, array3, array4));