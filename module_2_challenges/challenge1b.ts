const aplanarArrayTipado = <T>(input:T[]): T[] => {
    let arrayAplanado:T[] = [];
    for (let i in input) {
        if (Array.isArray(input[i])) {
            //Si el elemento es un array interno, hacemos una llamada recursiva a esta misma función
            let interno:T[] = <T[]><unknown>input[i];
            let aux = aplanarArrayTipado(interno);
            //Concatenamos lo que teníamos con lo que acabamos de recibir
            arrayAplanado = [...arrayAplanado, ...aux];
        } else {
            arrayAplanado.push(input[i]);
        }
    }
    return arrayAplanado;
}

const sampleA = [1, [2, 3],
    [
        [4],
        [5, 6, [7, 8, [9]]]
    ]
];

const sampleB = ["1", ["2", "3"],
    [
        ["4"],
        ["5", "6", ["7", "8", ["9"]]]
    ]
];

//Ejemplos:
const sampleAAplanado = aplanarArrayTipado(sampleA);
console.log(sampleAAplanado);
const sampleBAplanado = aplanarArrayTipado(sampleB);
console.log(sampleBAplanado);