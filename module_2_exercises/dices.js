var crearDados = function() {
    var resultadoDados = [undefined, undefined];

    return {
        reset: function() {
            resultadoDados = [undefined, undefined];
        },
        tirarDados: function() {
            resultadoDados[0] = Math.floor(Math.random() * 6) + 1;
            resultadoDados[1] = Math.floor(Math.random() * 6) + 1;
        },
        mostrarResultado: function() {
            if (resultadoDados[0] === undefined) {
                console.log("PRIMERO DEBES TIRAR LOS DADOS!!!");
            } else if (resultadoDados[0] === 6 && resultadoDados[1] === 6) {
                console.log("DOBLE 6!!! PREMIO!!!");
            } else {
                console.log("No has sacado doble 6... (resultado: " + resultadoDados[0] + ", " + resultadoDados[1] + ")");
            }
        }
    };

};

//Ejemplo
var dados = crearDados();

dados.tirarDados();
dados.mostrarResultado();
dados.reset();
dados.mostrarResultado();