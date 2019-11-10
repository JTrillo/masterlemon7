const aplanarArrayTipado = <T>(input:T[]): T[] => {
    let arrayAplanado:T[] = [];
    for (let i in input) {
        if (Array.isArray(input[i])) {
            //Si el elemento es un array interno, hacemos una llamada recursiva a esta misma función
            let aux = aplanarArrayTipado(input[i]);
            //Añadimos elemento a elemento del array parcialmente aplanado
            for (let j in aux) {
                arrayAplanado.push(aux[j]);
            }
        } else {
            arrayAplanado.push(input[i]);
        }
    }
    return arrayAplanado;
}

const sampleB = [1, [2, 3],
    [
        [4],
        [5, 6, [7, 8, [9]]]
    ]
];

const sampleBAplanado = aplanarArrayTipado(sampleB);
console.log(sampleBAplanado);