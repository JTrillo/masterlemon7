const aplanarArray = (input) => {
    let arrayAplanado = [];
    for (let i in input) {
        if (Array.isArray(input[i])) {
            //Si el elemento es un array interno, hacemos una llamada recursiva a esta misma función
            let aux = aplanarArray(input[i]);
            //Concatenamos lo que teníamos con lo que acabamos de recibir
            arrayAplanado = [...arrayAplanado, ...aux];
        } else {
            arrayAplanado.push(input[i]);
        }
    }
    return arrayAplanado;
}

const sample = [1, [2, 3],
    [
        [4],
        [5, 6, [7, 8, [9]]]
    ]
];

const sampleAplanado = aplanarArray(sample);
console.log(sampleAplanado);