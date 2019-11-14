const fib = (n) => {
    if (n < 0) return "INTRODUZCA UN NÚMERO MAYOR O IGUAL A CERO";
    if (n <= 1) return n;

    let actual = 1;
    let anterior = 0;
    for (let i = 1; i < n; i++) {
        [actual, anterior] = [actual + anterior, actual];
    }

    return actual;
};

//Ejemplo
console.log(fib(-1));
console.log(fib(2));
console.log(fib(10));