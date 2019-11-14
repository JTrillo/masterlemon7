// A. Intenta razonar cual será el resultado de la consola al ejecutar este código:

/*var a = 1;
let b = 2;

{
    try {
        console.log(a, b);
    } catch (error) {
        let b = 3;
        console.log(a, b);
    }
}

console.log(a, b);

() => {
    console.log(a);
    var a = 5;
    let b = 6;
    console.log(a, b);
};

console.log(a, b);*/

// 1 2 (linea 8)
// 1 2 (linea 15)
// 1 2 (linea 24)

// B. Sin tocar ninguno de los 'console.log' anteriores, modifica ligeramente el
// código para que muestre la siguiente secuencia:

var a = 1;
let b = 2;

{
    try {
        let b = 3;
        console.log(a, b);
        throw new Error();
    } catch (error) {
        let b = 3;
        console.log(a, b);
    }
}

console.log(a, b);

(() => {
    var a = 5;
    console.log(a);

    let b = 6;
    console.log(a, b);
})();

console.log(a, b);

// 1 3 (linea 39)
// 1 3 (linea 43)
// 1 2 (linea 47)
// 5   (linea 51)
// 5 6 (linea 54)
// 1 2 (linea 57)