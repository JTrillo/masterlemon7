let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
    (count++, `${text} `.repeat(repetitions).trim())
const memoize = (f:any) =>{
    const memory = {};
    return (...args) => {
        let aux = JSON.stringify(args);
        if (memory[aux] !== undefined) {
            return memory[aux];
        } else {
            memory[aux] = f(...args);
            return memory[aux];
        }
    }
}
const memoizedGreet = memoize(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count);